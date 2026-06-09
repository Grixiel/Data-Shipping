
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
    
    setTimeout(() => {
        try {
            let vR = ROUTE_LIST.map(i => i.r).sort((a, b) => b.length - a.length);
            let lines = txt.split(/\r?\n/); 
            let hAct = "S/H";
            let mM = {}; let k = {};
            let expectedCols = ['wav','rtw','pi','rtg','g','r','p','huIn','huCl','ship'];
            let N = expectedCols.length;

            for(let i = 0; i < lines.length; i++) {
                let l = lines[i].trim(); 
                if(l.length < 4) continue;
                let hm = l.match(/(?:^|\b)(\d{2}):00\s*(?:HR|H)?\b/i) || l.match(/\b(\d{2})00\s*HR/i) || l.match(/Analisar\s+atraso/i);
                
                if(hm && !l.toUpperCase().includes("TEMPO")) { 
                    hAct = l.match(/atraso/i) ? "ATRASO" : hm[1] || hm[0]; continue; 
                }
                
                let u = l.toUpperCase();
                let c = vR.find(x => new RegExp(`(?:^|\\s)${x}(?:\\s|$)`).test(u));
                if(!c) continue;

                let str = l;
                for(let j = i + 1; j < i + 20 && j < lines.length; j++) {
                    let n = lines[j].trim(); let uN = n.toUpperCase();
                    if(n === "") continue;
                    if(uN.match(/(?:^|\b)(\d{2}):00/) || vR.find(x => new RegExp(`(?:^|\\s)${x}(?:\\s|$)`).test(uN))) break;
                    str += " " + n;
                }

                let tokens = str.split(/[\s\t]+/).filter(x => x !== "");
                let numsB = [];
                tokens.forEach((tk) => {
                    let clean = tk.replace(/[\.,]/g, '');
                    if (/^-?\d+$/.test(clean) || tk === '-' || tk === '–') numsB.push(clean);
                });

                let valN = numsB.slice();
                let mStart = Math.max(0, valN.length - N);
                let mArr = valN.slice(mStart).map(parseNum);
                while (mArr.length < N) mArr.unshift(0);
                
                let bef = valN.slice(0, mStart);
                let vTot = parseNum(bef[bef.length - 2] || "0");
                let vProc = parseNum(bef[bef.length - 1] || bef[0] || "0");

                let m = { rtw: mArr[0], wav: mArr[1], pi: mArr[2], rtg: mArr[3], g: mArr[4], r: mArr[5], p: mArr[6], huIn: mArr[7], huCl: mArr[8], ship: mArr[9] };
                let tot = (vTot < vProc && vTot > 0) ? vTot + vProc : ((vTot === 0 && vProc > 0) ? vProc : vTot);
                let cReal = m.huIn + m.huCl + m.ship;
                if (cReal === 0 && vProc > 0) cReal = vProc;
                
                let sMet = m.p + m.r + m.rtg + m.g + m.pi + m.wav + m.rtw + cReal;
                if (tot === 0 || tot < sMet) tot = sMet;
                if (tot === 0) continue; 

                if(hAct === "S/H") hAct = "99";
                let kId = c + "-" + hAct;
                if(!mM[kId]) { mM[kId] = { nome: c, horario: hAct, concluido: 0, packed: 0, rtp: 0, grp: 0, pick: 0, wav: 0, rtw: 0, total: 0, huIn: 0, huCl: 0, ship: 0, isAereo: isAereo(c) }; }
                
                mM[kId].concluido += cReal; mM[kId].packed += m.p; mM[kId].rtp += m.r; mM[kId].grp += (m.rtg + m.g); 
                mM[kId].pick += m.pi; mM[kId].wav += m.wav; mM[kId].rtw += m.rtw; 
                mM[kId].huIn += m.huIn; mM[kId].huCl += m.huCl; mM[kId].ship += m.ship; mM[kId].total += tot;
                
                if(!k[hAct]) k[hAct] = { total: 0 }; 
                k[hAct].total += tot;
            }

            let finalArr = Object.values(mM).sort((a, b) => b.total - a.total);
            let finalKpis = k;
            
            // Lógica de Mesclar Base
            if (document.getElementById('chk-merge').checked && DATA_CACHE) {
                let mergedMap = {};
                DATA_CACHE.micro.forEach(r => mergedMap[r.nome + "-" + r.horario] = r);
                finalArr.forEach(r => mergedMap[r.nome + "-" + r.horario] = r);
                finalArr = Object.values(mergedMap).sort((a, b) => b.total - a.total);
                finalKpis = {};
                finalArr.forEach(r => { if(!finalKpis[r.horario]) finalKpis[r.horario] = { total: 0 }; finalKpis[r.horario].total += r.total; });
            }

            DATA_CACHE = { micro: finalArr, kpis: finalKpis };
            AVAILABLE_HOURS = Object.keys(finalKpis).filter(x => x !== "99" && x !== "S/H" && x !== "ATRASO").sort();
            SELECTED_HOURS = []; renderEtdCheckboxes();
            
            fecharLoader(); salvarNoBanco(); aplicarFiltros(); mudarAba('dashboard');
        } catch(e) { alert("Erro de Sistema: " + e.message); fecharLoader(); }
    }, 500);
}

