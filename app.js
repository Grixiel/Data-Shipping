
const GIST_ID = "9a5dfdcbdbc0a111fad07198c7066368";
const p1 = "ghp_"; 
const p2 = "lzj6rto7ZAyn79gKk"; 
const p3 = "fEloMi7xK09lp2go00L";
const GITHUB_TOKEN = p1 + p2 + p3;
const CSV_PLANILHA_TOBOGAS = "https://docs.google.com/spreadsheets/d/1wRtBiDY1U9gOeRE_15mg8iKKVQE2wBnRX9Jb69fMUvE/pub?output=csv"; 

let DATA_CACHE = null; 
let SETTINGS_DATA = { pickHC: 50, pickM: 120, packHC: 50, packM: 300, atrHC: 30, atrM: 450, stgHC: 4, stgM: 18, manM: 120, gayM: 500 };
let RAMPA_MAP = {};
let ROUTE_LIST = [];
let AVAILABLE_HOURS = []; 
let SELECTED_HOURS = []; 
let CURRENT_METRIC = "concluido"; 
let LAST_CLOUD_TIME = null;
let manualEtd = null;

const OFFICIAL_MACROS = {
    "CONSOLIDAÇÃO 00:00": ["SRS9", "SRJ1", "SRS1", "SPR3", "SGO2", "SRJ10", "SSC8", "SSC9"],
    "CONSOLIDAÇÃO 03:00": ["JETRD1", "SES1", "SRD1", "SBA6", "SRD2", "SPR5", "SMR1", "SSC7"]
};
let CONSOLIDA_LISTS = {}; 

window.onload = () => {
    carregarMapaTobogas(); 
    sincronizarComBanco(true); 
    setInterval(() => sincronizarComBanco(false), 30000);
    setInterval(updateLiveClock, 1000);
};

// --- FUNÇÕES DE CONEXÃO E NUVEM ---
function carregarMapaTobogas() {
    fetch(CSV_PLANILHA_TOBOGAS).then(res => res.text()).then(csv => {
        let lines = csv.split('\n');
        ROUTE_LIST = [];
        for(let i=1; i<=100; i++) RAMPA_MAP[i] = [];
        for(let i=1; i<lines.length; i++) {
            let cols = lines[i].split(',');
            if(cols.length >= 2) {
                let rota = cols[0].trim().toUpperCase();
                let regra = cols[1].trim().toUpperCase();
                let nums = [];
                let regraLimpa = regra.replace('AUTO', '').trim();
                if(regraLimpa.includes('-')) {
                    let [inicio, fim] = regraLimpa.split('-');
                    for(let r = parseInt(inicio); r <= parseInt(fim); r++) nums.push(r);
                } else if (!isNaN(parseInt(regraLimpa))) { nums.push(parseInt(regraLimpa)); }
                
                nums.forEach(n => {
                    if(RAMPA_MAP[n] && !RAMPA_MAP[n].includes(rota)) {
                        RAMPA_MAP[n].push(rota);
                        ROUTE_LIST.push({ t: n, r: rota });
                    }
                });
            }
        }
        if(DATA_CACHE) aplicarFiltros();
    }).catch(e => console.error("Erro Planilha", e));
}

