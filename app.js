// === COLOQUE A URL DA SUA PLANILHA AQUI ===
const URL_GOOGLE_APPS_SCRIPT = "https://script.google.com/macros/s/AKfycbz6rExW6bwPBsWFTirLwjnIMNtq2lT5k9w_MkEkp2H14cXJhlif0gcTvHM6T--iwfPG/exec";; 
// ==========================================

// --- CONFIGURAÇÃO (LOCAL E MAPAS) ---
const CSV_PLANILHA_TOBOGAS = "https://docs.google.com/spreadsheets/d/1wRtBiDY1U9gOeRE_15mg8iKKVQE2wBnRX9Jb69fMUvE/pub?output=csv"; 
const CURRENT_R_STR = "1:JETSL1,2:JETSL1,3:SSP8,4:SRJ13,5:SRJ8,6:SSP10,7:SBA4,8:SSP11,9:SSP5,10:SSP39,11:SSP4,12:SMG15,13:SSP23,14:SMG12,15:SSP9,16:SSP20,17:SMG2,18:SMG8,19:SMG9,20:SSP38,21:SPR8,22:SSC2,23:SSC2,24:SDF1,25:SDF1,26:SSP13,27:SRJ5,28:SSP14,29:SSP14,30:SMG14|SSP18|SSP9_S,31:SMG14|SSP18|SSP9_S,32:JETHUB1|SMG5|SSP34|SSP38_S,33:JETHUB1|SMG5|SSP34|SSP38_S,34:SES1|SRJ10_CHP|SSP36|SSP37_S|SSP4_CHP,35:SES1|SRJ10_CHP|SSP36|SSP37_S|SSP4_CHP,36:SRS10|SSC3|SSP1_S|SSP5A_S,37:SRS10|SSC3|SSP1_S|SSP5A_S,38:SGO2|SMG1|SRJ3_CHP|SSP28,39:SGO2|SMG1|SRJ3_CHP|SSP28,40:SMS2|SRJ1_CHP|SSP3_S|SSP40_CHP|SSP48,41:SMS2|SRJ1_CHP|SSP3_S|SSP40_CHP|SSP48,42:SAL1_CHP|SSP30_S,43:SAL1_CHP|SSP30_S,44:SES3|SPR4|SRS8|SSP5_S,45:SES3|SPR4|SRS8|SSP5_S,46:SES3_X|SPR2|SRD1|SSP26,47:SES3_X|SPR2|SRD1|SSP26,48:JETGO1|SAL1|SSC7|SSP12|SSP6,49:JETGO1|SAL1|SSC7|SSP12|SSP6,50:MSP1_E|MSP21_E|MSP5_E|MSP7_E,51:JADHUB|JETBA2|JETBA3|LOGHUB|SSP46|XSP9_1|XSP9_2|XSP9_6,52:MSP1_E|MSP21_E|MSP5_E|MSP7_E|SRJ2,53:SPR1|SSP18_S|SSP3,54:SPR1|SSP18_S|SSP3,55:SMG13|SRS1_CHP|SRS4|SSP7,56:SMG13|SRS1_CHP|SRS4|SSP7,57:IMISL1|SRJ12|SRJ6_CHP|SRJ7|SSP1,58:IMISL1|SRJ12|SRJ6_CHP|SRJ7|SSP1,59:SMG3|SRJ10|SSC4|SSP17,60:SMG3|SRJ10|SSC4|SSP17,61:SMG11|SPI1|SRJ9|SSP1_CHP|SSP40,62:SMG11|SPI1|SRJ9|SSP1_CHP|SSP40,63:SBA7|SPR5|SSC5|SSP40_S|SSP7_S,64:SBA7|SPR5|SSC5|SSP40_S|SSP7_S,65:SBA3|SMG10|SPR7|SSP24|SSP39_S,66:SBA3|SMG10|SPR7|SSP24|SSP39_S,67:SRJ1|SRS5|SSP16|SSP45_CHP|SSP5F_S,68:SRS5|SSP16|SSP45_CHP|SSP49|SSP5F_S,69:SMG13_X|SMG1_CHP|SMG4|SMR1|SSP6_S,70:SMG13_X|SMG1_CHP|SMG4|SMR1|SSP6_S,71:SCE1|SMS1|SPR1_CHP|SSP25_S|SSP37,72:SCE1|SMS1|SPR1_CHP|SSP25_S|SSP37,73:SMG8_CHP|SRD2|SSC1|SSP25|XSP9_6_CHP,74:SMG8_CHP|SRD2|SSC1|SSP25|XSP9_6_CHP,75:SBA6|SMG7|SSP22_CHP|SSP29_S,76:SBA6|SMG7|SSP22_CHP|SSP29_S,77:SBA2|SPA1_X|SRS3|SSC8|SSP31,78:SBA2|SPA1_X|SRS3|SSC8|SSP31,79:SES2|SGO1|SRJ4|SSP45|SSP45_S,80:SES2|SGO1|SRJ4|SSP45|SSP45_S,81:SMR2|SRS2|SSP27_S|SSP29|XSP9_1_CHP,82:SMR2|SRS2|SSP27_S|SSP29|XSP9_1_CHP,83:SPR3|SRJ6|SRS7|SSP12_CHP,84:SPR3|SRJ6|SRS7|SSP12_CHP,85:SMN1|SSC9|SSP15|SSP18_CHP|SSP48_S,86:SMN1|SSC9|SSP15|SSP18_CHP|SSP48_S,87:SRS1|SSP17_CHP|SSP27|SSP49_S|STO1,88:SRS1|SSP17_CHP|SSP27|SSP49_S|STO1,89:SBA1|SMG6|SSP21_CHP|SSP49,90:SBA1|SSP21_CHP|SSP49,91:JETRD1|SRJ3|SSP23_S|SSP30|SSP7_CHP,92:JETRD1|SRJ3|SSP23_S|SSP30|SSP7_CHP,93:SSP21_S|SSP22|STO2,94:SSP21_S|SSP22|STO2,95:SDF2|SPA1|SPR6_CHP|SRS9,96:SDF2|SPA1|SPR6_CHP|SRS9,97:SGO1_X|SPE1|SPR6|SSP15_CHP|SSP21,98:SGO1_X|SPE1|SPR6|SSP15_CHP|SSP21,99:SAL1_A|SAL1_B|SAM1_A|SAM1_C|SBA1_A|SBA2_A|SBA6_A|SCE1_A|SDF1_A|SDF2_A|SES1_A|SES1_B|SFN1_C|SGO1X_A|SGO1_A|SGO1_B|SJP1X_A|SJP1_A|SMN1_A|SMR1_A|SMR1_B|SMR2_A|SPA1X_A|SPA1_A|SPA1_B|SPE1_A|SPI1_A|SRN1_A|SRS1_A|SRS8_A|SRS9_A|SSE1_A|SAM1_B|SCE1_B|SJP1_B|SMN1_B|SPI1_B|SRN1_B|SRS1_B|SSE1_B|STO1_B|SAL1_C|SBA1_C|SCE1_C|SJP1_C|SMR1_C|SPA1_C|SRN1_C|SSE1_C,100:SAL1_A|SAL1_B|SAM1_A|SAM1_C|SBA1_A|SBA2_A|SBA6_A|SCE1_A|SDF1_A|SDF2_A|SES1_A|SES1_B|SFN1_C|SGO1X_A|SGO1_A|SGO1_B|SJP1X_A|SJP1_A|SMN1_A|SMR1_A|SMR1_B|SMR2_A|SPA1X_A|SPA1_A|SPA1_B|SPE1_A|SPI1_A|SRN1_A|SRS1_A|SRS8_A|SRS9_A|SSE1_A|SAM1_B|SCE1_B|SJP1_B|SMN1_B|SPI1_B|SRN1_B|SRS1_B|SSE1_B|STO1_B|SAL1_C|SBA1_C|SCE1_C|SJP1_C|SMR1_C|SPA1_C|SRN1_C|SSE1_C";