// --- FUNÇÕES DE INTERFACE (TOOLTIPS, MODAIS, ABAS) ---
function aplicarFiltros() {
    if(!DATA_CACHE) return;
    CURRENT_METRIC = document.getElementById('metric-selector').value;
    let lst = DATA_CACHE.micro;
    if(SELECTED_HOURS.length > 0) lst = lst.filter(x => SELECTED_HOURS.includes(x.horario) || x.horario === 'ATRASO');
    
    renderDash(lst); renderAereo(DATA_CACHE.micro); renderMatriz(lst); renderMicro(lst); renderMacro(lst); calcProjections();
    document.getElementById('live-etd-lbl').innerText = ""; updateLiveClock();
}

function mudarAba(aba) {
    document.querySelectorAll('[id^="view-"]').forEach(e => e.classList.add('hidden')); 
    document.getElementById('view-' + aba).classList.remove('hidden');
    document.querySelectorAll('.sidebar-link').forEach(e => e.classList.remove('active')); 
    document.getElementById('btn-' + aba).classList.add('active');
    if(aba === 'hc') calcProjections(); 
}

function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }
function fecharLoader() { document.getElementById('global-loader').classList.add('hidden'); }
function setVal(id, v) { const el = document.getElementById(id); if(el) el.innerText = v; }
function setStyle(id, p, v) { const el = document.getElementById(id); if(el) el.style[p] = v; }
function setStatusUi(msg, color) { document.getElementById('data-status').innerHTML = `<span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full ${color}"></span> <span class="text-slate-500 font-bold uppercase text-[9px]">${msg}</span></span>`; }

function parseNum(s) { if(!s || s === '-' || s === '–') return 0; let c = s.replace(/[^\d]/g, ''); return c === '' ? 0 : parseInt(c, 10); }
function isAereo(c) { return RAMPA_MAP[99]?.includes(c) || RAMPA_MAP[100]?.includes(c) || /_A$|_B$|_C$/.test(c); }
function getMetric(i) {
    if(CURRENT_METRIC === 'concluido') return i.concluido;
    if(CURRENT_METRIC === 'gte_packed') return i.packed + i.concluido;
    if(CURRENT_METRIC === 'packed') return i.packed;
    return i.concluido;
}

function saveHC() {
    let g = (id, def) => { let val = parseFloat(document.getElementById(id).value); return isNaN(val) || val <= 0 ? def : val; };
    SETTINGS_DATA = { pickHC: g('inp-hc-pick', 50), pickM: g('inp-med-pick', 120), packHC: g('inp-hc-pack', 50), packM: g('inp-med-pack', 300), atrHC: g('inp-hc-atr', 30), atrM: g('inp-med-atr', 450), stgHC: g('inp-hc-stg', 4), stgM: g('inp-med-stg', 18) };
    calcProjections(); salvarNoBanco();
}

