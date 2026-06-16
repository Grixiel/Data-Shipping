// === COLOQUE A URL DA SUA PLANILHA AQUI ===
const URL_GOOGLE_APPS_SCRIPT = "https://script.google.com/a/macros/mercadolivre.com/s/AKfycbxfJ_oWoDfEKmBL5rrlXRmNCJzr8Pb2YHD5S8jVIQjBVGZpSsnswECJHmbI0llBesq5/exec"; 
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
    
    // Atualiza o relógio radar
    setInterval(updateLiveClock, 1000); 

    // O painel puxa os dados do Google a cada 60 segundos
    if(URL_GOOGLE_APPS_SCRIPT && URL_GOOGLE_APPS_SCRIPT !== "COLE_SUA_URL_DO_GOOGLE_AQUI") {
        setInterval(buscarDadosDaNuvem, 60000);
        setTimeout(buscarDadosDaNuvem, 2000); // Força uma busca inicial
    }
};

// --- FUNÇÃO DE BUSCA DO GOOGLE (A PONTE) ---
function buscarDadosDaNuvem() {
    setStatusUi('Aguardando Nuvem...', 'bg-amber-500 animate-pulse');

    // Usando fetch com mode: 'cors' para evitar bloqueios de redirecionamento do Google
    fetch(URL_GOOGLE_APPS_SCRIPT, { mode: 'cors' })
    .then(res => {
        if (!res.ok) throw new Error("Erro na resposta da rede: " + res.status);
        return res.json();
    })
    .then(data => {
        if (data && data.texto && data.texto.trim().length > 10) {
            let elPaste = document.getElementById('input-paste');
            if (elPaste) elPaste.value = data.texto;
            
            processarTextoCola(true); 
            
            let dataHora = data.tempo ? data.tempo : new Date().toLocaleTimeString('pt-BR');
            setStatusUi(`Nuvem Sincronizada: ${dataHora}`, 'bg-emerald-500');
        } else {
             setStatusUi('Planilha Vazia', 'bg-rose-500');
        }
    })
    .catch(err => {
        console.error("Erro ao buscar dados do Google:", err);
        setStatusUi('Falha ao Ligar à Nuvem', 'bg-rose-500');
    });
}