// --- VARIÁVEIS GLOBAIS ---
let DATA_CACHE = null; 
let SETTINGS_DATA = { autoStart: 1, autoEnd: 29, pickHC: 0, pickM: 0, packHC: 0, packM: 0, indHC: 0, indM: 450, atrHC: 0, atrM: 450 };
let RAMPA_MAP = {}; let ROUTE_LIST = []; let AVAILABLE_HOURS = []; let SELECTED_HOURS = [];

// --- UTILITÁRIOS ---
function setVal(id, v) { let el = document.getElementById(id); if(el) el.innerText = v; }
function setHtml(id, h) { let el = document.getElementById(id); if(el) el.innerHTML = h; }
function setStyle(id, p, v) { let el = document.getElementById(id); if(el) el.style[p] = v; }
function setClass(id, action, cls) { let el = document.getElementById(id); if(el) el.classList[action](cls); }
function setStatusUi(msg, color) { setHtml('data-status', `<span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full ${color}"></span> <span class="text-slate-500 font-bold uppercase text-[9px]">${msg}</span></span>`); }

// --- INICIALIZAÇÃO ---
window.onload = () => { 
    carregarMapaImediato(); 
    carregarMapaTobogas(); 
    carregarDadosLocais(); 
    
    setInterval(updateLiveClock, 1000); 

    if(URL_GOOGLE_APPS_SCRIPT && URL_GOOGLE_APPS_SCRIPT !== "COLE_SUA_URL_DO_GOOGLE_AQUI") {
        setInterval(buscarDadosDaNuvem, 60000);
        setTimeout(buscarDadosDaNuvem, 2000); 
    }
};