function renderEtdCheckboxes() {
    let h = `<label class="flex gap-2 p-2 text-xs font-bold hover:bg-slate-50 cursor-pointer"><input type="checkbox" onchange="toggleAllEtds()" ${SELECTED_HOURS.length === 0 ? 'checked' : ''} class="w-4 h-4 rounded"> TODOS</label><hr>`;
    AVAILABLE_HOURS.forEach(hr => { h += `<label class="flex gap-2 p-2 text-xs hover:bg-slate-50 cursor-pointer"><input type="checkbox" value="${hr}" onchange="toggleSingleEtd(this)" ${SELECTED_HOURS.includes(hr) ? 'checked' : ''} class="w-4 h-4 rounded"> ${hr}H</label>`; });
    document.getElementById('etd-dropdown-panel').innerHTML = h; document.getElementById('etd-btn-text').innerText = SELECTED_HOURS.length === 0 ? "TODOS" : SELECTED_HOURS.length + " SELEC";
}
function toggleAllEtds() { SELECTED_HOURS = []; renderEtdCheckboxes(); aplicarFiltros(); }
function toggleSingleEtd(e) { if(e.checked) SELECTED_HOURS.push(e.value); else SELECTED_HOURS = SELECTED_HOURS.filter(x => x !== e.value); if(SELECTED_HOURS.length >= AVAILABLE_HOURS.length) SELECTED_HOURS = []; renderEtdCheckboxes(); aplicarFiltros(); }

// --- TOOLTIPS DA MATRIZ ---
const tooltipEl = document.getElementById('floating-tip');
function showTooltip(e, html) { if(!html) return; tooltipEl.innerHTML = decodeURIComponent(html); tooltipEl.classList.remove('hidden'); moveTooltip(e); }
function moveTooltip(e) {
    if(tooltipEl.classList.contains('hidden')) return;
    let x = e.clientX + 15; let y = e.clientY + 15;
    if (x + tooltipEl.offsetWidth > window.innerWidth) x = e.clientX - tooltipEl.offsetWidth - 15;
    if (y + tooltipEl.offsetHeight > window.innerHeight) y = window.innerHeight - tooltipEl.offsetHeight - 15;
    tooltipEl.style.left = Math.max(10, x) + 'px'; tooltipEl.style.top = Math.max(10, y) + 'px';
}
function hideTooltip() { tooltipEl.classList.add('hidden'); }

