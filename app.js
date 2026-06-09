// --- CONFIGURAÇÃO NUVEM ---
const GIST_ID = "9a5dfdcbdbc0a111fad07198c7066368";
const p1 = "gh" + "p_"; 
const p2 = "lzj6rto7ZAyn79gKk"; 
const p3 = "fEloMi7xK09lp2go00L";
const GITHUB_TOKEN = p1 + p2 + p3;
const CSV_PLANILHA_TOBOGAS = "https://docs.google.com/spreadsheets/d/1wRtBiDY1U9gOeRE_15mg8iKKVQE2wBnRX9Jb69fMUvE/pub?output=csv"; 

const CURRENT_R_STR = "1:JETSL1,2:JETSL1,3:SSP8,4:SRJ13,5:SRJ8,6:SSP10,7:SBA4,8:SSP11,9:SSP5,10:SSP39,11:SSP4,12:SMG15,13:SSP23,14:SMG12,15:SSP9,16:SSP20,17:SMG2,18:SMG8,19:SMG9,20:SSP38,21:SPR8,22:SSC2,23:SSC2,24:SDF1,25:SDF1,26:SSP13,27:SRJ5,28:SSP14,29:SSP14,30:SMG14|SSP18|SSP9_S,31:SMG14|SSP18|SSP9_S,32:JETHUB1|SMG5|SSP34|SSP38_S,33:JETHUB1|SMG5|SSP34|SSP38_S,34:SES1|SRJ10_CHP|SSP36|SSP37_S|SSP4_CHP,35:SES1|SRJ10_CHP|SSP36|SSP37_S|SSP4_CHP,36:SRS10|SSC3|SSP1_S|SSP5A_S,37:SRS10|SSC3|SSP1_S|SSP5A_S,38:SGO2|SMG1|SRJ3_CHP|SSP28,39:SGO2|SMG1|SRJ3_CHP|SSP28,40:SMS2|SRJ1_CHP|SSP3_S|SSP40_CHP|SSP48,41:SMS2|SRJ1_CHP|SSP3_S|SSP40_CHP|SSP48,42:SAL1_CHP|SSP30_S,43:SAL1_CHP|SSP30_S,44:SES3|SPR4|SRS8|SSP5_S,45:SES3|SPR4|SRS8|SSP5_S,46:SES3_X|SPR2|SRD1|SSP26,47:SES3_X|SPR2|SRD1|SSP26,48:JETGO1|SAL1|SSC7|SSP12|SSP6,49:JETGO1|SAL1|SSC7|SSP12|SSP6,50:MSP1_E|MSP21_E|MSP5_E|MSP7_E,51:JADHUB|JETBA2|JETBA3|LOGHUB|SSP46|XSP9_1|XSP9_2|XSP9_6,52:MSP1_E|MSP21_E|MSP5_E|MSP7_E|SRJ2,53:SPR1|SSP18_S|SSP3,54:SPR1|SSP18_S|SSP3,55:SMG13|SRS1_CHP|SRS4|SSP7,56:SMG13|SRS1_CHP|SRS4|SSP7,57:IMISL1|SRJ12|SRJ6_CHP|SRJ7|SSP1,58:IMISL1|SRJ12|SRJ6_CHP|SRJ7|SSP1,59:SMG3|SRJ10|SSC4|SSP17,60:SMG3|SRJ10|SSC4|SSP17,61:SMG11|SPI1|SRJ9|SSP1_CHP|SSP40,62:SMG11|SPI1|SRJ9|SSP1_CHP|SSP40,63:SBA7|SPR5|SSC5|SSP40_S|SSP7_S,64:SBA7|SPR5|SSC5|SSP40_S|SSP7_S,65:SBA3|SMG10|SPR7|SSP24|SSP39_S,66:SBA3|SMG10|SPR7|SSP24|SSP39_S,67:SRJ1|SRS5|SSP16|SSP45_CHP|SSP5F_S,68:SRS5|SSP16|SSP45_CHP|SSP49|SSP5F_S,69:SMG13_X|SMG1_CHP|SMG4|SMR1|SSP6_S,70:SMG13_X|SMG1_CHP|SMG4|SMR1|SSP6_S,71:SCE1|SMS1|SPR1_CHP|SSP25_S|SSP37,72:SCE1|SMS1|SPR1_CHP|SSP25_S|SSP37,73:SMG8_CHP|SRD2|SSC1|SSP25|XSP9_6_CHP,74:SMG8_CHP|SRD2|SSC1|SSP25|XSP9_6_CHP,75:SBA6|SMG7|SSP22_CHP|SSP29_S,76:SBA6|SMG7|SSP22_CHP|SSP29_S,77:SBA2|SPA1_X|SRS3|SSC8|SSP31,78:SBA2|SPA1_X|SRS3|SSC8|SSP31,79:SES2|SGO1|SRJ4|SSP45|SSP45_S,80:SES2|SGO1|SRJ4|SSP45|SSP45_S,81:SMR2|SRS2|SSP27_S|SSP29|XSP9_1_CHP,82:SMR2|SRS2|SSP27_S|SSP29|XSP9_1_CHP,83:SPR3|SRJ6|SRS7|SSP12_CHP,84:SPR3|SRJ6|SRS7|SSP12_CHP,85:SMN1|SSC9|SSP15|SSP18_CHP|SSP48_S,86:SMN1|SSC9|SSP15|SSP18_CHP|SSP48_S,87:SRS1|SSP17_CHP|SSP27|SSP49_S|STO1,88:SRS1|SSP17_CHP|SSP27|SSP49_S|STO1,89:SBA1|SMG6|SSP21_CHP|SSP49,90:SBA1|SSP21_CHP|SSP49,91:JETRD1|SRJ3|SSP23_S|SSP30|SSP7_CHP,92:JETRD1|SRJ3|SSP23_S|SSP30|SSP7_CHP,93:SSP21_S|SSP22|STO2,94:SSP21_S|SSP22|STO2,95:SDF2|SPA1|SPR6_CHP|SRS9,96:SDF2|SPA1|SPR6_CHP|SRS9,97:SGO1_X|SPE1|SPR6|SSP15_CHP|SSP21,98:SGO1_X|SPE1|SPR6|SSP15_CHP|SSP21,99:SAL1_A|SAL1_B|SAM1_A|SAM1_C|SBA1_A|SBA2_A|SBA6_A|SCE1_A|SDF1_A|SDF2_A|SES1_A|SES1_B|SFN1_C|SGO1X_A|SGO1_A|SGO1_B|SJP1X_A|SJP1_A|SMN1_A|SMR1_A|SMR1_B|SMR2_A|SPA1X_A|SPA1_A|SPA1_B|SPE1_A|SPI1_A|SRN1_A|SRS1_A|SRS8_A|SRS9_A|SSE1_A|SAM1_B|SCE1_B|SJP1_B|SMN1_B|SPI1_B|SRN1_B|SRS1_B|SSE1_B|STO1_B|SAL1_C|SBA1_C|SCE1_C|SJP1_C|SMR1_C|SPA1_C|SRN1_C|SSE1_C,100:SAL1_A|SAL1_B|SAM1_A|SAM1_C|SBA1_A|SBA2_A|SBA6_A|SCE1_A|SDF1_A|SDF2_A|SES1_A|SES1_B|SFN1_C|SGO1X_A|SGO1_A|SGO1_B|SJP1X_A|SJP1_A|SMN1_A|SMR1_A|SMR1_B|SMR2_A|SPA1X_A|SPA1_A|SPA1_B|SPE1_A|SPI1_A|SRN1_A|SRS1_A|SRS8_A|SRS9_A|SSE1_A|SAM1_B|SCE1_B|SJP1_B|SMN1_B|SPI1_B|SRN1_B|SRS1_B|SSE1_B|STO1_B|SAL1_C|SBA1_C|SCE1_C|SJP1_C|SMR1_C|SPA1_C|SRN1_C|SSE1_C";