// --- FUNÇÃO DE BUSCA DO GOOGLE (A PONTE JSONP ANTI-CORS) ---
function buscarDadosDaNuvem() {
    setStatusUi('Aguardando Nuvem...', 'bg-amber-500 animate-pulse');

    let script = document.createElement('script');
    // Adiciona "callback=receberDadosDoGoogle" para forçar o JSONP e bypassar o CORS
    script.src = URL_GOOGLE_APPS_SCRIPT + "?callback=receberDadosDoGoogle&t=" + new Date().getTime();
    
    script.onerror = function() {
        setStatusUi('Erro: CORS ou Nova Versão pendente no Google', 'bg-rose-500');
    };

    document.body.appendChild(script);

    setTimeout(() => { 
        if (script.parentNode) script.parentNode.removeChild(script); 
    }, 5000);
}

// O Google Apps Script vai executar ESTA função automaticamente!
window.receberDadosDoGoogle = function(data) {
    if (data && data.texto && data.texto.trim().length > 10) {
        let elPaste = document.getElementById('input-paste');
        if (elPaste) elPaste.value = data.texto;
        
        processarTextoCola(true); 
        
        let dataHora = data.tempo ? data.tempo : new Date().toLocaleTimeString('pt-BR');
        setStatusUi(`Nuvem Sincronizada: ${dataHora}`, 'bg-emerald-500');
    } else {
         setStatusUi('Planilha Google Vazia', 'bg-rose-500');
    }
};

function carregarMapaImediato() {
    ROUTE_LIST = []; for(let i=1; i<=100; i++) RAMPA_MAP[i] = [];
    CURRENT_R_STR.split(',').forEach(g => { let [t, r] = g.split(':'); if(r) { r.split('|').forEach(x => { ROUTE_LIST.push({ t: parseInt(t), r: x }); RAMPA_MAP[parseInt(t)].push(x); }); } });
}

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

function carregarDadosLocais() {
    let saved = localStorage.getItem("WMS_DATA_SHIPPING_V2");
    if(saved) {
        let parsed = JSON.parse(saved);
        DATA_CACHE = parsed.d;
        if(parsed.s) { SETTINGS_DATA = { ...SETTINGS_DATA, ...parsed.s }; }
        
        let syncUI = (id, val) => { let el = document.getElementById(id); if(el) el.value = val || ''; };
        syncUI('inline-auto-start', SETTINGS_DATA.autoStart); syncUI('inline-auto-end', SETTINGS_DATA.autoEnd);
        syncUI('inline-hc-pick', SETTINGS_DATA.pickHC); syncUI('inline-lq-pick', SETTINGS_DATA.pickM);
        syncUI('inline-hc-pack', SETTINGS_DATA.packHC); syncUI('inline-lq-pack', SETTINGS_DATA.packM);
        syncUI('inline-hc-ind', SETTINGS_DATA.indHC); syncUI('inline-lq-ind', SETTINGS_DATA.indM);
        syncUI('inline-hc-atr', SETTINGS_DATA.atrHC); syncUI('inline-lq-atr', SETTINGS_DATA.atrM);

        if (DATA_CACHE && DATA_CACHE.kpis) {
            AVAILABLE_HOURS = Object.keys(DATA_CACHE.kpis).filter(k => k !== "99" && k !== "S/H" && k !== "ATRASO").sort(); 
        } else {
            AVAILABLE_HOURS = [];
        }
        SELECTED_HOURS = []; 
        renderEtdCheckboxes(); 
        aplicarFiltros();
    } else {
        aplicarFiltros();
    }
}