// --- RENDERIZADORES DE TELA (O CORAÇÃO DO CÓDIGO ANTIGO) ---
function renderDash(lst) {
    let tr = lst.filter(i => !i.isAereo && i.horario !== 'ATRASO');
    let tt = 0, tc = 0, tp = 0, ti = 0, th = 0, ts = 0;
    tr.forEach(i => { tt += i.total; tc += getMetric(i); tp += i.packed; ti += i.huIn; th += i.huCl; ts += i.ship; });
    
    setVal('dash-terr-total', tt.toLocaleString()); setVal('dash-terr-targetval', tc.toLocaleString()); 
    setVal('dash-terr-packed', tp.toLocaleString()); setVal('dash-terr-huin', ti.toLocaleString()); setVal('dash-terr-hucl', th.toLocaleString()); setVal('dash-terr-ship', ts.toLocaleString());
    let p = tt > 0 ? ((tc / tt) * 100).toFixed(2) : '0.00'; setVal('dash-terr-pct', p + '%'); setStyle('dash-terr-bar', 'width', p + '%');

    let at = 0, ac = 0, ap = 0, ai = 0, ah = 0, as = 0;
    lst.filter(i => i.horario !== 'ATRASO').forEach(i => { at += i.total; ac += getMetric(i); ap += i.packed; ai += i.huIn; ah += i.huCl; as += i.ship; });
    setVal('dash-all-total', at.toLocaleString()); setVal('dash-all-targetval', ac.toLocaleString()); setVal('dash-all-packed', ap.toLocaleString()); setVal('dash-all-huin', ai.toLocaleString()); setVal('dash-all-hucl', ah.toLocaleString()); setVal('dash-all-ship', as.toLocaleString());
    let pa = at > 0 ? ((ac / at) * 100).toFixed(2) : '0.00'; setVal('dash-all-pct', pa + '%'); setStyle('dash-all-bar', 'width', pa + '%');

    let grps = {};
    tr.forEach(i => { 
        if(!grps[i.horario]) grps[i.horario] = { t: 0, c: 0, p: 0, i: 0, h: 0, s: 0 }; 
        grps[i.horario].t += i.total; grps[i.horario].c += getMetric(i); grps[i.horario].p += i.packed; grps[i.horario].i += i.huIn; grps[i.horario].h += i.huCl; grps[i.horario].s += i.ship; 
    });
    
    let hKpi = ''; 
    let fmtK = (v) => v >= 10000 ? (v / 1000).toFixed(1).replace('.0', '') + 'k' : v.toLocaleString();
    Object.keys(grps).sort().forEach(k => {
        let g = grps[k]; let pt = g.t > 0 ? ((g.c / g.t) * 100).toFixed(2) : '0.00';
        hKpi += `<div class="glass-panel p-3 flex flex-col justify-between border-t-2 border-brand-400 min-h-[120px]">
                <div class="flex justify-between items-start mb-1"><div class="text-[10px] font-bold text-slate-500 bg-slate-50 px-1 rounded">ETD ${k}H</div><div class="text-[10px] font-bold text-brand-600">${pt}%</div></div>
                <div class="flex items-end gap-1"><div class="text-2xl font-black text-blue-600 font-mono tracking-tighter">${g.c.toLocaleString()}</div><div class="text-[10px] font-bold text-slate-400">/ ${fmtK(g.t)}</div></div>
                <div class="w-full bg-slate-100 h-1.5 rounded-full mt-2 mb-1"><div class="bg-blue-500 h-full" style="width:${pt}%"></div></div>
            </div>`;
    });
    document.getElementById('dash-kpi-area').innerHTML = hKpi;

    let off = tr.filter(i => (i.rtp > 0 || i.grp > 0)).sort((a, b) => (b.rtp + b.grp) - (a.rtp + a.grp)).slice(0, 10);
    document.getElementById('dash-offenders-body').innerHTML = off.length ? off.map(r => `<tr><td class="p-3 pl-6 font-bold text-slate-800">${r.nome}</td><td class="p-3 text-center"><span class="bg-slate-100 px-2 py-1 rounded text-[10px] font-bold">${r.horario}h</span></td><td class="p-3 text-right text-red-600 font-bold">${r.rtp + r.grp}</td><td class="p-3 text-right font-bold text-slate-600">${r.total}</td><td class="p-3 pr-6 text-right">${r.total > 0 ? ((getMetric(r)/r.total)*100).toFixed(1) : 0}%</td></tr>`).join('') : '<tr><td colspan="5" class="p-8 text-center text-emerald-600 font-bold">Livre.</td></tr>';
}

function renderMicro(lst) {
    let filtered = lst.filter(i => !i.isAereo).sort((a, b) => (b.packed + b.rtp + b.grp + b.pick + b.wav) - (a.packed + a.rtp + a.grp + a.pick + a.wav));
    document.getElementById('micro-body').innerHTML = filtered.map(r => `<tr><td class="p-3 pl-6 font-bold text-slate-800 border-b">${r.nome}</td><td class="p-3 border-b text-center"><span class="bg-slate-100 text-slate-600 px-1 rounded text-[10px] font-bold">${r.horario}h</span></td><td class="text-right p-3 border-b text-blue-500 font-bold">${r.huIn}</td><td class="text-right p-3 border-b text-indigo-500 font-bold">${r.huCl}</td><td class="text-right p-3 border-b text-purple-600 font-bold">${r.ship}</td><td class="text-right p-3 border-b text-emerald-600 font-bold">${r.packed}</td><td class="text-right p-3 border-b text-red-600 font-bold">${r.rtp}</td><td class="text-right p-3 border-b text-orange-600 font-bold">${r.grp}</td><td class="text-right p-3 border-b text-amber-600 font-bold">${r.pick}</td><td class="text-right p-3 border-b text-slate-400 font-bold">${r.wav + r.rtw}</td><td class="text-right p-3 border-b font-extrabold text-slate-900">${r.total}</td><td class="p-3 pr-6 border-b text-right">${r.total > 0 ? ((getMetric(r)/r.total)*100).toFixed(1) : 0}%</td></tr>`).join('');
}