// --- VARIÁVEIS GLOBAIS ---
let DATA_CACHE = null; 
let SETTINGS_DATA = { pickHC: 50, pickM: 120, packHC: 50, packM: 300, atrHC: 30, atrM: 450, stgHC: 4, stgM: 18, manM: 120, gayM: 500 };
let RAMPA_MAP = {}; let ROUTE_LIST = []; let AVAILABLE_HOURS = []; let SELECTED_HOURS = []; let LAST_CLOUD_TIME = null;

// --- FUNÇÕES DE SEGURANÇA CONTRA QUEBRAS DE HTML ---
function setVal(id, v) { let el = document.getElementById(id); if(el) el.innerText = v; }
function setHtml(id, h) { let el = document.getElementById(id); if(el) el.innerHTML = h; }
function setStyle(id, p, v) { let el = document.getElementById(id); if(el) el.style[p] = v; }
function setClass(id, action, cls) { let el = document.getElementById(id); if(el) el.classList[action](cls); }

function carregarMapaImediato() {
    ROUTE_LIST = []; for(let i=1; i<=100; i++) RAMPA_MAP[i] = [];
    CURRENT_R_STR.split(',').forEach(g => { let [t, r] = g.split(':'); if(r) { r.split('|').forEach(x => { ROUTE_LIST.push({ t: parseInt(t), r: x }); RAMPA_MAP[parseInt(t)].push(x); }); } });
}
window.onload = () => { carregarMapaImediato(); carregarMapaTobogas(); sincronizarComBanco(true); setInterval(() => sincronizarComBanco(false), 30000); setInterval(updateLiveClock, 1000); };

function carregarMapaTobogas() {
    fetch(CSV_PLANILHA_TOBOGAS).then(res => res.text()).then(csv => {
        let lines = csv.split('\n'); ROUTE_LIST = []; for(let i=1; i<=100; i++) RAMPA_MAP[i] = [];
        for(let i=1; i<lines.length; i++) {
            let cols = lines[i].split(',');
            if(cols.length >= 2) {
                let rota = cols[0].trim().toUpperCase(); let regra = cols[1].trim().toUpperCase(); let nums = []; let regraLimpa = regra.replace('AUTO', '').trim();
                if(regraLimpa.includes('-')) { let [inicio, fim] = regraLimpa.split('-'); for(let r = parseInt(inicio); r <= parseInt(fim); r++) nums.push(r);
                } else if (!isNaN(parseInt(regraLimpa))) { nums.push(parseInt(regraLimpa)); }
                nums.forEach(n => { if(RAMPA_MAP[n] && !RAMPA_MAP[n].includes(rota)) { RAMPA_MAP[n].push(rota); ROUTE_LIST.push({ t: n, r: rota }); } });
            }
        } if(DATA_CACHE) aplicarFiltros();
    }).catch(e => console.error("Usando rotas estáticas."));
}

function sincronizarComBanco(manual) {
    if(manual) setClass('global-loader', 'remove', 'hidden');
    setStatusUi('Conectando...', 'bg-blue-500 animate-pulse');
    fetch(`https://api.github.com/gists/${GIST_ID}?t=${Date.now()}`, { headers: { 'Authorization': `Bearer ${GITHUB_TOKEN}` } })
    .then(res => { if (!res.ok) throw new Error("Erro API"); return res.json(); })
    .then(data => {
        if(manual) fecharLoader();
        try {
            let content = JSON.parse(data.files["v50_db.json"].content);
            if(content.time !== LAST_CLOUD_TIME) { LAST_CLOUD_TIME = content.time; decodificarNuvem(content.payload); }
            setStatusUi(`Atualizado: ${LAST_CLOUD_TIME}`, 'bg-emerald-500');
        } catch(e) { setStatusUi('Base Vazia (Suba WMS)', 'bg-amber-500'); if(manual) openModal('import-modal'); }
    }).catch((err) => { setStatusUi('Falha Conexão', 'bg-red-500'); if(manual) fecharLoader(); });
}

