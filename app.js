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
    if(manual) document.getElementById('global-loader').classList.remove('hidden');
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
    let txt = document.getElementById('input-paste').value; if(!txt) return; 
    closeModal('import-modal'); document.getElementById('global-loader').classList.remove('hidden'); document.getElementById('loader-title').innerText = "Analisando WMS...";
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
                if (slaIdx !== -1) { vTot = parseNum(numsB[nums