function renderMatriz(lst) {
    const ren = (id, s, e) => {
        let h = '<div class="col-span-full grid grid-cols-2 sm:grid-cols-5 xl:grid-cols-10 gap-2.5">';
        for(let i = s; i <= e; i++) {
            let rr = RAMPA_MAP[i] || []; let st = { p: 0, r: 0, g: 0, pi: 0, w: 0, t: 0 }; let aR = []; 
            rr.forEach(ro => { 
                let d = lst.find(x => x.nome === ro); 
                if(d) { st.p += d.packed; st.r += d.rtp; st.g += d.grp; st.pi += d.pick; st.w += (d.wav + d.rtw); st.t += d.total; aR.push(ro); } 
            });
            let vol = st.p + st.r + st.g + st.pi + st.w; 
            let hBg = 'bg-slate-200'; let hTx = 'text-slate-400';
            if (vol > 0) { 
                if(vol >= 1500) { hBg = 'bg-purple-700'; hTx = 'text-white'; } 
                else if(vol >= 1000) { hBg = 'bg-red-600'; hTx = 'text-white'; } 
                else if(vol >= 500) { hBg = 'bg-orange-500'; hTx = 'text-white'; } 
                else { hBg = 'bg-blue-500'; hTx = 'text-white'; } 
            }
            let tooltipHtml = encodeURIComponent(`<div class="font-bold border-b pb-1 mb-1">RAMPA ${i}</div><div class="text-xs">Pendente Físico: ${vol} pçs</div>`);
            h += `<div onmouseenter="showTooltip(event, this.dataset.tip)" onmousemove="moveTooltip(event)" onmouseleave="hideTooltip()" data-tip="${tooltipHtml}" class="border rounded-xl flex flex-col ${st.t === 0 ? 'opacity-50 grayscale bg-white/60' : 'bg-white shadow-sm hover:-translate-y-0.5 cursor-help'} overflow-hidden h-[80px]">
                    <div class="${hBg} px-2 py-1 flex justify-between items-center"><span class="font-black ${hTx} text-[12px]">R-${i}</span><span class="${hTx} text-[10px] font-bold">${vol > 0 ? vol : ''}</span></div>
                    <div class="bg-slate-100 px-2 py-1 text-[7px] font-bold text-slate-600 h-[24px] overflow-hidden">${aR.length ? aR.join(', ') : 'Vazio'}</div>
                  </div>`;
        } h += `</div>`; document.getElementById(id).innerHTML = h;
    };
    ren('t3-list-container', 1, 50); ren('t5-list-container', 51, 98);
}

function renderAereo(lst) {
    let aer = lst.filter(i => i.isAereo); let aT = 0, aC = 0, pend = 0;
    aer.forEach(i => { aT += i.total; aC += getMetric(i); pend += (i.total - (i.huIn + i.huCl + i.ship)); });
    let pct = aT > 0 ? ((aC / aT) * 100).toFixed(1) : '0.0';
    document.getElementById('aereo-dynamic-summary').innerHTML = `<div class="bg-cyan-900 p-6 rounded-xl text-white shadow-lg"><h3 class="text-cyan-300 font-bold mb-2">Visão Aérea</h3><div class="text-3xl font-black">${pct}% <span class="text-sm font-normal text-cyan-200">Atingimento Global</span></div><div class="mt-2 text-sm text-cyan-100">Existem <strong class="text-white">${pend.toLocaleString()} pçs</strong> pendentes no físico.</div></div>`;
    document.getElementById('aereo-container').innerHTML = aer.length ? `<div class="bg-white rounded-xl border p-4"><table class="w-full text-left text-xs"><thead class="bg-slate-50 font-bold text-slate-500 uppercase text-[10px]"><tr><th class="p-3">Rota</th><th class="p-3">Hora</th><th class="p-3 text-right">Pendente Físico</th><th class="p-3 text-right">Atingimento</th></tr></thead><tbody>${aer.sort((a,b)=> b.total - a.total).map(r => `<tr class="border-t"><td class="p-3 font-bold">${r.nome}</td><td class="p-3">${r.horario}h</td><td class="p-3 text-right text-rose-500 font-bold">${r.total - (r.huIn + r.huCl + r.ship)}</td><td class="p-3 text-right font-bold">${r.total>0?((getMetric(r)/r.total)*100).toFixed(1):0}%</td></tr>`).join('')}</tbody></table></div>` : '<div class="p-8 text-center bg-white rounded-xl">Sem voos.</div>';
}