function salvarDadosLocais() {
    let payload = JSON.stringify({ d: DATA_CACHE, s: SETTINGS_DATA });
    localStorage.setItem("WMS_DATA_SHIPPING_V2", payload);
}

function salvarHCDinamico() {
    let g = (id) => { let el = document.getElementById(id); let val = el ? parseFloat(el.value) : 0; return isNaN(val) || val < 0 ? 0 : val; };
    SETTINGS_DATA.autoStart = g('inline-auto-start') || 1; SETTINGS_DATA.autoEnd = g('inline-auto-end') || 29;
    SETTINGS_DATA.pickHC = g('inline-hc-pick'); SETTINGS_DATA.pickM = g('inline-lq-pick');
    SETTINGS_DATA.packHC = g('inline-hc-pack'); SETTINGS_DATA.packM = g('inline-lq-pack');
    SETTINGS_DATA.indHC = g('inline-hc-ind'); SETTINGS_DATA.indM = g('inline-lq-ind');
    SETTINGS_DATA.atrHC = g('inline-hc-atr'); SETTINGS_DATA.atrM = g('inline-lq-atr');
    
    salvarDadosLocais();
    aplicarFiltros(); 
}

// --- RELATÓRIO DO TOBOGÃ ---
function gerarTooltipNarrativo(chuteNum, arrRotas, totalZonasArea) {
    if(!arrRotas || arrRotas.length === 0) return encodeURIComponent(`<div class="p-2 text-slate-300 font-bold">Sem movimentação</div>`);
    
    let isAuto = chuteNum >= SETTINGS_DATA.autoStart && chuteNum <= SETTINGS_DATA.autoEnd;
    let tipoRecurso = isAuto ? "Indiretos" : "Atrelamento";
    let lqRecurso = isAuto ? (SETTINGS_DATA.indM || 450) : (SETTINGS_DATA.atrM || 450);

    let tWav = 0, tRtw = 0, tPick = 0, tPack = 0, tPacked = 0, tPronto = 0;
    arrRotas.forEach(r => { 
        tWav += r.wav; tRtw += r.rtw; tPick += r.pick; 
        tPack += (r.rtp + r.grp + r.r); 
        tPacked += r.packed; 
        tPronto += (r.huIn + r.huCl + r.ship);
    });

    let totalFuturo = tPacked + tPack + tPick + tRtw; 
    let reqPessoas = (lqRecurso > 0 && totalZonasArea !== undefined) ? (totalZonasArea / lqRecurso).toFixed(1) : "∞";

    let pcm = lqRecurso / 60;
    let timeAtr = pcm > 0 ? Math.ceil(tPacked / pcm) : Infinity;

    let html = `<div class="font-sans text-sm min-w-[320px]">`;
    html += `<div class="font-black border-b border-slate-700 pb-2 mb-3 text-white flex justify-between items-center"><span>Tobogã ${chuteNum} <span class="text-[9px] bg-slate-700 px-1.5 py-0.5 rounded ml-1">${isAuto ? 'AUTO' : 'MANUAL'}</span></span> <span class="text-slate-400 text-[9px] uppercase font-bold tracking-widest">Previsão Físico-Temporal</span></div>`;
    
    html += `<div class="text-slate-300 mb-4 text-xs">Análise de fluxo para <strong class="text-white">${totalFuturo + tWav} pçs</strong> totais pendentes nesta rampa:</div>`;

    if(tPacked > 0) {
        let msgAler = lqRecurso <= 0 ? `<span class="text-rose-400">HC de Área Zerado!</span>` : `Levará ~${timeAtr} min para escoar.`;
        html += `<div class="text-slate-300 leading-tight mb-3 text-xs"><span class="text-emerald-400 font-black">&bull; AGORA:</span> <strong>${tPacked} pçs</strong> embaladas retidas no tobogã. Exigem ${tipoRecurso.toLowerCase()} imediato.<br><span class="text-[10px] text-slate-400 mt-1 block">${msgAler}</span></div>`;
    }
    
    if(tPack > 0) {
        html += `<div class="text-slate-300 leading-tight mb-3 text-xs"><span class="text-amber-500 font-black">&bull; EM 0 a 15 MIN:</span> <strong>${tPack} pçs</strong> estão em Packing (Mesa/Esteira). Descerão continuamente neste intervalo.</div>`;
    }
    
    if(tPick > 0) {
        html += `<div class="text-slate-300 leading-tight mb-3 text-xs"><span class="text-orange-500 font-black">&bull; EM 15 a 45 MIN:</span> <strong>${tPick} pçs</strong> estão em Picking. (Considerando a média de 38 min por tarefa de separação).</div>`;
    }
    
    if(tRtw > 0 || tWav > 0) {
        let textVolumeFila = tRtw > 0 ? `A onda da Fila (<strong>${tRtw} pçs</strong>)` : `As peças em Waving (<strong>${tWav} pçs</strong>)`;
        let volExtra = tWav > 0 && tRtw > 0 ? ` + ${tWav} congeladas` : ``;
        html += `<div class="text-slate-300 leading-tight text-xs"><span class="text-rose-400 font-black">&bull; DAQUI A 45 a 60+ MIN:</span> ${textVolumeFila}${volExtra} atingirá o processo. Nova injeção de volume para a rampa.</div>`;
    }

    if(totalZonasArea !== undefined && totalZonasArea > 0) {
        html += `
            <div class="mt-4 pt-3 border-t border-slate-700 bg-slate-800/50 p-2 rounded">
                <div class="text-[10px] text-slate-400 uppercase font-bold mb-1"><i class="fa-solid fa-users text-blue-400"></i> Sugestão para a Área Mestra (Zona de 10 Tobogãs)</div>
                <div class="text-xs text-white">A zona inteira exige <strong>~${reqPessoas} pessoas</strong> (${tipoRecurso}) para suportar de forma limpa as ${totalZonasArea} pçs ativas na área.</div>
            </div>
        `;
    }

    html += `</div>`;
    return encodeURIComponent(html);
}