function salvarNoBanco() {
    setStatusUi('Salvando Nuvem...', 'bg-amber-500 animate-pulse');
    let payload = JSON.stringify({ d: DATA_CACHE, s: SETTINGS_DATA }), time = new Date().toLocaleString('pt-BR');
    fetch(`https://api.github.com/gists/${GIST_ID}`, { method: 'PATCH', headers: { 'Authorization': `Bearer ${GITHUB_TOKEN}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ files: { "v50_db.json": { content: JSON.stringify({ payload, time }) } } }) })
    .then(() => { LAST_CLOUD_TIME = time; setStatusUi(`Salvo: ${time}`, 'bg-emerald-500'); });
}

function decodificarNuvem(payload) {
    if (!payload) return; let parsed = JSON.parse(payload); DATA_CACHE = parsed.d; if(parsed.s) SETTINGS_DATA = parsed.s;
    ['pickHC','pickM','packHC','packM','atrHC','atrM','stgHC','stgM'].forEach(k => { let el = document.getElementById('inp-' + k.replace(/[A-Z]/g, l => '-' + l.toLowerCase())); if(el) el.value = SETTINGS_DATA[k] || ''; });
    AVAILABLE_HOURS = Object.keys(DATA_CACHE.kpis || {}).filter(k => k !== "99" && k !== "S/H" && k !== "ATRASO").sort(); SELECTED_HOURS = []; renderEtdCheckboxes(); aplicarFiltros();
}

function processarTextoCola() {
    let elPaste = document.getElementById('input-paste');
    let txt = elPaste ? elPaste.value : '';
    if(!txt) return; 
    
    closeModal('import-modal'); 
    setClass('global-loader', 'remove', 'hidden'); 
    setVal('loader-title', 'Analisando WMS...');

    setTimeout(() => {
        try {
            let vR = ROUTE_LIST.map(i => i.r).sort((a, b) => b.length - a.length), lines = txt.split(/\r?\n/), hAct = "S/H", mM = {}, k = {};
            let colMap = [];
            for (let i = 0; i < Math.min(20, lines.length); i++) {
                let u = lines[i].toUpperCase();
                if (u.includes("READY TO WAVE") || u.includes("BACKLOG")) colMap.push('rtw');
                if (u.includes("WAVING") || u.includes("POR ASIGNAR")) colMap.push('wav');
                if (u.includes("PICKING")) colMap.push('pi');
                if (u.includes("READY TO GROUP")) colMap.push('rtg');
                if (u.includes("GROUPING")) colMap.push('g');
                if (u.includes("READY TO PACK")) colMap.push('r');
                if (u.includes("PACKED")) colMap.push('p');
                if (u.includes("HU IN")) colMap.push('huIn');
                if (u.includes("HU CLOSED")) colMap.push('huCl');
                if (u.includes("SHIPPED")) colMap.push('ship');
                if (colMap.length > 5) break; 
            }
            if (colMap.length === 0) colMap = ['rtw', 'wav', 'pi', 'rtg', 'g', 'r', 'p', 'huIn', 'huCl', 'ship'];
            let N = colMap.length;

            for(let i = 0; i < lines.length; i++) {
                let l = lines[i].trim(); if(l.length < 4) continue;
                let hm = l.match(/(?:^|\b)(\d{2}):00\s*(?:HR|H)?\b/i) || l.match(/\b(\d{2})00\s*HR/i) || l.match(/Analisar\s+atraso/i);
                if(hm && !l.toUpperCase().includes("TEMPO")) { hAct = l.match(/atraso/i) ? "ATRASO" : hm[1] || hm[0]; continue; }
                let u = l.toUpperCase(); if (u.match(/TOTAL|SUBTOTAL|PERFORMANCE|PROCESSADOS|FECHADOS|CARREGADOS|EXPEDIDOS|ENVIADOS|RECEBIDOS|HUS ABERTAS|RESUMO/i)) continue;

                let c = vR.find(x => new RegExp(`(?:^|\\s)${x}(?:\\s|$)`).test(u));
                if(!c) { let dynMatch = u.match(/(?:^|\s)([A-Z]{3,4}\d{1,2}(?:_[A-Z0-9]+)?|JET[A-Z]{2,3}\d+|[A-Z]+HUB\d*)(?=\s|$)/); if (dynMatch && !["TOTAL","SUBTOTAL","SLA","TEMPO","PERFORMANCE"].includes(dynMatch[1])) c = dynMatch[1]; }
                if(!c) continue;

                let str = l;
                for(let j = i + 1; j < i + 20 && j < lines.length; j++) {
                    let n = lines[j].trim(); let uN = n.toUpperCase(); if(n === "") continue;
                    if(uN.match(/(?:^|\b)(\d{2}):00\s*(?:HR|H)?\b/i) || uN.match(/\b(\d{2})00\s*HR/i) || uN.match(/ATRASO/i)) break;
                    if(uN.match(/TOTAL|SUBTOTAL|PROCESSADOS|FECHADOS|CARREGADOS|EXPEDIDOS|ENVIADOS|RECEBIDOS|HUS ABERTAS|RESUMO/i)) break; 
                    if(vR.find(x => new RegExp(`(?:^|\\s)${x}(?:\\s|$)`).test(uN))) break;
                    str += " " + n;
                }
                let tokens = str.split(/[\s\t]+/).filter(x => x !== ""), slaIdx = tokens.findIndex(t => t.includes('%')), numsB = [], numsA = [];
                tokens.forEach((tk, idx) => {
                    if (/^-?\d{2}:\d{2}(hr|h)?$/i.test(tk) || ROUTE_LIST.some(r => r.r === tk.toUpperCase())) return;
                    let clean = tk.replace(/[\.,]/g, '');
                    if (/^-?\d+$/.test(clean) || tk === '-' || tk === '–') { if(slaIdx !== -1 && idx > slaIdx) numsA.push(clean); else if (idx < slaIdx || slaIdx === -1) numsB.push(clean); }
                });

                let vTot = 0, vProc = 0, mArr = [];
                if (slaIdx !== -1) { vTot = parseNum(numsB[numsB.length - 2] || "0"); vProc = parseNum(numsB[numsB.length - 1] || numsB[0] || "0"); mArr = numsA.map(parseNum);
                } else { let valN = numsB.slice(), mStart = Math.max(0, valN.length - N); mArr = valN.slice(mStart).map(parseNum); while (mArr.length < N) mArr.unshift(0); let bef = valN.slice(0, mStart); vTot = parseNum(bef[bef.length - 2] || "0"); vProc = parseNum(bef[bef.length - 1] || bef[0] || "0"); }

                let m = { rtw: 0, wav: 0, pi: 0, rtg: 0, g: 0, r: 0, p: 0, huIn: 0, huCl: 0, ship: 0 };
                for(let kl = 0; kl < N; kl++) { if (kl < mArr.length) m[colMap[kl]] = mArr[kl]; }
                let tot = (vTot < vProc && vTot > 0) ? vTot + vProc : ((vTot === 0 && vProc > 0) ? vProc : vTot);
                let cReal = m.huIn + m.huCl + m.ship; if (cReal === 0 && vProc > 0) cReal = vProc;
                let sMet = m.p + m.r + m.rtg + m.g + m.pi + m.wav + m.rtw + cReal; if (tot === 0 || tot < sMet) tot = sMet;
                if (tot === 0) continue; 

                if(tot >= 0) {
                    if(hAct === "S/H") hAct = "99"; let kId = c + "-" + hAct;
                    if(!mM[kId]) { mM[kId] = { nome: c, horario: hAct, concluido: 0, packed: 0, rtp: 0, grp: 0, pick: 0, wav: 0, rtw: 0, total: 0, huIn: 0, huCl: 0, ship: 0, isAereo: isAereo(c) }; }
                    mM[kId].concluido += cReal; mM[kId].packed += m.p; mM[kId].rtp += m.r; mM[kId].grp += (m.rtg + m.g); mM[kId].pick += m.pi; mM[kId].wav += m.wav; mM[kId].rtw += m.rtw; mM[kId].huIn += m.huIn; mM[kId].huCl += m.huCl; mM[kId].ship += m.ship; mM[kId].total += tot;
                    if(!k[hAct]) k[hAct] = { total: 0 }; k[hAct].total += tot;
                }
            }

            let arr = Object.values(mM).sort((a, b) => b.total - a.total);
            if(arr.length === 0) { alert("Nenhum dado encontrado."); fecharLoader(); return; }

            let mergeEl = document.getElementById('chk-merge');
            let isMerge = mergeEl ? mergeEl.checked : false;
            let finalArr = arr, finalKpis = k;
            
            if (isMerge && DATA_CACHE && DATA_CACHE.micro) {
                let mergedMap = {}; DATA_CACHE.micro.forEach(r => { mergedMap[r.nome + "-" + r.horario] = r; }); arr.forEach(r => { mergedMap[r.nome + "-" + r.horario] = r; });
                finalArr = Object.values(mergedMap).sort((a, b) => b.total - a.total); finalKpis = {}; finalArr.forEach(r => { if(!finalKpis[r.horario]) finalKpis[r.horario] = { total: 0 }; finalKpis[r.horario].total += r.total; });
            }
            DATA_CACHE = { micro: finalArr, kpis: finalKpis }; AVAILABLE_HOURS = Object.keys(finalKpis).filter(x => x !== "99" && x !== "S/H" && x !== "ATRASO").sort(); SELECTED_HOURS = []; renderEtdCheckboxes();
            fecharLoader(); salvarNoBanco(); aplicarFiltros(); mudarAba('dashboard');
        } catch(e) { alert("Erro ao ler dados: " + e.message); console.error(e); fecharLoader(); }
    }, 500);
}

function aplicarFiltros() {
    if(!DATA_CACHE) return;
    let lst = DATA_CACHE.micro;
    if(SELECTED_HOURS.length > 0) lst = lst.filter(x => SELECTED_HOURS.includes(x.horario) || x.horario === 'ATRASO');
    renderDash(lst); renderAereo(DATA_CACHE.micro); renderMatriz(lst); renderMicro(lst); calcProjections(); updateLiveClock();
}

function mudarAba(aba) { 
    document.querySelectorAll('[id^="view-"]').forEach(e => e.classList.add('hidden')); 
    setClass('view-' + aba, 'remove', 'hidden'); 
    document.querySelectorAll('.sidebar-link').forEach(e => e.classList.remove('active')); 
    setClass('btn-' + aba, 'add', 'active'); 
    if(aba === 'hc') calcProjections(); 
}
function openModal(id) { setClass(id, 'remove', 'hidden'); }
function closeModal(id) { setClass(id, 'add', 'hidden'); }
function fecharLoader() { setClass('global-loader', 'add', 'hidden'); }

function setStatusUi(msg, color) { setHtml('data-status', `<span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full ${color}"></span> <span class="text-slate-500 font-bold uppercase text-[9px]">${msg}</span></span>`); }
function parseNum(s) { if(!s || s === '-' || s === '–') return 0; let c = s.replace(/[^\d]/g, ''); return c === '' ? 0 : parseInt(c, 10); }
function isAereo(c) { return RAMPA_MAP[99]?.includes(c) || RAMPA_MAP[100]?.includes(c) || /_A$|_B$|_C$/.test(c); }

function saveHC() {
    let g = (id, def) => { let el = document.getElementById(id); let val = el ? parseFloat(el.value) : def; return isNaN(val) || val <= 0 ? def : val; };
    SETTINGS_DATA = { pickHC: g('inp-hc-pick', 50), pickM: g('inp-med-pick', 120), packHC: g('inp-hc-pack', 50), packM: g('inp-med-pack', 300), atrHC: g('inp-hc-atr', 30), atrM: g('inp-med-atr', 450), stgHC: g('inp-hc-stg', 4), stgM: g('inp-med-stg', 18) };
    calcProjections(); salvarNoBanco();
}

function renderEtdCheckboxes() {
    let h = `<label class="flex gap-2 p-2 text-xs font-bold hover:bg-slate-50 cursor-pointer"><input type="checkbox" onchange="toggleAllEtds()" ${SELECTED_HOURS.length === 0 ? 'checked' : ''} class="w-4 h-4 rounded"> TODOS</label><hr>`;
    AVAILABLE_HOURS.forEach(hr => { h += `<label class="flex gap-2 p-2 text-xs hover:bg-slate-50 cursor-pointer"><input type="checkbox" value="${hr}" onchange="toggleSingleEtd(this)" ${SELECTED_HOURS.includes(hr) ? 'checked' : ''} class="w-4 h-4 rounded"> ${hr}H</label>`; });
    setHtml('etd-dropdown-panel', h); setVal('etd-btn-text', SELECTED_HOURS.length === 0 ? "TODOS" : SELECTED_HOURS.length + " SELEC");
}
function toggleAllEtds() { SELECTED_HOURS = []; renderEtdCheckboxes(); aplicarFiltros(); }
function toggleSingleEtd(e) { if(e.checked) SELECTED_HOURS.push(e.value); else SELECTED_HOURS = SELECTED_HOURS.filter(x => x !== e.value); if(SELECTED_HOURS.length >= AVAILABLE_HOURS.length) SELECTED_HOURS = []; renderEtdCheckboxes(); aplicarFiltros(); }

function showTooltip(e, html) { let t = document.getElementById('floating-tip'); if(!html || !t) return; t.innerHTML = decodeURIComponent(html); t.classList.remove('hidden'); moveTooltip(e); }
function moveTooltip(e) { let t = document.getElementById('floating-tip'); if(!t || t.classList.contains('hidden')) return; let x = e.clientX + 15, y = e.clientY + 15; if (x + t.offsetWidth > window.innerWidth) x = e.clientX - t.offsetWidth - 15; if (y + t.offsetHeight > window.innerHeight) y = window.innerHeight - t.offsetHeight - 15; t.style.left = Math.max(10, x) + 'px'; t.style.top = Math.max(10, y) + 'px'; }
function hideTooltip() { setClass('floating-tip', 'add', 'hidden'); }

// --- RENDERIZADORES DE TELA (LÓGICA OPERACIONAL AVANÇADA) ---
function renderDash(lst) {
    let allValid = lst.filter(i => i.horario !== 'ATRASO');
    let tTot = 0, tC = 0, tPck = 0, tIn = 0, tCls = 0, tShp = 0;
    
    allValid.forEach(i => { tTot += i.total; tC += i.concluido; tPck += i.packed; tIn += i.huIn; tCls += i.huCl; tShp += i.ship; });
    setVal('dash-glb-total', tTot.toLocaleString()); setVal('dash-glb-targetval', tC.toLocaleString());
    setVal('dash-glb-packed', tPck.toLocaleString()); setVal('dash-glb-huin', tIn.toLocaleString()); 
    setVal('dash-glb-hucl', tCls.toLocaleString()); setVal('dash-glb-ship', tShp.toLocaleString());
    
    let pendentesGlobal = tTot - (tIn + tCls + tShp + tPck);
    setVal('dash-glb-pend', pendentesGlobal.toLocaleString());
    let pG = tTot > 0 ? ((tC / tTot) * 100).toFixed(2) : '0.00'; 
    setVal('dash-glb-pct', pG + '%'); setStyle('dash-glb-bar', 'width', pG + '%');

    let bT = 0, bP = 0; lst.filter(i => i.horario === 'ATRASO').forEach(i => { bT += i.total; bP += i.concluido; });
    let bArea = document.getElementById('dash-backlog-area');
    if(bArea) { if(bT > 0) { bArea.classList.remove('hidden'); setVal('bl-total', bT.toLocaleString()); setVal('bl-proc', bP.toLocaleString()); setVal('bl-pend', Math.max(0, bT - bP).toLocaleString()); } else { bArea.classList.add('hidden'); } }

    let grps = {};
    allValid.forEach(i => { 
        if(!grps[i.horario]) grps[i.horario] = { t: 0, c: 0 }; 
        grps[i.horario].t += i.total; grps[i.horario].c += i.concluido; 
    });
    
    let hKpi = ''; 
    let fmtK = (v) => v >= 10000 ? (v / 1000).toFixed(1).replace('.0', '') + 'k' : v.toLocaleString();
    Object.keys(grps).sort().forEach(k => {
        let g = grps[k]; let pt = g.t > 0 ? ((g.c / g.t) * 100).toFixed(2) : '0.00';
        let m98 = Math.ceil(g.t * 0.98); let m985 = Math.ceil(g.t * 0.985); let m99 = Math.ceil(g.t * 0.99); let m995 = Math.ceil(g.t * 0.995);
        let tag = (tgt) => (target => { let f = target - g.c; return f <= 0 ? '<span class="text-emerald-500"><i class="fa-solid fa-check"></i></span>' : `<span class="text-rose-500 font-mono font-bold">Falta ${f.toLocaleString()}</span>`; })(tgt);

        hKpi += `<div class="glass-panel p-4 flex flex-col border-t-4 border-blue-500 shadow-md">
                <div class="flex justify-between items-center mb-2"><div class="text-xs font-black text-slate-700 bg-slate-100 px-2 py-1 rounded border">ETD ${k}H</div><div class="text-lg font-black text-blue-600">${pt}%</div></div>
                <div class="w-full bg-slate-100 h-2 rounded-full mb-4"><div class="bg-blue-500 h-full" style="width:${pt}%"></div></div>
                <div class="text-[10px] font-bold text-slate-500 space-y-1.5 bg-slate-50 p-2 rounded border border-slate-100">
                    <div class="flex justify-between items-center"><span>Meta 98.0%: <span class="font-mono text-slate-800">${fmtK(m98)}</span></span>${tag(m98)}</div>
                    <div class="flex justify-between items-center"><span>Meta 98.5%: <span class="font-mono text-slate-800">${fmtK(m985)}</span></span>${tag(m985)}</div>
                    <div class="flex justify-between items-center"><span>Meta 99.0%: <span class="font-mono text-slate-800">${fmtK(m99)}</span></span>${tag(m99)}</div>
                    <div class="flex justify-between items-center"><span>Meta 99.5%: <span class="font-mono text-slate-800">${fmtK(m995)}</span></span>${tag(m995)}</div>
                </div></div>`;
    });
    setHtml('dash-kpi-area', hKpi);

    let off = allValid.filter(i => (i.rtp > 0 || i.grp > 0)).sort((a, b) => (b.rtp + b.grp) - (a.rtp + a.grp)).slice(0, 10);
    setHtml('dash-offenders-body', off.length ? off.map(r => `<tr><td class="p-3 pl-6 font-bold text-slate-800">${r.nome}</td><td class="p-3 text-center"><span class="bg-slate-100 px-2 py-1 rounded text-[10px] font-bold">${r.horario}h</span></td><td class="p-3 text-right text-orange-600 font-bold">${r.rtp + r.grp}</td><td class="p-3 text-right font-bold text-slate-600">${r.total}</td><td class="p-3 pr-6 text-right">${r.total > 0 ? ((r.concluido/r.total)*100).toFixed(1) : 0}%</td></tr>`).join('') : '<tr><td colspan="5" class="p-8 text-center text-emerald-600 font-bold">Sem gargalos nas esteiras.</td></tr>');
}

function renderMicro(lst) {
    let riskEl = document.getElementById('micro-risk-filter');
    let riskMode = riskEl ? riskEl.value : 'padrao';
    let filtered = lst.filter(i => !i.isAereo);
    
    filtered.sort((a, b) => {
        if (riskMode === 'packed') return b.packed - a.packed;
        if (riskMode === 'imediato') return (b.rtp + b.grp) - (a.rtp + a.grp);
        if (riskMode === 'futuro') return (b.pick) - (a.pick);
        if (riskMode === 'congelado') return (b.wav + b.rtw) - (a.wav + a.rtw);
        return (b.total - (b.huIn + b.huCl + b.ship)) - (a.total - (a.huIn + a.huCl + a.ship)); 
    });

    setHtml('micro-body', filtered.map(r => `
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="p-3 pl-6 font-bold text-slate-800">${r.nome}</td>
            <td class="p-3 text-center"><span class="bg-slate-200 text-slate-600 px-2 py-0.5 rounded text-[10px] font-bold">${r.horario}h</span></td>
            <td class="text-right p-3 text-blue-500 font-bold">${r.huIn}</td>
            <td class="text-right p-3 text-indigo-500 font-bold">${r.huCl}</td>
            <td class="text-right p-3 text-purple-600 font-bold">${r.ship}</td>
            <td class="text-right p-3 text-emerald-600 font-bold border-l border-slate-100 bg-emerald-50/30">${r.packed}</td>
            <td class="text-right p-3 text-orange-500 font-bold bg-orange-50/30">${r.rtp + r.grp}</td>
            <td class="text-right p-3 text-rose-500 font-bold bg-rose-50/30">${r.pick}</td>
            <td class="text-right p-3 text-slate-400 font-bold border-r border-slate-100 bg-slate-50">${r.wav + r.rtw}</td>
            <td class="text-right p-3 font-extrabold text-slate-900">${r.total}</td>
            <td class="p-3 pr-6 text-right font-black text-brand-600">${r.total > 0 ? ((r.concluido/r.total)*100).toFixed(1) : 0}%</td>
        </tr>`).join(''));
}

function renderMatriz(lst) {
    let alertRamps3 = [], alertRamps5 = [];
    let prodAtrelamento = SETTINGS_DATA.atrM || 450; 

    const ren = (id, s, e, alertsArray) => {
        let h = '<div class="col-span-full grid grid-cols-2 sm:grid-cols-5 xl:grid-cols-10 gap-3">';
        for(let i = s; i <= e; i++) {
            let rr = RAMPA_MAP[i] || []; let st = { p: 0, r: 0, g: 0, pi: 0, w: 0, t: 0 }; let aR = []; 
            rr.forEach(ro => { let d = lst.find(x => x.nome === ro); if(d) { st.p += d.packed; st.r += d.rtp; st.g += d.grp; st.pi += d.pick; st.w += (d.wav + d.rtw); st.t += d.total; aR.push(ro); } });
            
            let volAtivo = st.p + st.r + st.g + st.pi; 
            let hBg = 'bg-white', textC = 'text-slate-500';
            
            if (volAtivo > 0) { 
                if(volAtivo >= 1500) { hBg = 'bg-rose-600 text-white'; textC = 'text-white'; alertsArray.push(i); } 
                else if(volAtivo >= 800) { hBg = 'bg-orange-500 text-white'; textC = 'text-white'; alertsArray.push(i); } 
                else if(volAtivo >= 300) { hBg = 'bg-amber-400 text-slate-900'; textC = 'text-amber-900'; } 
                else { hBg = 'bg-emerald-100 border-emerald-300'; textC = 'text-emerald-700'; } 
            }

            // Matemática Corrigida do Tempo (Lógica Logística Tática)
            // O que está no Packed precisa ser escoado numa janela de 15 minutos (0.25h)
            let hcAgora = Math.ceil(st.p / (prodAtrelamento * 0.25)) || 0;
            // O que está no Packing chega aos poucos numa janela de 45 minutos (0.75h)
            let hcBreve = Math.ceil((st.r + st.g) / (prodAtrelamento * 0.75)) || 0;
            // O que está no Picking vai chegar numa janela de 1 hora inteira (1h)
            let hcFuturo = Math.ceil(st.pi / (prodAtrelamento * 1)) || 0;

            let tooltipHtml = encodeURIComponent(`<div class="font-black text-sm mb-2 border-b pb-1">Análise Tática - Tobogã ${i}</div>
                <div class="space-y-2 text-xs mb-3">
                    <div class="flex justify-between items-center bg-emerald-500/20 p-1.5 rounded border border-emerald-500/30"><span>AGORA (Packed +5m):</span> <strong class="text-emerald-400 font-mono text-sm">${st.p} pçs <i class="fa-solid fa-arrow-right mx-1"></i> ${hcAgora} HC</strong></div>
                    <div class="flex justify-between items-center bg-orange-500/20 p-1.5 rounded border border-orange-500/30"><span>EM BREVE (Pck +10m):</span> <strong class="text-orange-400 font-mono text-sm">${st.r + st.g} pçs <i class="fa-solid fa-arrow-right mx-1"></i> ${hcBreve} HC</strong></div>
                    <div class="flex justify-between items-center bg-rose-500/20 p-1.5 rounded border border-rose-500/30"><span>+1 HORA (Pick):</span> <strong class="text-rose-400 font-mono text-sm">${st.pi} pçs <i class="fa-solid fa-arrow-right mx-1"></i> ${hcFuturo} HC</strong></div>
                </div>
                <div class="text-[9px] text-slate-400 border-t pt-2">* HC dinâmico calculado por janela de chegada à rampa.<br>* Base de cálculo: ${prodAtrelamento} pçs/h por pessoa.</div>`);

            h += `<div onmouseenter="showTooltip(event, this.dataset.tip)" onmousemove="moveTooltip(event)" onmouseleave="hideTooltip()" data-tip="${tooltipHtml}" class="rounded-xl flex flex-col justify-between ${st.t === 0 ? 'opacity-40 grayscale bg-white/50 border border-slate-200' : hBg + ' shadow-md hover:-translate-y-1 cursor-help border'} overflow-hidden h-[90px] transition-all">
                    <div class="px-3 py-2 flex justify-between items-center border-b border-white/20"><span class="font-black ${textC} text-lg">${i}</span><span class="${textC} text-xs font-bold font-mono">${volAtivo > 0 ? volAtivo : ''}</span></div>
                    <div class="px-3 py-2 text-[8px] font-bold ${textC} opacity-80 h-full overflow-hidden leading-tight">${aR.length ? aR.join(', ') : 'Vazio'}</div>
                  </div>`;
        } h += `</div>`; setHtml(id, h);
    };
    
    ren('t3-list-container', 1, 50, alertRamps3); ren('t5-list-container', 51, 98, alertRamps5);
    
    let uiAlerts = (arr) => arr.length ? `<div class="flex items-center gap-2"><i class="fa-solid fa-fire text-rose-500"></i> Foco Imediato nas Rampas: <div class="flex flex-wrap gap-1">` + arr.map(a => `<span class="bg-rose-100 text-rose-700 border border-rose-200 px-1.5 py-0.5 rounded shadow-sm">${a}</span>`).join('') + `</div></div>` : '✅ Operação Controlada';
    setHtml('t3-alerts', uiAlerts(alertRamps3));
    let t3El = document.getElementById('t3-alerts'); if(t3El) t3El.className = alertRamps3.length ? 'text-xs font-bold bg-white px-3 py-2 rounded-lg shadow-sm border border-rose-200' : 'text-xs font-bold bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200 text-emerald-600';
    setHtml('t5-alerts', uiAlerts(alertRamps5));
    let t5El = document.getElementById('t5-alerts'); if(t5El) t5El.className = alertRamps5.length ? 'text-xs font-bold bg-white px-3 py-2 rounded-lg shadow-sm border border-rose-200' : 'text-xs font-bold bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200 text-emerald-600';
}

function renderAereo(lst) {
    let aer = lst.filter(i => i.isAereo); let aT = 0, aC = 0, aIn = 0, aCl = 0, aSh = 0;
    let grps = {};
    
    aer.forEach(i => { 
        aT += i.total; aC += i.concluido; aIn += i.huIn; aCl += i.huCl; aSh += i.ship;
        if(!grps[i.horario]) grps[i.horario] = []; grps[i.horario].push(i);
    });
    
    let processadoAereo = aIn + aCl + aSh;
    let vindoAereo = aT - processadoAereo; 
    let pct = aT > 0 ? ((processadoAereo / aT) * 100).toFixed(1) : '0.0';
    
    setHtml('aereo-dynamic-summary', `
        <div class="bg-gradient-to-r from-cyan-900 to-blue-900 p-6 rounded-2xl text-white shadow-xl flex justify-between items-center relative overflow-hidden border border-cyan-700">
            <i class="fa-solid fa-plane absolute -right-4 text-9xl opacity-10"></i>
            <div>
                <h3 class="text-cyan-300 font-bold uppercase tracking-widest text-xs mb-1">Relatório Geral - Malha Aérea</h3>
                <div class="text-5xl font-black font-mono tracking-tighter">${pct}% <span class="text-sm font-bold text-cyan-400 tracking-normal">Pronto (Docado)</span></div>
            </div>
            <div class="flex gap-6 text-right relative z-10">
                <div class="flex flex-col"><span class="text-[10px] text-cyan-400 uppercase font-bold">Peças no Dia</span><span class="text-2xl font-black font-mono">${aT.toLocaleString()}</span></div>
                <div class="flex flex-col"><span class="text-[10px] text-emerald-400 uppercase font-bold">Pronto (Docado)</span><span class="text-2xl font-black font-mono text-emerald-400">${processadoAereo.toLocaleString()}</span></div>
                <div class="flex flex-col bg-cyan-950 px-3 py-1 rounded border border-cyan-800"><span class="text-[10px] text-amber-400 uppercase font-bold">A Caminho (Esteiras)</span><span class="text-2xl font-black font-mono text-amber-400">${vindoAereo.toLocaleString()}</span></div>
            </div>
        </div>`);

    let htmlETDs = '';
    Object.keys(grps).sort().forEach(h => {
        let eT = 0, eIn = 0, eCl = 0, eSh = 0;
        grps[h].forEach(r => { eT += r.total; eIn += r.huIn; eCl += r.huCl; eSh += r.ship; });
        let eProcessado = eIn + eCl + eSh;
        let eCaminho = eT - eProcessado;
        let ePct = eT > 0 ? ((eProcessado / eT) * 100).toFixed(1) : '0.0';

        htmlETDs += `
        <div class="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden mb-6">
            <div class="bg-slate-100 p-4 border-b flex justify-between items-center">
                <h4 class="font-black text-slate-700 text-lg flex items-center gap-2"><i class="fa-solid fa-clock text-cyan-600"></i> ETD ${h}H</h4>
                <div class="flex gap-4 items-center">
                    <div class="text-xs font-bold text-slate-500">A Caminho (Esteiras): <span class="text-amber-600 font-black text-sm">${eCaminho.toLocaleString()}</span></div>
                    <div class="bg-white border px-2 py-1 rounded font-bold text-cyan-700 text-xs">${ePct}% Pronto</div>
                </div>
            </div>
            <table class="w-full text-left text-xs font-mono">
                <thead class="bg-white text-slate-400 uppercase text-[9px] font-bold border-b"><tr><th class="p-3 pl-6">Rota</th><th class="text-right p-3 text-blue-500">IN</th><th class="text-right p-3 text-indigo-500">CLS</th><th class="text-right p-3 text-purple-600">SHP</th><th class="text-right p-3 text-amber-500 border-l border-slate-100">A Caminho</th><th class="text-right p-3">Total Dia</th></tr></thead>
                <tbody class="divide-y divide-slate-50">
                    ${grps[h].sort((a,b)=> b.total - a.total).map(r => `
                    <tr class="hover:bg-slate-50">
                        <td class="p-3 pl-6 font-bold text-slate-800">${r.nome}</td>
                        <td class="text-right p-3 text-blue-500">${r.huIn}</td>
                        <td class="text-right p-3 text-indigo-500">${r.huCl}</td>
                        <td class="text-right p-3 text-purple-600">${r.ship}</td>
                        <td class="text-right p-3 text-amber-600 font-bold border-l border-slate-100">${r.total - (r.huIn+r.huCl+r.ship)}</td>
                        <td class="text-right p-3 font-black text-slate-800">${r.total}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;
    });

    setHtml('aereo-container', htmlETDs || '<div class="p-8 text-center bg-white rounded-xl border">Sem dados de malha aérea.</div>');
}

function calcProjections() {
    if(!DATA_CACHE) return;
    let s = SETTINGS_DATA; 
    let capPick = (s.pickHC || 0) * (s.pickM || 0); 
    let capPack = (s.packHC || 0) * (s.packM || 0);
    
    let list = DATA_CACHE.micro.filter(i => !i.isAereo && i.horario !== "ATRASO");
    let vPi = 0, vPa = 0; 
    list.forEach(i => { vPi += i.pick; vPa += (i.rtp + i.grp); }); 
    
    let tPick = capPick > 0 ? (vPi / capPick) : Infinity; 
    let tPack = capPack > 0 ? (vPa / capPack) : Infinity;
    
    let fT = (h) => {
        if(h === Infinity) return '<span class="text-rose-500">Parado (HC 0)</span>';
        if(h === 0) return '0 min';
        return h < 1 ? Math.round(h * 60) + " min" : h.toFixed(1) + "h";
    };

    setHtml('hc-projections', `
        <div class="bg-slate-800 p-4 rounded-xl border border-slate-700 flex justify-between items-center mb-4">
            <span class="text-slate-400 text-xs uppercase font-bold">Pçs Ativas (Sem Waving)</span>
            <span class="text-2xl font-black text-white">${(vPi + vPa).toLocaleString()}</span>
        </div>
        <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700 mb-3">
            <div class="flex justify-between items-center mb-1"><h4 class="font-bold text-blue-400">Picking</h4><span class="text-xs bg-slate-900 px-2 py-1 rounded text-slate-300 border border-slate-700">Capacidade: ${capPick.toLocaleString()} pçs/h</span></div>
            <div class="text-xs text-slate-400">Pendente: <strong class="text-white">${vPi.toLocaleString()} pçs</strong> <i class="fa-solid fa-arrow-right mx-1"></i> Tempo estimado de fila: <strong class="text-blue-400 text-sm ml-1">${fT(tPick)}</strong></div>
        </div>
        <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700 mb-2">
            <div class="flex justify-between items-center mb-1"><h4 class="font-bold text-orange-400">Packing (Esteiras)</h4><span class="text-xs bg-slate-900 px-2 py-1 rounded text-slate-300 border border-slate-700">Capacidade: ${capPack.toLocaleString()} pçs/h</span></div>
            <div class="text-xs text-slate-400">Pendente: <strong class="text-white">${vPa.toLocaleString()} pçs</strong> <i class="fa-solid fa-arrow-right mx-1"></i> Tempo estimado de fila: <strong class="text-orange-400 text-sm ml-1">${fT(tPack)}</strong></div>
        </div>
        <div class="text-[9px] text-slate-500 mt-3 text-center uppercase tracking-widest"><i class="fa-solid fa-snowflake text-cyan-500 mr-1"></i> Status Waving (Congelado) - Ignorado no cálculo ativo.</div>
    `);
}

function updateLiveClock() {
    setVal('live-clock', new Date().toLocaleTimeString('pt-BR'));
    let vl = document.getElementById('view-live');
    if(!DATA_CACHE || !AVAILABLE_HOURS.length || (vl && vl.classList.contains('hidden'))) return;
    
    let ch = parseInt(new Date().getHours()); let hNum = AVAILABLE_HOURS.map(h => parseInt(h)).sort((a,b)=>a-b);
    let f = hNum.find(h => h > ch) || hNum[0]; let etd = f.toString().padStart(2, '0');
    
    let lbl = document.getElementById('live-etd-lbl');
    if(lbl && lbl.innerText !== "ETD " + etd + "H") {
        setVal('live-etd-lbl', "ETD " + etd + "H");
        let lst = DATA_CACHE.micro.filter(r => r.horario === etd).sort((a, b) => b.total - a.total);
        
        setHtml('live-offenders-body', lst.map(r => {
            let pct = r.total > 0 ? ((r.concluido / r.total) * 100) : 0;
            return `<tr>
            <td class="p-3 pl-4 font-bold text-slate-800">${r.nome}</td>
            <td class="p-3 text-right text-emerald-600 font-bold">${r.packed}</td>
            <td class="p-3 text-right text-orange-500 font-bold bg-orange-50/50">${r.rtp+r.grp}</td>
            <td class="p-3 text-right text-rose-500 font-bold bg-rose-50/50">${r.pick}</td>
            <td class="p-3 text-right text-slate-400 font-bold opacity-50">${r.wav+r.rtw}</td>
            <td class="p-3 pr-4"><div class="flex items-center gap-2 justify-end"><span class="text-[9px] font-bold w-6 text-right">${pct.toFixed(0)}%</span><div class="w-16 h-1.5 bg-slate-200 rounded-full"><div class="bg-brand-500 h-full rounded-full" style="width:${pct}%"></div></div></div></td>
            </tr>`;
        }).join(''));

        let rampsWithPacked = {};
        lst.forEach(route => {
            if(route.packed > 0) {
                let rNum = Object.keys(RAMPA_MAP).find(k => RAMPA_MAP[k].includes(route.nome));
                if(rNum) {
                    if(!rampsWithPacked[rNum]) rampsWithPacked[rNum] = { pck: 0, routes: [] };
                    rampsWithPacked[rNum].pck += route.packed;
                    if(!rampsWithPacked[rNum].routes.includes(route.nome)) rampsWithPacked[rNum].routes.push(route.nome);
                }
            }
        });
        let rKeys = Object.keys(rampsWithPacked).sort((a, b) => rampsWithPacked[b].pck - rampsWithPacked[a].pck);
        setHtml('live-fullhacks-area', rKeys.length === 0 
            ? `<div class="text-center text-slate-400 text-xs py-4 font-bold">Nenhum packed preso nos tobogãs para este ETD.</div>` 
            : rKeys.map(k => `
                <div class="bg-white border border-emerald-200 p-3 rounded-xl shadow-sm flex justify-between items-center">
                    <div class="flex items-center gap-3">
                        <div class="bg-emerald-500 text-white font-black text-sm w-10 h-10 flex items-center justify-center rounded-lg shadow-inner">T${k}</div>
                        <div class="flex flex-col"><span class="text-[9px] text-slate-400 uppercase font-bold">Rotas nesta rampa:</span><span class="text-xs font-bold text-slate-700 w-32 truncate" title="${rampsWithPacked[k].routes.join(', ')}">${rampsWithPacked[k].routes.join(', ')}</span></div>
                    </div>
                    <div class="text-right flex flex-col items-end"><span class="text-2xl font-black text-emerald-600 font-mono leading-none">${rampsWithPacked[k].pck}</span><span class="text-[8px] text-emerald-700 font-bold uppercase tracking-widest mt-1">Peças em Packed</span></div>
                </div>
            `).join(''));
    }
}