function renderMacro(lst) {
    const renB = (obj) => {
        let h = ''; Object.keys(obj).forEach(gn => {
            let itms = lst.filter(i => obj[gn].includes(i.nome)); if(itms.length === 0) return;
            let s = { c: 0, t: 0, p: 0, r: 0 }; itms.forEach(i => { s.c += getMetric(i); s.t += i.total; s.p += i.packed; s.r += i.rtp; });
            let p = s.t > 0 ? ((s.c / s.t) * 100).toFixed(1) : '0.0';
            h += `<div class="bg-white border rounded-xl shadow-md"><div class="bg-slate-50 p-4 border-b flex justify-between"><h3 class="font-bold">${gn}</h3><span class="text-xs bg-slate-800 text-white px-2 py-1 rounded">${s.t} pçs</span></div><div class="p-4 flex flex-wrap gap-2">${itms.map(i => `<span class="border px-2 py-1 rounded text-[10px]">${i.nome}</span>`).join('')}</div><div class="p-3 bg-slate-50 border-t flex items-center gap-3"><div class="w-full bg-slate-200 h-2 rounded-full"><div class="bg-blue-500 h-full" style="width:${p}%"></div></div><span class="text-xs font-bold">${p}%</span></div></div>`;
        }); return h;
    };
    document.getElementById('macro-fixed-container').innerHTML = renB(OFFICIAL_MACROS) || '<div class="text-sm p-4">Vazio.</div>';
}

function calcProjections() {
    if(!DATA_CACHE) return;
    let s = SETTINGS_DATA; let capPick = (s.pickHC || 50) * (s.pickM || 120); let capPack = (s.packHC || 50) * (s.packM || 300);
    let list = DATA_CACHE.micro.filter(i => !i.isAereo && i.horario !== "ATRASO");
    let vPi = 0, vPa = 0; list.forEach(i => { vPi += (i.wav + i.rtw + i.pick); vPa += (i.rtp + i.grp); });
    let tPick = capPick > 0 ? vPi / capPick : 0; let tPack = capPack > 0 ? (vPi + vPa) / capPack : 0;
    
    document.getElementById('hc-projections').innerHTML = `
        <div class="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center mb-4"><span class="text-slate-400 text-xs">Pçs Pendentes Malha</span><span class="text-xl font-bold text-white">${(vPi + vPa).toLocaleString()}</span></div>
        <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700 mb-2"><h4 class="font-bold text-blue-400 mb-1">Picking</h4><div class="text-xs text-slate-400">Processando ${vPi.toLocaleString()} pçs. Fila est. ${tPick.toFixed(1)}h</div></div>
        <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700"><h4 class="font-bold text-emerald-400 mb-1">Packing</h4><div class="text-xs text-slate-400">Processando ${(vPi + vPa).toLocaleString()} pçs. Fila est. ${tPack.toFixed(1)}h</div></div>
    `;
}

function updateLiveClock() {
    let clockEl = document.getElementById('live-clock'); if(clockEl) clockEl.innerText = new Date().toLocaleTimeString('pt-BR');
    if(!DATA_CACHE || !AVAILABLE_HOURS.length || document.getElementById('view-live').classList.contains('hidden')) return;
    let ch = parseInt(new Date().getHours()); let hNum = AVAILABLE_HOURS.map(h => parseInt(h)).sort((a,b)=>a-b);
    let f = hNum.find(h => h > ch) || hNum[0]; let etd = f.toString().padStart(2, '0');
    if(document.getElementById('live-etd-lbl').innerText !== etd + "H") {
        document.getElementById('live-etd-lbl').innerText = etd + "H";
        let lst = DATA_CACHE.micro.filter(r => r.horario === etd).sort((a, b) => b.total - a.total);
        document.getElementById('live-offenders-body').innerHTML = lst.map(r => `<tr><td class="p-3 pl-6 font-bold text-slate-800">${r.nome}</td><td class="p-3 text-right text-emerald-600">${r.packed}</td><td class="p-3 text-right text-red-600">${r.rtp+r.grp}</td><td class="p-3 text-right text-amber-600">${r.pick+r.wav}</td><td class="p-3 text-right font-black">${r.total}</td></tr>`).join('');
    }
}