// --- PROCESSADOR DE TEXTO (CÁLCULO MATEMÁTICO) ---
function processarTextoCola(veioDaNuvem = false) {
    let elPaste = document.getElementById('input-paste'); 
    let txt = elPaste ? elPaste.value : ''; 
    if(!txt) return; 
    
    if (!veioDaNuvem) {
        closeModal('import-modal'); 
        setClass('global-loader', 'remove', 'hidden'); 
        setVal('loader-title', 'Analisando WMS...');
    }

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
            if(arr.length === 0) { 
                if(!veioDaNuvem) { alert("Nenhum dado encontrado."); fecharLoader(); }
                else { setStatusUi('Erro ao ler texto da Nuvem', 'bg-rose-500'); }
                return; 
            }

            let mergeEl = document.getElementById('chk-merge'); let isMerge = mergeEl ? mergeEl.checked : false; let finalArr = arr, finalKpis = k;
            if (isMerge && DATA_CACHE && DATA_CACHE.micro) {
                let mergedMap = {}; DATA_CACHE.micro.forEach(r => { mergedMap[r.nome + "-" + r.horario] = r; }); arr.forEach(r => { mergedMap[r.nome + "-" + r.horario] = r; });
                finalArr = Object.values(mergedMap).sort((a, b) => b.total - a.total); finalKpis = {}; finalArr.forEach(r => { if(!finalKpis[r.horario]) finalKpis[r.horario] = { total: 0 }; finalKpis[r.horario].total += r.total; });
            }
            DATA_CACHE = { micro: finalArr, kpis: finalKpis }; AVAILABLE_HOURS = Object.keys(finalKpis).filter(x => x !== "99" && x !== "S/H" && x !== "ATRASO").sort(); SELECTED_HOURS = []; renderEtdCheckboxes();
            
            salvarDadosLocais(); 
            aplicarFiltros(); 

            if(!veioDaNuvem) {
                fecharLoader(); 
                mudarAba('dashboard');
            }
        } catch(e) { 
            console.error(e); 
            if(!veioDaNuvem) { alert("Erro ao ler dados: " + e.message); fecharLoader(); }
            else { setStatusUi('Erro na leitura da Nuvem', 'bg-rose-500'); }
        }
    }, 500);
}