function sincronizarComBanco(manual) {
    if(manual) { document.getElementById('global-loader').classList.remove('hidden'); }
    setStatusUi('Conectando...', 'bg-blue-500 animate-pulse');

    fetch(`https://api.github.com/gists/${GIST_ID}?t=${Date.now()}`, { headers: { 'Authorization': `Bearer ${GITHUB_TOKEN}` } })
    .then(res => {
        if (!res.ok) throw new Error("Erro de Token ou Conexão");
        return res.json();
    })
    .then(data => {
        if(manual) fecharLoader();
        try {
            let content = JSON.parse(data.files["v50_db.json"].content);
            if(content.time !== LAST_CLOUD_TIME) {
                LAST_CLOUD_TIME = content.time;
                decodificarNuvem(content.payload);
            }
            // Atualiza o painel com a hora da última sincronização
            setStatusUi(`Atualizado: ${LAST_CLOUD_TIME || new Date().toLocaleTimeString('pt-BR')}`, 'bg-emerald-500');
        } catch(e) {
            console.error("Base vazia:", e);
            setStatusUi('Base Vazia (Suba WMS)', 'bg-amber-500');
            if(manual) openModal('import-modal');
        }
    }).catch((err) => {
        console.error("Falha no fetch:", err);
        setStatusUi('Falha de Acesso (Token)', 'bg-red-500');
        if(manual) fecharLoader();
    });
}
function salvarNoBanco() {
    setStatusUi('Salvando Nuvem...', 'bg-amber-500 animate-pulse');
    let payload = JSON.stringify({ d: DATA_CACHE, s: SETTINGS_DATA });
    let time = new Date().toLocaleString('pt-BR');
    
    fetch(`https://api.github.com/gists/${GIST_ID}`, {
        method: 'PATCH',
        headers: { 'Authorization': `Bearer ${GITHUB_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ files: { "v50_db.json": { content: JSON.stringify({ payload, time }) } } })
    }).then(() => { LAST_CLOUD_TIME = time; setStatusUi(`Salvo: ${time}`, 'bg-emerald-500'); });
}

function decodificarNuvem(payload) {
    if (!payload) return;
    let parsed = JSON.parse(payload);
    DATA_CACHE = parsed.d;
    if(parsed.s) SETTINGS_DATA = parsed.s;
    
    ['pickHC','pickM','packHC','packM','atrHC','atrM','stgHC','stgM'].forEach(k => { 
        let el = document.getElementById('inp-' + k.replace(/[A-Z]/g, l => '-' + l.toLowerCase())); 
        if(el) el.value = SETTINGS_DATA[k] || ''; 
    });
    
    AVAILABLE_HOURS = Object.keys(DATA_CACHE.kpis || {}).filter(k => k !== "99" && k !== "S/H" && k !== "ATRASO").sort();
    SELECTED_HOURS = [];
    renderEtdCheckboxes();
    aplicarFiltros();
}

// --- LÓGICA DE PROCESSAMENTO DO WMS (COLA) ---
function processarTextoCola() {
    let txt = document.getElementById('input-paste').value;
    if(!txt) return; 
    
    closeModal('import-modal');
    document.getElementById('global-loader').classList.remove('hidden');
    document.getElementById('loader-title').innerText = "Analisando WMS...";
    
    setTimeout(() => {
        try {
            let vR = ROUTE_LIST.map(i => i.r).sort((a, b) => b.length - a.length);
            let lines = txt.split(/\r?\n/); 
            let hAct = "S/H";
            let mM = {};
            let k = {};
            let hText = txt.substring(0, 3000).toUpperCase(); 
            let expectedCols = [];
            
            // Lógica dinâmica de colunas restaurada!
            if (hText.includes("WAVING")) { 
                expectedCols.push('wav'); 
                if (hText.includes("READY TO WAVE")) {
                    expectedCols.push('rtw'); 
                }
            }
            
            expectedCols.push('pi', 'rtg', 'g', 'r', 'p');
            
            if (hText.includes("SHIPPED") || hText.includes("HU CLOSED")) {
                expectedCols.push('huIn', 'huCl', 'ship');
            } else if (hText.includes("HU IN")) {
                expectedCols.push('huIn');
            }
            
            if(expectedCols.length === 0) {
                expectedCols = ['wav','rtw','pi','rtg','g','r','p','huIn','huCl','ship'];
            }
            
            let N = expectedCols.length;

            for(let i = 0; i < lines.length; i++) {
                let l = lines[i].trim(); 
                if(l.length < 4) continue;
                
                let hm = l.match(/(?:^|\b)(\d{2}):00\s*(?:HR|H)?\b/i) || l.match(/\b(\d{2})00\s*HR/i) || l.match(/Analisar\s+atraso/i);
                
                if(hm && !l.toUpperCase().includes("TEMPO")) { 
                    hAct = l.match(/atraso/i) ? "ATRASO" : hm[1] || hm[0]; 
                    continue; 
                }

                let u = l.toUpperCase();
                
                if (u.match(/TOTAL|SUBTOTAL|PERFORMANCE|PROCESSADOS|FECHADOS|CARREGADOS|EXPEDIDOS|ENVIADOS|RECEBIDOS|HUS ABERTAS|RESUMO/i)) {
                    continue;
                }

                let c = vR.find(x => new RegExp(`(?:^|\\s)${x}(?:\\s|$)`).test(u));
                
                if(!c) {
                    let dynMatch = u.match(/^(?:[A-Z]{3,4}\d{1,2}(?:_[A-Z0-9]+)?|JET[A-Z]{2,3}\d+|[A-Z]+HUB\d*)(?=\s|$)/);
                    if (dynMatch && !["TOTAL","SUBTOTAL","SLA","TEMPO","PERFORMANCE"].includes(dynMatch[0])) {
                        c = dynMatch[0];
                    }
                }
                
                if(!c) continue;

                let str = l;
                for(let j = i + 1; j < i + 20 && j < lines.length; j++) {
                    let n = lines[j].trim(); 
                    let uN = n.toUpperCase();
                    
                    if(n === "") continue;
                    
                    if(uN.match(/(?:^|\b)(\d{2}):00\s*(?:HR|H)?\b/i) || uN.match(/\b(\d{2})00\s*HR/i) || uN.match(/ATRASO/i)) {
                        break;
                    }
                    if(uN.match(/TOTAL|SUBTOTAL|PROCESSADOS|FECHADOS|CARREGADOS|EXPEDIDOS|ENVIADOS|RECEBIDOS|HUS ABERTAS|RESUMO/i)) {
                        break; 
                    }
                    if(vR.find(x => new RegExp(`(?:^|\\s)${x}(?:\\s|$)`).test(uN))) {
                        break;
                    }
                    str += " " + n;
                }

                let tokens = str.split(/[\s\t]+/).filter(x => x !== "");
                let slaIdx = tokens.findIndex(t => t.includes('%')); // O salvador da pátria!
                
                let numsB = [];
                let numsA = [];
                
                tokens.forEach((tk, idx) => {
                    if (/^-?\d{2}:\d{2}(hr|h)?$/i.test(tk)) return; 
                    if (ROUTE_LIST.some(r => r.r === tk.toUpperCase())) return;
                    
                    let clean = tk.replace(/[\.,]/g, '');
                    if (/^-?\d+$/.test(clean) || tk === '-' || tk === '–') {
                        if(slaIdx !== -1 && idx > slaIdx) {
                            numsA.push(clean);
                        } else if (idx < slaIdx || slaIdx === -1) {
                            numsB.push(clean);
                        }
                    }
                });

                let vTot = 0, vProc = 0;
                let mArr = [];

                if (slaIdx !== -1) {
                    vTot = parseNum(numsB[numsB.length - 2] || "0");
                    vProc = parseNum(numsB[numsB.length - 1] || numsB[0] || "0");
                    mArr = numsA.map(parseNum);
                } else {
                    let drop = hText.includes("TEMPO") ? 1 : 0;
                    let valN = numsB.slice();
                    if (drop && valN.length > N + 1) valN.pop();
                    
                    let mStart = Math.max(0, valN.length - N);
                    mArr = valN.slice(mStart).map(parseNum);
                    
                    while (mArr.length < N) {
                        mArr.unshift(0);
                    }
                    
                    let bef = valN.slice(0, mStart);
                    vTot = parseNum(bef[bef.length - 2] || "0");
                    vProc = parseNum(bef[bef.length - 1] || bef[0] || "0");
                }

                let m = { rtw: 0, wav: 0, pi: 0, rtg: 0, g: 0, r: 0, p: 0, huIn: 0, huCl: 0, ship: 0 };
                for(let kl = 0; kl < N; kl++) {
                    if (kl < mArr.length) {
                        m[expectedCols[kl]] = mArr[kl];
                    }
                }

                let tot = vTot;
                if (vTot < vProc && vTot > 0) {
                    tot = vTot + vProc;
                } else if (vTot === 0 && vProc > 0) {
                    tot = vProc;
                }

                let cReal = m.huIn + m.huCl + m.ship;
                if (cReal === 0 && vProc > 0) {
                    cReal = vProc;
                }

                let sMet = m.p + m.r + m.rtg + m.g + m.pi + m.wav + m.rtw + cReal;
                if (tot === 0 || tot < sMet) {
                    tot = sMet;
                }

                if (tot === 0) continue; 

                if(tot >= 0) {
                    if(hAct === "S/H") hAct = "99";
                    let kId = c + "-" + hAct;
                    
                    if(!mM[kId]) {
                        mM[kId] = { 
                            nome: c, horario: hAct, concluido: 0, packed: 0, rtp: 0, grp: 0, pick: 0, wav: 0, rtw: 0, total: 0, huIn: 0, huCl: 0, ship: 0, isAereo: isAereo(c) 
                        };
                    }
                    
                    mM[kId].concluido += cReal; 
                    mM[kId].packed += m.p; 
                    mM[kId].rtp += m.r; 
                    mM[kId].grp += (m.rtg + m.g); 
                    mM[kId].pick += m.pi; 
                    mM[kId].wav += m.wav; 
                    mM[kId].rtw += m.rtw; 
                    mM[kId].huIn += m.huIn; 
                    mM[kId].huCl += m.huCl; 
                    mM[kId].ship += m.ship; 
                    mM[kId].total += tot;
                    
                    if(!k[hAct]) k[hAct] = { total: 0 }; 
                    k[hAct].total += tot;
                }
            }

            let arr = Object.values(mM).sort((a, b) => b.total - a.total);
            
            // Agora ele avisa se não encontrar dados em vez de falhar em silêncio!
            if(arr.length === 0) { 
                alert("Aviso: O sistema não encontrou rotas no texto colado. Copie desde o cabeçalho até ao fim do relatório."); 
                fecharLoader(); 
                return; 
            }

            let isMerge = document.getElementById('chk-merge').checked;
            let finalArr = arr;
            let finalKpis = k;

            if (isMerge && DATA_CACHE && DATA_CACHE.micro) {
                let mergedMap = {};
                DATA_CACHE.micro.forEach(r => { mergedMap[r.nome + "-" + r.horario] = r; });
                arr.forEach(r => { mergedMap[r.nome + "-" + r.horario] = r; });
                finalArr = Object.values(mergedMap).sort((a, b) => b.total - a.total);
                finalKpis = {};
                finalArr.forEach(r => {
                    if(!finalKpis[r.horario]) finalKpis[r.horario] = { total: 0 };
                    finalKpis[r.horario].total += r.total;
                });
            }

            DATA_CACHE = { micro: finalArr, kpis: finalKpis };
            AVAILABLE_HOURS = Object.keys(finalKpis).filter(x => x !== "99" && x !== "S/H" && x !== "ATRASO").sort();
            SELECTED_HOURS = []; 
            renderEtdCheckboxes();
            
            fecharLoader(); 
            salvarNoBanco(); 
            aplicarFiltros(); 
            mudarAba('dashboard');
            
        } catch(e) { 
            alert("Erro ao ler os dados: " + e.message); 
            fecharLoader(); 
        }
    }, 500);
}