function aplicarFiltros() {
    let lst = (DATA_CACHE && DATA_CACHE.micro) ? DATA_CACHE.micro : [];
    
    if(SELECTED_HOURS.length > 0) lst = lst.filter(x => SELECTED_HOURS.includes(x.horario) || x.horario === 'ATRASO');
    
    let busca = document.getElementById('inline-search');
    if(busca && busca.value.trim() !== '') {
        let term = busca.value.toUpperCase().trim();
        lst = lst.filter(x => x.nome.toUpperCase().includes(term));
    }

    let statusFilter = document.getElementById('inline-status-filter');
    if(statusFilter) {
        let val = statusFilter.value;
        if(val === 'waving') lst = lst.filter(x => x.wav > 0);
        if(val === 'rtw') lst = lst.filter(x => x.rtw > 0);
        if(val === 'wip') lst = lst.filter(x => (x.pick + x.rtp + x.grp) > 0);
    }

    renderDash(lst); renderAereo(lst); renderMatriz(lst); renderMicro(lst);
}

function mudarAba(aba) { 
    document.querySelectorAll('[id^="view-"]').forEach(e => e.classList.add('hidden')); setClass('view-' + aba, 'remove', 'hidden'); 
    document.querySelectorAll('.sidebar-link').forEach(e => e.classList.remove('active')); setClass('btn-' + aba, 'add', 'active'); 
}

function openModal(id) { setClass(id, 'remove', 'hidden'); }
function closeModal(id) { setClass(id, 'add', 'hidden'); }
function fecharLoader() { setClass('global-loader', 'add', 'hidden'); }
function parseNum(s) { if(!s || s === '-' || s === '–') return 0; let c = s.replace(/[^\d]/g, ''); return c === '' ? 0 : parseInt(c, 10); }
function isAereo(c) { return RAMPA_MAP[99]?.includes(c) || RAMPA_MAP[100]?.includes(c) || /_A$|_B$|_C$/.test(c); }

function renderEtdCheckboxes() {
    let h = `<label class="flex gap-2 p-2 text-xs font-bold hover:bg-slate-50 cursor-pointer"><input type="checkbox" onchange="toggleAllEtds()" ${SELECTED_HOURS.length === 0 ? 'checked' : ''} class="w-4 h-4 rounded"> TODOS</label><hr>`;
    AVAILABLE_HOURS.forEach(hr => { h += `<label class="flex gap-2 p-2 text-xs hover:bg-slate-50 cursor-pointer"><input type="checkbox" value="${hr}" onchange="toggleSingleEtd(this)" ${SELECTED_HOURS.includes(hr) ? 'checked' : ''} class="w-4 h-4 rounded"> ${hr}H</label>`; });
    setHtml('etd-dropdown-panel', h); setVal('etd-btn-text', SELECTED_HOURS.length === 0 ? "TODOS" : SELECTED_HOURS.length + " SELEC");
}
function toggleAllEtds() { SELECTED_HOURS = []; renderEtdCheckboxes(); aplicarFiltros(); }
function toggleSingleEtd(e) { if(e.checked) SELECTED_HOURS.push(e.value); else SELECTED_HOURS = SELECTED_HOURS.filter(x => x !== e.value); if(SELECTED_HOURS.length >= AVAILABLE_HOURS.length) SELECTED_HOURS = []; renderEtdCheckboxes(); aplicarFiltros(); }

function showTooltip(e, html) { let t = document.getElementById('floating-tip'); if(!html || !t) return; t.innerHTML = decodeURIComponent(html); t.classList.remove('hidden'); moveTooltip(e); }
function moveTooltip(e) { let t = document.getElementById('floating-tip'); if(!t || t.classList.contains('hidden')) return; let x = e.clientX + 15, y = e.clientY + 15; if
