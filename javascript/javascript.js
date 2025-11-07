// Quando o DOM estiver carregado, inicializa toda a lógica da página
// Observação: aqui agrupamos a inicialização de dados, listeners e funções
document.addEventListener('DOMContentLoaded',()=>{
// ======================== Dados Tabelas ====================
// Tabela de vencimentos básicos por cargo/classe/padrão e jornada
// Cada objeto representa uma combinação e os valores para 40h (h40) e 30h (h30)
const vencimentosBasicos = [
  {cargo:"Analista do Seguro Social", classe:"ESPECIAL", padrao:"V", h40:1599.69, h30:1199.77},
  {cargo:"Analista do Seguro Social", classe:"ESPECIAL", padrao:"IV", h40:1518.54, h30:1138.91},
  {cargo:"Analista do Seguro Social", classe:"ESPECIAL", padrao:"III", h40:1441.20, h30:1080.90},
  {cargo:"Analista do Seguro Social", classe:"ESPECIAL", padrao:"II", h40:1424.83, h30:1068.62},
  {cargo:"Analista do Seguro Social", classe:"ESPECIAL", padrao:"I", h40:1393.40, h30:1045.05},
  {cargo:"Analista do Seguro Social", classe:"C", padrao:"V", h40:1363.05, h30:1022.29},
  {cargo:"Analista do Seguro Social", classe:"C", padrao:"IV", h40:1333.56, h30:1000.17},
  {cargo:"Analista do Seguro Social", classe:"C", padrao:"III", h40:1304.94, h30:978.71},
  {cargo:"Analista do Seguro Social", classe:"C", padrao:"II", h40:1277.14, h30:957.86},
  {cargo:"Analista do Seguro Social", classe:"C", padrao:"I", h40:1250.15, h30:937.61},
  {cargo:"Analista do Seguro Social", classe:"B", padrao:"V", h40:1223.97, h30:917.98},
  {cargo:"Analista do Seguro Social", classe:"B", padrao:"IV", h40:1198.53, h30:898.90},
  {cargo:"Analista do Seguro Social", classe:"B", padrao:"III", h40:1173.83, h30:880.37},
  {cargo:"Analista do Seguro Social", classe:"B", padrao:"II", h40:1149.84, h30:862.38},
  {cargo:"Analista do Seguro Social", classe:"B", padrao:"I", h40:1126.60, h30:844.95},
  {cargo:"Analista do Seguro Social", classe:"A", padrao:"V", h40:1104.03, h30:828.02},
  {cargo:"Analista do Seguro Social", classe:"A", padrao:"IV", h40:1082.06, h30:811.55},
  {cargo:"Analista do Seguro Social", classe:"A", padrao:"III", h40:1060.64, h30:795.48},
  {cargo:"Analista do Seguro Social", classe:"A", padrao:"II", h40:1039.74, h30:779.81},
  {cargo:"Analista do Seguro Social", classe:"A", padrao:"I", h40:1019.35, h30:764.51},
  {cargo:"Técnico do Seguro Social", classe:"ESPECIAL", padrao:"V", h40:1201.20, h30:900.90},
  {cargo:"Técnico do Seguro Social", classe:"ESPECIAL", padrao:"IV", h40:1136.40, h30:852.30},
  {cargo:"Técnico do Seguro Social", classe:"ESPECIAL", padrao:"III", h40:1103.11, h30:827.33},
  {cargo:"Técnico do Seguro Social", classe:"ESPECIAL", padrao:"II", h40:1071.24, h30:803.43},
  {cargo:"Técnico do Seguro Social", classe:"ESPECIAL", padrao:"I", h40:1066.01, h30:799.51},
  {cargo:"Técnico do Seguro Social", classe:"C", padrao:"V", h40:1035.76, h30:776.82},
  {cargo:"Técnico do Seguro Social", classe:"C", padrao:"IV", h40:1006.78, h30:755.09},
  {cargo:"Técnico do Seguro Social", classe:"C", padrao:"III", h40:978.95, h30:734.21},
  {cargo:"Técnico do Seguro Social", classe:"C", padrao:"II", h40:952.41, h30:714.31},
  {cargo:"Técnico do Seguro Social", classe:"C", padrao:"I", h40:926.90, h30:695.18},
  {cargo:"Técnico do Seguro Social", classe:"B", padrao:"V", h40:902.62, h30:676.97},
  {cargo:"Técnico do Seguro Social", classe:"B", padrao:"IV", h40:879.29, h30:659.47},
  {cargo:"Técnico do Seguro Social", classe:"B", padrao:"III", h40:856.95, h30:642.71},
  {cargo:"Técnico do Seguro Social", classe:"B", padrao:"II", h40:835.59, h30:626.69},
  {cargo:"Técnico do Seguro Social", classe:"B", padrao:"I", h40:815.11, h30:611.33},
  {cargo:"Técnico do Seguro Social", classe:"A", padrao:"V", h40:795.56, h30:596.67},
  {cargo:"Técnico do Seguro Social", classe:"A", padrao:"IV", h40:776.74, h30:582.56},
  {cargo:"Técnico do Seguro Social", classe:"A", padrao:"III", h40:758.54, h30:568.91},
  {cargo:"Técnico do Seguro Social", classe:"A", padrao:"II", h40:740.91, h30:555.68},
  {cargo:"Técnico do Seguro Social", classe:"A", padrao:"I", h40:723.83, h30:542.87}
];

// Tabela de valor por ponto de GDASS (por cargo/classe/padrão e jornada)
// Valores por ponto (40h/30h) fornecidos pelo usuário
const gdassPorPonto = [
  {cargo:"Analista do Seguro Social", classe:"ESPECIAL", padrao:"V", h40:117.31, h30:87.98},
  {cargo:"Analista do Seguro Social", classe:"ESPECIAL", padrao:"IV", h40:114.28, h30:85.71},
  {cargo:"Analista do Seguro Social", classe:"ESPECIAL", padrao:"III", h40:111.33, h30:83.50},
  {cargo:"Analista do Seguro Social", classe:"ESPECIAL", padrao:"II", h40:108.46, h30:81.34},
  {cargo:"Analista do Seguro Social", classe:"ESPECIAL", padrao:"I", h40:105.66, h30:79.24},
  {cargo:"Analista do Seguro Social", classe:"C", padrao:"V", h40:100.15, h30:75.51},
  {cargo:"Analista do Seguro Social", classe:"C", padrao:"IV", h40:97.61, h30:73.21},
  {cargo:"Analista do Seguro Social", classe:"C", padrao:"III", h40:95.14, h30:71.35},
  {cargo:"Analista do Seguro Social", classe:"C", padrao:"II", h40:92.73, h30:69.54},
  {cargo:"Analista do Seguro Social", classe:"C", padrao:"I", h40:90.38, h30:67.78},
  {cargo:"Analista do Seguro Social", classe:"B", padrao:"V", h40:85.75, h30:64.31},
  {cargo:"Analista do Seguro Social", classe:"B", padrao:"IV", h40:83.61, h30:62.71},
  {cargo:"Analista do Seguro Social", classe:"B", padrao:"III", h40:81.53, h30:61.15},
  {cargo:"Analista do Seguro Social", classe:"B", padrao:"II", h40:79.51, h30:59.63},
  {cargo:"Analista do Seguro Social", classe:"B", padrao:"I", h40:77.53, h30:58.15},
  {cargo:"Analista do Seguro Social", classe:"A", padrao:"V", h40:73.84, h30:55.38},
  {cargo:"Analista do Seguro Social", classe:"A", padrao:"IV", h40:71.34, h30:53.51},
  {cargo:"Analista do Seguro Social", classe:"A", padrao:"III", h40:69.93, h30:52.45},
  {cargo:"Analista do Seguro Social", classe:"A", padrao:"II", h40:68.55, h30:51.41},
  {cargo:"Analista do Seguro Social", classe:"A", padrao:"I", h40:67.21, h30:50.40},

  {cargo:"Técnico do Seguro Social", classe:"ESPECIAL", padrao:"V", h40:79.57, h30:59.68},
  {cargo:"Técnico do Seguro Social", classe:"ESPECIAL", padrao:"IV", h40:77.10, h30:57.83},
  {cargo:"Técnico do Seguro Social", classe:"ESPECIAL", padrao:"III", h40:74.71, h30:56.03},
  {cargo:"Técnico do Seguro Social", classe:"ESPECIAL", padrao:"II", h40:72.39, h30:54.30},
  {cargo:"Técnico do Seguro Social", classe:"ESPECIAL", padrao:"I", h40:70.15, h30:52.61},
  {cargo:"Técnico do Seguro Social", classe:"C", padrao:"V", h40:66.37, h30:49.77},
  {cargo:"Técnico do Seguro Social", classe:"C", padrao:"IV", h40:64.34, h30:48.25},
  {cargo:"Técnico do Seguro Social", classe:"C", padrao:"III", h40:62.38, h30:46.78},
  {cargo:"Técnico do Seguro Social", classe:"C", padrao:"II", h40:60.47, h30:45.35},
  {cargo:"Técnico do Seguro Social", classe:"C", padrao:"I", h40:58.62, h30:43.97},
  {cargo:"Técnico do Seguro Social", classe:"B", padrao:"V", h40:55.46, h30:41.60},
  {cargo:"Técnico do Seguro Social", classe:"B", padrao:"IV", h40:53.79, h30:40.35},
  {cargo:"Técnico do Seguro Social", classe:"B", padrao:"III", h40:52.18, h30:39.13},
  {cargo:"Técnico do Seguro Social", classe:"B", padrao:"II", h40:50.61, h30:37.96},
  {cargo:"Técnico do Seguro Social", classe:"B", padrao:"I", h40:49.09, h30:36.81},
  {cargo:"Técnico do Seguro Social", classe:"A", padrao:"V", h40:46.44, h30:34.83},
  {cargo:"Técnico do Seguro Social", classe:"A", padrao:"IV", h40:44.65, h30:33.49},
  {cargo:"Técnico do Seguro Social", classe:"A", padrao:"III", h40:43.61, h30:32.71},
  {cargo:"Técnico do Seguro Social", classe:"A", padrao:"II", h40:42.59, h30:31.94},
  {cargo:"Técnico do Seguro Social", classe:"A", padrao:"I", h40:41.61, h30:31.21}
];

function buscarGDASSPorPonto(cargo, classe, padrao, jornada) {
  const item = gdassPorPonto.find(e =>
    e.cargo === cargo && e.classe === classe && e.padrao === padrao
  );
  if(!item) return "";
  return (jornada === "40h" ? item.h40 : item.h30);
}

// Teto RGPS usado em vários pontos
const TETO_RGPS = 8157.41;

// Atualiza o valor padrão da rubrica Abono Permanência (82273)
// Regra: soma as partes Ativo de todas as rubricas cujo 'Incide PSS?' = Sim
// e soma as partes Inativo que incidem; para o Inativo considera apenas o que ultrapassar o teto do RGPS
// Valor padrão do Abono = somaAtivoParaPSS + baseInativoSupraceto
function atualizarValorPadraoAbono(){
  try{
    // Novo: calcula o Abono usando como base a soma dos VALORES PADRÃO das rubricas
    // que incidem em PSS. Ou seja, ValorPadrão(Abono) = calcularContribuicaoPSS(somaValorPadrao)
    let somaValorPadrao = 0;
    document.querySelectorAll('#tabelaRubricas tbody tr').forEach(tr=>{
      try{
        const incide = (tr.querySelector('.rubrica-incidepss')?.value || '').toString().toLowerCase() === 'sim';
        if(!incide) return;
        const valorPad = parseMonetary(tr.querySelector('.rubrica-valorpadrao')?.value) || 0;
        somaValorPadrao += valorPad;
      }catch(e){}
    });
    const pssSobreBaseAtivo = calcularContribuicaoPSS(somaValorPadrao);
    // Atualiza linhas Abono (82273) exibindo o valor da contribuição PSS calculada
    document.querySelectorAll('#tabelaRubricas tbody tr').forEach(tr=>{
      try{
        const codigo = (tr.querySelector('.rubrica-codigo')?.value) || (tr.querySelector('.rubrica-codigo-sel')?.value) || '';
        if(codigo === '82273'){
          const inp = tr.querySelector('.rubrica-valorpadrao');
          // Só sobrescreve o valor-padrão automaticamente se o usuário não marcou edição manual do VALOR PADRÃO
          if(inp && !tr.dataset.valorPadraoManual) {
            inp.value = pssSobreBaseAtivo ? formatCurrency(pssSobreBaseAtivo) : '';
          }
          // Também atualiza imediatamente a parte Ativo/Inativo/Ajuste da linha do Abono
          try{
            const inpAt = tr.querySelector('.rubrica-ativo');
            const inpIn = tr.querySelector('.rubrica-inativo');
            const inpAjuste = tr.querySelector('.rubrica-ajuste');
            // lê a data de aposentadoria para proporcionalizar (se houver)
            const dateStr = document.getElementById('dataAposentadoriaApos')?.value;
            // Usa o valor atualmente exibido no campo (pode ter sido editado manualmente)
            const valorPadNum = inp ? (parseMonetary(inp.value) || 0) : (pssSobreBaseAtivo || 0);
            if(!inpAt || !inpIn || !inpAjuste) { /* nada a fazer */ }
            else if(!dateStr) {
              // sem data: tudo em ativo (rubrica Abono sempre Aplica em Ativo)
              inpAt.value = valorPadNum ? formatCurrency(valorPadNum) : '';
              inpIn.value = formatCurrency(0);
              const numericAt = parseMonetary(inpAt.value) || 0;
              const numericIn = parseMonetary(inpIn.value) || 0;
              let ajusteVal = numericAt - valorPadNum + numericIn;
              ajusteVal = normalizeAjuste(ajusteVal);
              // Se o Valor Padrão for exatamente 0, forçamos Ajuste = 0
              if (valorPadNum === 0) {
                inpAjuste.value = formatCurrency(0);
                inpAjuste.style.color = '';
              } else {
                inpAjuste.value = isNaN(ajusteVal) ? '' : formatCurrency(ajusteVal);
                inpAjuste.style.color = (ajusteVal < 0) ? 'red' : '';
              }
            } else {
              // com data: proporcional por dias do mês (Ativo = dias antes do dia de aposentadoria)
              const parts = dateStr.split('-').map(s => Number(s));
              if(parts.length === 3) {
                const ano = parts[0], mes = parts[1], dia = parts[2];
                if(!isNaN(ano) && !isNaN(mes) && !isNaN(dia)){
                  const diasNoMes = new Date(ano, mes, 0).getDate();
                  const diasAtivo = Math.max(0, dia - 1);
                  const diasInativo = Math.max(0, diasNoMes - diasAtivo);
                  const valorAt = valorPadNum * (diasAtivo / diasNoMes);
                  const valorIn = 0; // Abono sempre Aplica em Ativo por regra
                  inpAt.value = valorAt ? formatCurrency(valorAt) : '';
                  inpIn.value = formatCurrency(valorIn);
                  const numericAt = parseMonetary(inpAt.value) || 0;
                  const numericIn = parseMonetary(inpIn.value) || 0;
                  const rawValorPad = inp ? (inp.value||'').toString().trim() : '';
                  const rawAt = inpAt.value ? inpAt.value.toString().trim() : '';
                  const rawIn = inpIn.value ? inpIn.value.toString().trim() : '';
                  if (!rawValorPad || !rawAt || !rawIn) {
                    inpAjuste.value = formatCurrency(0);
                    inpAjuste.style.color = '';
                  } else {
                    let ajusteVal = numericAt - valorPadNum + numericIn;
                    ajusteVal = normalizeAjuste(ajusteVal);
                    // Se o Valor Padrão for exatamente 0, forçamos Ajuste = 0
                    if (valorPadNum === 0) {
                      inpAjuste.value = formatCurrency(0);
                      inpAjuste.style.color = '';
                    } else if (numericIn > numericAt) {
                      ajusteVal = Math.abs(ajusteVal);
                      inpAjuste.value = isNaN(ajusteVal) ? '' : formatCurrency(ajusteVal);
                      inpAjuste.style.color = '';
                    } else {
                      inpAjuste.value = isNaN(ajusteVal) ? '' : formatCurrency(ajusteVal);
                      inpAjuste.style.color = (ajusteVal < 0) ? 'red' : '';
                    }
                  }
                }
              }
            }
          }catch(e){}
        }
      }catch(e){}
    });
  }catch(e){console.error('Erro atualizarValorPadraoAbono', e)}
}

// Mapeamento de códigos de rubricas para denominações automáticas
// Usado para preencher automaticamente o nome quando o código for conhecido no acertos financeiros aposentadoria
const rubricasAuto = {
  "00001": "Vencimento Básico",
  "00013": "Anuênio",
  "00591": "GAE - GRATIF.ATIV.EXERC",
  "00053": "Adic. de Insalubridade",
  "82286": "GDASS - LEI 10855/2004",
  "00136": "Aux. Alimentação",
  "00951": "Aux. Transporte",
  "82273": "Abono Permanência"
};
const rubricasOpcoes = Object.keys(rubricasAuto);

// Formata um número como moeda no padrão pt-BR com 2 casas decimais
// Entrada: v (Number ou string que represente número)
// Saída: string formatada no padrão brasileiro (ex.: "1.234,56")
function formatCurrency(v){
  try{ return Number(v).toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2}); }catch(e){ return Number(v).toFixed(2); }
}

// Converte uma string no formato monetário pt-BR para Number
// Aceita tanto "1.234,56" quanto "1234.56" e retorna 0 se inválido
function parseMonetary(str){
  if(str === null || str === undefined) return 0;
  // remove espaços
  let s = String(str).trim();
  if(s === '') return 0;
  // aceitar tanto 1.234,56 quanto 1234.56
  // remove pontos de milhar e troca vírgula por ponto
  s = s.replace(/\./g,'').replace(/,/g,'.');
  const n = Number(s);
  return isNaN(n) ? 0 : n;
}

// Normaliza valor de ajuste: considera como zero qualquer valor com magnitude <= R$0,01
function normalizeAjuste(v){
  if (v === null || v === undefined || isNaN(v)) return v;
  return (Math.abs(v) <= 0.01) ? 0 : v;
}

// Formata o valor de um elemento <input> do tipo monetary para exibição
// Recebe o elemento e substitui o valor exibido pela versão formatada
function formatInputMonetaryElement(el){
  if(!el) return;
  const val = parseMonetary(el.value);
  el.value = formatCurrency(val);
}

// Inicializa listeners em inputs com classe 'monetary' para:
// - formatar ao perder foco (blur)
// - desserializar ao focar para facilitar edição
// - evitar dupla vinculação usando data attribute
function initMonetaryInputs(){
  const els = document.querySelectorAll('input.monetary');
  els.forEach(el=>{
  // evita dupla vinculação de listeners
    if(el.dataset.monetaryInit === '1') return;
    // format on blur
    el.addEventListener('blur', ()=> formatInputMonetaryElement(el));
    // on focus, unformat to plain numeric for easier editing
    el.addEventListener('focus', ()=>{
      const v = parseMonetary(el.value);
      el.value = v ? v.toFixed(2).replace('.',',') : '';
    });
    // format initial value
    formatInputMonetaryElement(el);
    // if this is a 'valor padrão' field, update proporções ao formatar
    if (el.classList.contains('rubrica-valorpadrao')) {
      // atualiza ao perder o foco (format) e também ao digitar (input) para reflexo imediato
      el.addEventListener('blur', ()=> atualizarProporcoesRubricas());
      el.addEventListener('input', ()=> atualizarProporcoesRubricas());
    }
    el.dataset.monetaryInit = '1';
  });
}

  // Executa inicialização dos inputs monetários logo após o DOM estar pronto
  window.setTimeout(initMonetaryInputs, 30);

// ======================== Navegação ========================
const pages = {
  main:document.getElementById('mainPage'),
  tipoCalculo:document.getElementById('tipoCalculoPage'),
  aposentadoriaOpcoes:document.getElementById('aposentadoriaOpcoesPage'),
  aposentadoria:document.getElementById('aposentadoriaArea'),
  calculoFerias:document.getElementById('calculoFeriasArea'),
  pensao:document.getElementById('pensaoArea'),
  textos:document.getElementById('textosPage'),
  legislacao:document.getElementById('legislacaoPage'),
  acumuloBeneficios:document.getElementById('acumuloBeneficiosArea'),
  reposicaoErario:document.getElementById('reposicaoErarioArea')
};

// Oculta todas as 'páginas' da SPA adicionando a classe 'hidden'
const hideAll=()=>{for(const p in pages) pages[p].classList.add('hidden');};

// Função de navegação: oculta todas as páginas e exibe a solicitada
// Parâmetros: pageKey (chave no objeto pages), pushState (atualiza history por padrão)
function navegarPara(pageKey, pushState=true){
  try{
    if(!pages[pageKey]){
      console.warn(`navegarPara: página '${pageKey}' não encontrada`);
      return;
    }
    hideAll();
    pages[pageKey].classList.remove('hidden');
    // Atualiza histórico (opcional)
    if(pushState){
      const url = `#${pageKey}`;
      try{ history.pushState({page:pageKey}, '', url); }catch(e){/* ignorar se proibido */}
    }
      // rolar para o topo da página para garantir visibilidade
    window.scrollTo({top:0,behavior:'smooth'});
  }catch(err){
    console.error('Erro em navegarPara:', err);
  }
}

// Sincroniza navegação com History API: quando usuário clicar em voltar/avançar
// Se não houver state, usa o hash da URL como fallback
window.addEventListener('popstate', (ev)=>{
  try{
    const state = ev.state;
    if(state && state.page){
      navegarPara(state.page, false);
    } else {
      // fallback: usa hash se presente
      const hash = window.location.hash.replace('#','');
      if(hash && pages[hash]){
        navegarPara(hash, false);
      } else {
        // sem estado, mostra a página principal
        navegarPara('main', false);
      }
    }
  }catch(err){
    console.error('Erro em popstate handler:', err);
  }
});

// Vinculação dos botões principais da interface para navegação
document.getElementById('btnCalculos').onclick = () => { navegarPara('tipoCalculo'); };
document.getElementById('btnTextos').onclick = () => { navegarPara('textos'); };
document.getElementById('btnLegislacao').onclick = () => { navegarPara('legislacao'); };
document.getElementById('btnTipoAposentadoria').onclick = () => { navegarPara('aposentadoriaOpcoes'); };
document.getElementById('btnTipoPensao').onclick = () => { navegarPara('pensao'); };
document.getElementById('btnAcumuloBeneficios').onclick = () => { navegarPara('acumuloBeneficios'); };
document.getElementById('btnReposicaoErario').onclick = () => { navegarPara('reposicaoErario'); };
document.getElementById('btnBackTipoCalculo').onclick = () => { navegarPara('main'); };
document.getElementById('btnAcertosFinanceiros').onclick = () => { navegarPara('aposentadoria'); };
document.getElementById('btnCalculoFerias').onclick = () => { navegarPara('calculoFerias'); };
document.getElementById('btnBackAposentadoriaOpcoes').onclick = () => { navegarPara('tipoCalculo'); };
document.getElementById('btnBackAposentadoriaForm').onclick = () => { navegarPara('aposentadoriaOpcoes'); };
document.getElementById('btnBackCalculoFerias').onclick = () => { navegarPara('aposentadoriaOpcoes'); };
document.getElementById('btnBackPensao').onclick = () => { navegarPara('tipoCalculo'); };
document.getElementById('btnBackTextos').onclick = () => { navegarPara('main'); };
document.getElementById('btnBackLeg').onclick = () => { navegarPara('main'); };
document.getElementById('btnBackAcumuloBeneficios').onclick = () => { navegarPara('tipoCalculo'); };
document.getElementById('btnBackReposicaoErario').onclick = () => { navegarPara('tipoCalculo'); };

// Navegação dentro da seção 'Reposição ao Erário' — mostra/oculta subáreas
document.getElementById('btnBackReposicaoErario').onclick = () => { navegarPara('tipoCalculo'); };
document.getElementById('btnPosObito').onclick = () => {
  // Exibe a área de Pós-óbito e esconde as outras
  document.getElementById('posObitoArea').classList.remove('hidden');
  document.getElementById('saudeSuplementarArea').classList.add('hidden');
  document.getElementById('acumuloErarioArea').classList.add('hidden');
};
document.getElementById('btnSaudeSuplementar').onclick = () => {
  // Exibe a área de Saúde Suplementar
  document.getElementById('saudeSuplementarArea').classList.remove('hidden');
  document.getElementById('posObitoArea').classList.add('hidden');
  document.getElementById('acumuloErarioArea').classList.add('hidden');
};
document.getElementById('btnAcumuloBeneficiosErario').onclick = () => {
  // Exibe a área de Acúmulo de Benefícios
  document.getElementById('acumuloErarioArea').classList.remove('hidden');
  document.getElementById('posObitoArea').classList.add('hidden');
  document.getElementById('saudeSuplementarArea').classList.add('hidden');
};

// ======================== Rubricas - Acertos Financeiros ====================
// Função auxiliar: busca na tabela `vencimentosBasicos` o valor correspondente
// Parâmetros: cargo (string), classe (string), padrao (string), jornada ('40h'|'30h')
// Retorna o valor numérico do vencimento ou string vazia se não encontrado
function buscarVencimentoBasico(cargo, classe, padrao, jornada) {
  const item = vencimentosBasicos.find(e =>
    e.cargo === cargo &&
    e.classe === classe &&
    e.padrao === padrao &&
    (jornada === "40h" || jornada === "30h")
  );
  if(!item) return "";
  return (jornada==="40h"?item.h40:item.h30);
}
// Aplica imediatamente a regra que força, para cada código em codes[] (ex: ['00136','00951']),
// que apenas 1 linha mantenha proporcionalidade e as demais fiquem Ativo=0 e Ajuste=-ValorPadrão.
// Usamos isso para refletir a mudança assim que o usuário inserir/selecionar a segunda rubrica.
function aplicarRegraAuximediata(codes) {
  try {
    codes.forEach(codeToHandle => {
      try {
        const auxRows = [];
        document.querySelectorAll('#tabelaRubricas tbody tr').forEach(tr => {
          try {
            const codigo = (tr.querySelector('.rubrica-codigo')?.value) || (tr.querySelector('.rubrica-codigo-sel')?.value) || '';
            if (codigo === codeToHandle) auxRows.push(tr);
          } catch(e) {}
        });
        if (auxRows.length < 2) return;
        // escolhe o primeiro não-manual como keeper, senão o primeiro
        let keeper = null;
        for (let i = 0; i < auxRows.length; i++) {
          const tr = auxRows[i];
          if (!tr.dataset || tr.dataset.valoresManuais !== '1') { keeper = tr; break; }
        }
        if (!keeper) keeper = auxRows[0];
        auxRows.forEach(tr => {
          try {
            if (tr === keeper) return;
            const inpValorPad = tr.querySelector('.rubrica-valorpadrao');
            const inpAt = tr.querySelector('.rubrica-ativo');
            const inpIn = tr.querySelector('.rubrica-inativo');
            const inpAjuste = tr.querySelector('.rubrica-ajuste');
            const valorPad = parseMonetary(inpValorPad?.value) || 0;
            if (inpAt) inpAt.value = formatCurrency(0);
            if (inpIn) inpIn.value = formatCurrency(0);
            if (inpAjuste) {
              const forced = valorPad === 0 ? 0 : -Math.abs(valorPad);
              inpAjuste.value = formatCurrency(forced);
              inpAjuste.style.color = (forced < 0) ? 'red' : '';
            }
          } catch(e) {}
        });
      } catch(e) {}
    });
  } catch(e) {}
}
// Cria dinamicamente uma linha na tabela de rubricas com inputs/selects
// valorCodigo (opcional): pré-preenche o código da rubrica
function criarLinhaRubrica(valorCodigo='') {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>
      <select class="rubrica-codigo-sel" style="width:105px;">
        <option value="">--Selecione--</option>
        <option value="00001">00001 - Vencimento Básico</option>
        <option value="00013">00013 - Anuênio</option>
        <option value="00591">00591 - GAE - GRATIF.ATIV.EXERC</option>
        <option value="82286">82286 - GDASS - LEI 10855/2004</option>
  <option value="00053">00053 - Adic. de Insalubridade</option>
  <option value="00136">00136 - Aux. Alimentação</option>
        <option value="00951">00951 - Aux. Transporte</option>
        <option value="82273">82273 - Abono Permanência</option>
        <option value="OUTRA">Outra...</option>
      </select>
      <input style="width:90px; margin-top:4px;" class="rubrica-codigo" ${valorCodigo ? `value="${valorCodigo}"` : ""} placeholder="Código" autocomplete="off">
    </td>
  <td><input style="width:140px" class="rubrica-denom"></td>
  <td><input style="width:80px" class="rubrica-valorpadrao monetary" type="text" placeholder="0,00"></td>
    <td>
      <select class="rubrica-aplicaem">
        <option value="Ambos">Ambos</option>
        <option value="Ativo">Ativo</option>
        <option value="Inativo">Inativo</option>
      </select>
    </td>
    <td>
      <select class="rubrica-incidepss">
        <option>Sim</option>
        <option selected>Não</option>
      </select>
    </td>
  <td><input style="width:80px" class="rubrica-ativo monetary" type="text" placeholder="0,00"></td>
  <td><input style="width:80px" class="rubrica-inativo monetary" type="text" placeholder="0,00"></td>
  <td><input style="width:80px" class="rubrica-ajuste monetary" type="text" placeholder="0,00"></td>
    <td><button class="removerRubrica" title="Remover linha">🗑️</button></td>
  `;

  const sel = tr.querySelector('.rubrica-codigo-sel');
  const input = tr.querySelector('.rubrica-codigo');

  // Se um código inicial foi passado, ajuste o select para corresponder
  if (valorCodigo) {
    if (rubricasOpcoes.includes(valorCodigo)) {
      sel.value = valorCodigo;
      input.value = valorCodigo;
    } else {
      sel.value = 'OUTRA';
      input.value = valorCodigo;
    }
  }

  // Quando usuário escolher uma opção no select, atualiza o input de código
  sel.addEventListener('change', function() {
    if (sel.value === "OUTRA") {
      input.value = "";
      input.focus();
    } else {
      input.value = sel.value;
      atualizarRubricaAuto();
    }
    // Aplica regra imediata caso seja Aux. Alimentação ou Aux. Transporte
    try { aplicarRegraAuximediata(['00136','00951']); } catch(e) {}
  });
  // Quando o usuário digitar no input de código, ajusta o select se reconhecido
  input.addEventListener('input', function() {
    if (rubricasOpcoes.includes(input.value)) {
      sel.value = input.value;
    } else {
      sel.value = "OUTRA";
    }
    atualizarRubricaAuto();
    try { aplicarRegraAuximediata(['00136','00951']); } catch(e) {}
  });

  // Quando o select "Aplica em" for alterado, recalcula as proporções para a linha
  const selAplicaLinha = tr.querySelector('.rubrica-aplicaem');
  if (selAplicaLinha) {
    selAplicaLinha.addEventListener('change', function(e) {
      // marca como alteração manual apenas se o evento for do usuário (isTrusted)
      try { if (e && e.isTrusted) tr.dataset.aplicaManual = '1'; } catch(err) {}
      atualizarProporcoesRubricas();
    });
  }
  // Quando o select 'Incide PSS' mudar, atualiza o Abono e recalcula proporções
  const incideSelectLine = tr.querySelector('.rubrica-incidepss');
  if (incideSelectLine) {
    incideSelectLine.addEventListener('change', function(e){
      try { if (e && e.isTrusted) {} } catch(err) {}
      // ao mudar 'Incide PSS' primeiro recalcule proporções (preenche Ativo/Inativo)
      // e só depois atualiza o valor-padrão do Abono para que use as partes atualizadas
      if (typeof atualizarProporcoesRubricas === 'function') atualizarProporcoesRubricas();
      if (typeof atualizarValorPadraoAbono === 'function') atualizarValorPadraoAbono();
    });
  }

  // Marca quando o usuário editar manualmente o campo 'Valor padrão' para evitar sobrescrita automática
  const inpValorPadraoLinha = tr.querySelector('.rubrica-valorpadrao');
  if (inpValorPadraoLinha) {
    inpValorPadraoLinha.addEventListener('input', function(e){
      try{ if (e && e.isTrusted) tr.dataset.valorPadraoManual = '1'; } catch(err){}
      try { aplicarRegraAuximediata(['00136','00951']); } catch(e) {}
    });
  }

  // Atualiza denominação e valor padrão automaticamente com base no código
  function atualizarRubricaAuto() {
    const codigo = input.value;
    // Denominação automática quando o código estiver no mapeamento
    if (rubricasAuto[codigo]) {
      tr.querySelector('.rubrica-denom').value = rubricasAuto[codigo];
    } else {
      tr.querySelector('.rubrica-denom').value = "";
    }
    // Valor padrão: para código 00001 (vencimento básico) ou 00591 (GAE)
    if (codigo === "00001") {
      const cargo = document.getElementById('cargoApos').value;
      const classe = document.getElementById('classeApos').value;
      const padrao = document.getElementById('padraoApos').value;
      const jornada = document.getElementById('jornadaApos').value;
      const val = buscarVencimentoBasico(cargo, classe, padrao, jornada);
      tr.querySelector('.rubrica-valorpadrao').value = val !== "" ? formatCurrency(val) : "";
    } else if (codigo === "00591") {
      // Para GAE o valor padrão é 160% do vencimento básico (exemplo do sistema)
      const cargo = document.getElementById('cargoApos').value;
      const classe = document.getElementById('classeApos').value;
      const padrao = document.getElementById('padraoApos').value;
      const jornada = document.getElementById('jornadaApos').value;
      const valBase = buscarVencimentoBasico(cargo, classe, padrao, jornada);
      tr.querySelector('.rubrica-valorpadrao').value = valBase !== "" ? formatCurrency(valBase * 1.6) : "";
    } else if (codigo === "82286") {
      // GDASS: calcula o valor padrão como (valor por ponto) * pontos informados em GDASS - Ativo
      const cargo = document.getElementById('cargoApos').value;
      const classe = document.getElementById('classeApos').value;
      const padrao = document.getElementById('padraoApos').value;
      const jornada = document.getElementById('jornadaApos').value;
  const ponto = buscarGDASSPorPonto(cargo, classe, padrao, jornada);
  const qtdAtivo = Number(document.getElementById('gdassApos')?.value) || 0;
  const val = (ponto !== "" && qtdAtivo > 0) ? (ponto * qtdAtivo) : "";
      tr.querySelector('.rubrica-valorpadrao').value = val !== "" ? formatCurrency(val) : "";
    } else if (codigo === "00136") {
      // Auxílio Alimentação: valor padrão fixo R$ 1.000,00
      tr.querySelector('.rubrica-valorpadrao').value = formatCurrency(1000);
    } else {
      // Se não for automático, deixa em branco para o usuário preencher
      tr.querySelector('.rubrica-valorpadrao').value = "";
    }
    // Ajusta o campo 'Incide PSS' para determinadas rubricas
    const incideSelect = tr.querySelector('.rubrica-incidepss');
    if (incideSelect) {
      // Rubricas que nunca incidem
      if (codigo === '00136' || codigo === '00951' || codigo === '82273') {
        incideSelect.value = 'Não';
      // Rubricas que sempre devem incidir por regra: Vencimento básico, Anuênio, GAE, GDASS, Adic. Insalubridade
      } else if (codigo === '00001' || codigo === '00013' || codigo === '00591' || codigo === '82286' || codigo === '00053') {
        incideSelect.value = 'Sim';
      } else {
        // padrão: Sim quando vazio
        incideSelect.value = incideSelect.value || 'Sim';
      }
    }
    // Força o campo 'Aplica em' para algumas rubricas aparecer sempre como 'Ativo'
    const selAplicaLinha = tr.querySelector('.rubrica-aplicaem');
    if (selAplicaLinha) {
      if (codigo === '00136' || codigo === '00951' || codigo === '82273') {
        selAplicaLinha.value = 'Ativo';
        // desabilita para evitar alteração manual, já que deve aparecer sempre Ativo
        selAplicaLinha.disabled = true;
      } else {
        // garante que esteja habilitado caso o código mude para outro
        selAplicaLinha.disabled = false;
      }
    }
  }

  // Depois de atualizar denominação/valor, recalcula proporções (caso data já esteja definida)
  // Chamamos via timeout para garantir que o valor padrao esteja no DOM e formatado
  setTimeout(()=> atualizarProporcoesRubricas(), 10);

  // Atualiza automaticamente todas as linhas da tabela quando parâmetros de vencimento mudam
  ['cargoApos','classeApos','padraoApos','jornadaApos','gdassApos','gdassInativoApos'].forEach(id=>{
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('change',()=>{
      document.querySelectorAll('#tabelaRubricas tbody tr').forEach(linha=>{
        const codigo = linha.querySelector('.rubrica-codigo').value;
        // Atualiza denominação
        linha.querySelector('.rubrica-denom').value = rubricasAuto[codigo] || "";
        // Ajusta o campo 'Incide PSS' também aqui para manter consistência ao atualizar em massa
        try{
          const incSel = linha.querySelector('.rubrica-incidepss');
          if (incSel) {
            if (codigo === '00136' || codigo === '00951' || codigo === '82273') {
              incSel.value = 'Não';
            } else if (codigo === '00001' || codigo === '00013' || codigo === '00591' || codigo === '82286' || codigo === '00053') {
              incSel.value = 'Sim';
            } else {
              incSel.value = incSel.value || 'Sim';
            }
          }
        }catch(e){}
        // Atualiza valor padrão
  // Não sobrescreve se o usuário editou manualmente o valor-padrão desta linha
  if (linha.dataset && linha.dataset.valorPadraoManual === '1') return;
        if (codigo === "00001") {
          const cargo = document.getElementById('cargoApos').value;
          const classe = document.getElementById('classeApos').value;
          const padrao = document.getElementById('padraoApos').value;
          const jornada = document.getElementById('jornadaApos').value;
          const val = buscarVencimentoBasico(cargo, classe, padrao, jornada);
          linha.querySelector('.rubrica-valorpadrao').value = val !== "" ? formatCurrency(val) : "";
        } else if (codigo === "00591") {
          const cargo = document.getElementById('cargoApos').value;
          const classe = document.getElementById('classeApos').value;
          const padrao = document.getElementById('padraoApos').value;
          const jornada = document.getElementById('jornadaApos').value;
          const valBase = buscarVencimentoBasico(cargo, classe, padrao, jornada);
          linha.querySelector('.rubrica-valorpadrao').value = valBase !== "" ? formatCurrency(valBase * 1.6) : "";
        } else if (codigo === "82286") {
          // recalcula GDASS com base em pontos informados
          const cargo = document.getElementById('cargoApos').value;
          const classe = document.getElementById('classeApos').value;
          const padrao = document.getElementById('padraoApos').value;
          const jornada = document.getElementById('jornadaApos').value;
          const ponto = buscarGDASSPorPonto(cargo, classe, padrao, jornada);
          const qtdAtivo = Number(document.getElementById('gdassApos')?.value) || 0;
          const val = (ponto !== "" && qtdAtivo > 0) ? (ponto * qtdAtivo) : "";
          linha.querySelector('.rubrica-valorpadrao').value = val !== "" ? formatCurrency(val) : "";
        } else if (codigo === "00136") {
          // Auxílio Alimentação: valor padrão fixo R$ 1.000,00
          linha.querySelector('.rubrica-valorpadrao').value = formatCurrency(1000);
        } else {
          linha.querySelector('.rubrica-valorpadrao').value = "";
        }
      });
      // Após atualizar valores-padrão, recalcula as proporções (Ativo/Inativo/Ajuste)
      if (typeof atualizarProporcoesRubricas === 'function') atualizarProporcoesRubricas();
    });
  });

  tr.querySelector('.removerRubrica').onclick = function() {
    tr.remove();
  };

  // Ao editar manualmente Ativo/Inativo, atualiza o Abono
  const inpAt = tr.querySelector('.rubrica-ativo');
  const inpIn = tr.querySelector('.rubrica-inativo');
  if (inpAt) {
    // marca edição manual ao digitar e atualiza Abono ao sair do campo
    inpAt.addEventListener('input', ()=>{ try{ tr.dataset.valoresManuais = '1'; } catch(e){} });
    inpAt.addEventListener('blur', ()=>{ if (typeof atualizarValorPadraoAbono === 'function') atualizarValorPadraoAbono(); });
  }
  if (inpIn) {
    inpIn.addEventListener('input', ()=>{ try{ tr.dataset.valoresManuais = '1'; } catch(e){} });
    inpIn.addEventListener('blur', ()=>{ if (typeof atualizarValorPadraoAbono === 'function') atualizarValorPadraoAbono(); });
  }
  // Ajuste também pode ser preenchido manualmente
  const inpAjusteManual = tr.querySelector('.rubrica-ajuste');
  if (inpAjusteManual) {
    inpAjusteManual.addEventListener('input', ()=>{ try{ tr.dataset.valoresManuais = '1'; } catch(e){} });
  }

  atualizarRubricaAuto();
  return tr;
}
document.getElementById('adicionarRubrica').onclick = function() {
  const row = criarLinhaRubrica();
  // marca como recém-criada para que a lógica use o valor atual do select 'Aplica em' ao calcular
  row.dataset.nova = '1';
  document.querySelector('#tabelaRubricas tbody').appendChild(row);
  // initialize monetary formatting for inputs in the new row
  initMonetaryInputs();
  // Ao adicionar uma rubrica manual, recalcula imediatamente as proporções
  // para preencher Ativo/Inativo/Ajuste com base no select 'Aplica em' e data de aposentadoria
  if (typeof atualizarProporcoesRubricas === 'function') atualizarProporcoesRubricas();
  // Atualiza o Abono caso a nova rubrica influencie a base
  if (typeof atualizarValorPadraoAbono === 'function') atualizarValorPadraoAbono();
  // Garante aplicação imediata da regra para Aux. Alimentação/Transporte
  try { aplicarRegraAuximediata(['00136','00951']); } catch(e) {}
};
// Botão Reiniciar: remove flags manuais e recalcula tudo (restaura comportamento automático)
const reiniciarBtn = document.getElementById('reiniciarCalculo');
if (reiniciarBtn) {
  reiniciarBtn.onclick = function() {
    // Limpa completamente o formulário e reinicia o cálculo como novo (zera tela)
    try { document.getElementById('resultado').textContent = 'Preencha os dados e faça o download.'; } catch(e) {}
    // limpa campos principais do formulário
    ['cargoApos','classeApos','padraoApos','jornadaApos','gdassApos','gdassInativoApos','dataAposentadoriaApos','fundamentacaoApos'].forEach(id=>{
      try{ const el = document.getElementById(id); if(el) { if(el.tagName === 'SELECT' || el.tagName === 'INPUT') el.value = ''; } }catch(e){}
    });
    // remove todas as linhas atuais
    try {
      const tbody = document.querySelector('#tabelaRubricas tbody');
      if (tbody) tbody.innerHTML = '';
      // recria as linhas padrão na mesma ordem usada na inicialização
      const defaultOrder = ['00001','00013','00591','82286','00053','00136','00951','82273'];
      defaultOrder.forEach(code => {
        const row = criarLinhaRubrica(code);
        if (tbody) tbody.appendChild(row);
      });
      // re-inicializa máscaras/formatadores e recalcula
      if (typeof initMonetaryInputs === 'function') initMonetaryInputs();
      if (typeof atualizarAplicaEmRubricas === 'function') atualizarAplicaEmRubricas();
  // garante ordem: atualiza proporções (preenche Ativo/Inativo) e depois recalcula Abono
  if (typeof atualizarProporcoesRubricas === 'function') atualizarProporcoesRubricas();
  if (typeof atualizarValorPadraoAbono === 'function') atualizarValorPadraoAbono();
    } catch(e) { console.error('Erro ao reiniciar calculo', e); }
  };
}
const tbodyRubricas = document.querySelector('#tabelaRubricas tbody');
if (tbodyRubricas.children.length === 0) {
  // Ordem explícita solicitada pelo usuário:
  // Vencimento Básico, Anuênio, GAE, GDASS, Aux. Alimentação, Aux. Transporte, Abono
  const defaultOrder = ['00001','00013','00591','82286','00053','00136','00951','82273'];
  defaultOrder.forEach(code => {
    const row = criarLinhaRubrica(code);
    tbodyRubricas.appendChild(row);
  });
  initMonetaryInputs();
  // Ajusta o campo "Aplica em" conforme a fundamentação atual (Média -> Ativo, Paridade -> Ambos)
  if (typeof atualizarAplicaEmRubricas === 'function') atualizarAplicaEmRubricas();
}

// Recalcula os valores ativos/inativos das rubricas com base na data de aposentadoria
// Regra (assumida): dias antes do dia da aposentadoria -> ativo; dia da aposentadoria e depois -> inativo
// Se não houver data informada, considera tudo como ativo (inativo = 0).
function atualizarProporcoesRubricas() {
  // Auxiliar: conta dias úteis (segunda a sexta) num mês e até um dia anterior
  function countBusinessDaysInMonth(year, month) {
    // month: 1-12
    const days = new Date(year, month, 0).getDate();
    let cnt = 0;
    for (let d = 1; d <= days; d++) {
      const dayOfWeek = new Date(year, month - 1, d).getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) cnt++;
    }
    return cnt;
  }
  function countBusinessDaysBefore(year, month, day) {
    // conta dias úteis de 1 até day-1
    if (!day || day <= 1) return 0;
    let cnt = 0;
    for (let d = 1; d <= day - 1; d++) {
      const dayOfWeek = new Date(year, month - 1, d).getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) cnt++;
    }
    return cnt;
  }
  const dateStr = document.getElementById('dataAposentadoriaApos')?.value;
  const fundamentacao = document.getElementById('fundamentacaoApos')?.value || '';
  const tbody = document.querySelectorAll('#tabelaRubricas tbody tr');
  tbody.forEach(tr => {
    const inpValor = tr.querySelector('.rubrica-valorpadrao');
    const inpAtivo = tr.querySelector('.rubrica-ativo');
    const inpInativo = tr.querySelector('.rubrica-inativo');
    if(!inpValor || !inpAtivo || !inpInativo) return;
    const rawValorPadEarly = inpValor.value ? inpValor.value.toString().trim() : '';
    const valor = parseMonetary(inpValor.value);
    // Se o valor padrão estiver vazio ou numericamente zero, já força Ajuste = 0 e pula a lógica desta linha
    try {
      const inpAjusteEarly = tr.querySelector('.rubrica-ajuste');
      if (inpAjusteEarly && (!rawValorPadEarly || valor === 0)) {
        // forza Ativo, Inativo e Ajuste para zero quando Valor Padrão está vazio ou é numeric 0
        try { if (inpAtivo) inpAtivo.value = formatCurrency(0); } catch(e){}
        try { if (inpInativo) inpInativo.value = formatCurrency(0); } catch(e){}
        inpAjusteEarly.value = formatCurrency(0);
        inpAjusteEarly.style.color = '';
        // remove marca 'nova' se existia e passa para a próxima linha
        if (tr.dataset.nova) delete tr.dataset.nova;
        return;
      }
    } catch (e) { /* ignore and continue */ }
  // Se o usuário editou manualmente os campos Ativo/Inativo/Ajuste desta linha, preservamos esses valores
  try { if (tr.dataset && tr.dataset.valoresManuais === '1') return; } catch(e) {}
    const codigoLinha = (tr.querySelector('.rubrica-codigo')?.value) || (tr.querySelector('.rubrica-codigo-sel')?.value) || '';
    // Respeita mudança manual do select 'Aplica em': se o usuário alterou, o 'aplica' prevalece sobre a fundamentação
    const selAplicaRow = tr.querySelector('.rubrica-aplicaem');
    const isManualAplica = !!tr.dataset.aplicaManual;
    const aplicaRowValue = selAplicaRow ? (selAplicaRow.value || '') : '';

  // Se fundamentação for "Média" e NÃO foi alterado manualmente e a linha não é nova, inativo fica 0; ativo mantém proporcionalidade pela data
  if (fundamentacao === 'Média' && !isManualAplica && !tr.dataset.nova) {
      if (codigoLinha === '82286') {
  // Caso especial GDASS: baseAtivo = ponto * gdassApos ; baseInativo = ponto * gdassInativoApos
        const cargo = document.getElementById('cargoApos').value;
        const classe = document.getElementById('classeApos').value;
        const padrao = document.getElementById('padraoApos').value;
        const jornada = document.getElementById('jornadaApos').value;
        const ponto = buscarGDASSPorPonto(cargo, classe, padrao, jornada) || 0;
        const qtdAtivo = Number(document.getElementById('gdassApos')?.value) || 0;
        const qtdInativo = Number(document.getElementById('gdassInativoApos')?.value) || 0;
        const baseAtivo = ponto * qtdAtivo;
        const baseInativo = ponto * qtdInativo;
        // Sem data: Ativo = baseAtivo, Inativo = 0 (Média zera inativo)
        if(!dateStr) {
          inpAtivo.value = baseAtivo ? formatCurrency(baseAtivo) : '';
          inpInativo.value = formatCurrency(0);
          const inpAjusteNoDate = tr.querySelector('.rubrica-ajuste');
          if (inpAjusteNoDate) {
            const numericAtivoNoDate = parseMonetary(inpAtivo.value) || 0;
            const numericInativoNoDate = parseMonetary(inpInativo.value) || 0;
            let ajusteValNoDate = numericAtivoNoDate - baseAtivo + numericInativoNoDate;
            ajusteValNoDate = normalizeAjuste(ajusteValNoDate);
            // Se o Valor Padrão (ou baseAtivo no caso do GDASS) for 0, força Ajuste = 0
            if (valor === 0 || baseAtivo === 0) {
              inpAjusteNoDate.value = formatCurrency(0);
              inpAjusteNoDate.style.color = '';
            } else if (numericInativoNoDate > numericAtivoNoDate) {
              ajusteValNoDate = Math.abs(ajusteValNoDate);
              inpAjusteNoDate.value = isNaN(ajusteValNoDate) ? '' : formatCurrency(ajusteValNoDate);
              inpAjusteNoDate.style.color = '';
            } else {
              inpAjusteNoDate.value = isNaN(ajusteValNoDate) ? '' : formatCurrency(ajusteValNoDate);
              inpAjusteNoDate.style.color = (ajusteValNoDate < 0) ? 'red' : '';
            }
          }
          return;
        }
      }
      if(!valor) {
        inpAtivo.value = '';
        inpInativo.value = formatCurrency(0);
        return;
      }
      // Se não houver data, tudo fica em ativo
  if(!dateStr) {
        inpAtivo.value = formatCurrency(valor);
        inpInativo.value = formatCurrency(0);
        // Ajuste = Ativo - Valor Padrão + Inativo (no-date inativo = 0)
        const inpAjusteNoDate = tr.querySelector('.rubrica-ajuste');
        if (inpAjusteNoDate) {
          const numericAtivoNoDate = parseMonetary(inpAtivo.value) || 0;
          const numericInativoNoDate = parseMonetary(inpInativo.value) || 0;
          let ajusteValNoDate = numericAtivoNoDate - valor + numericInativoNoDate;
          ajusteValNoDate = normalizeAjuste(ajusteValNoDate);
          if (numericInativoNoDate > numericAtivoNoDate) {
            ajusteValNoDate = Math.abs(ajusteValNoDate);
            inpAjusteNoDate.value = isNaN(ajusteValNoDate) ? '' : formatCurrency(ajusteValNoDate);
            inpAjusteNoDate.style.color = '';
          } else {
            inpAjusteNoDate.value = isNaN(ajusteValNoDate) ? '' : formatCurrency(ajusteValNoDate);
            inpAjusteNoDate.style.color = (ajusteValNoDate < 0) ? 'red' : '';
          }
        }
        return;
      }
      // com data: calcula proporcionalidade. Para Aux. Transporte (00951) usa-se dias úteis do mês
      const partsM = dateStr.split('-').map(s => Number(s));
      if(partsM.length !== 3) {
        inpAtivo.value = formatCurrency(valor);
        inpInativo.value = formatCurrency(0);
        return;
      }
      const anoM = partsM[0], mesM = partsM[1], diaM = partsM[2];
      if(isNaN(anoM) || isNaN(mesM) || isNaN(diaM)) {
        inpAtivo.value = formatCurrency(valor);
        inpInativo.value = formatCurrency(0);
        return;
      }
      // Se for Aux. Transporte ou Aux. Alimentação, calculamos proporcional por dias úteis
      if (codigoLinha === '00951' || codigoLinha === '00136') {
        const totalBiz = countBusinessDaysInMonth(anoM, mesM);
        const bizBefore = countBusinessDaysBefore(anoM, mesM, diaM);
        const valorAtivoM = totalBiz > 0 ? (valor * (bizBefore / totalBiz)) : 0;
        inpAtivo.value = valorAtivoM ? formatCurrency(valorAtivoM) : '';
        // Para MÉDIA a regra anterior determinou Inativo = 0
        inpInativo.value = formatCurrency(0);
        const inpAjuste = tr.querySelector('.rubrica-ajuste');
        if (inpAjuste) {
          const numericAtivoM = parseMonetary(inpAtivo.value) || 0;
          const numericInativoM = parseMonetary(inpInativo.value) || 0;
          const rawValorPad = inpValor.value ? inpValor.value.toString().trim() : '';
          const rawAt = inpAtivo.value ? inpAtivo.value.toString().trim() : '';
          const rawIn = inpInativo.value ? inpInativo.value.toString().trim() : '';
          if (!rawValorPad || !rawAt || !rawIn) {
            inpAjuste.value = formatCurrency(0);
            inpAjuste.style.color = '';
          } else {
            let ajusteVal = numericAtivoM - valor + numericInativoM;
            ajusteVal = normalizeAjuste(ajusteVal);
            // Se o Valor Padrão for exatamente 0, forçamos Ajuste = 0
            if (valor === 0) {
              inpAjuste.value = formatCurrency(0);
              inpAjuste.style.color = '';
            } else if (numericInativoM > numericAtivoM) {
              ajusteVal = Math.abs(ajusteVal);
              inpAjuste.value = isNaN(ajusteVal) ? '' : formatCurrency(ajusteVal);
              inpAjuste.style.color = '';
            } else {
              inpAjuste.value = isNaN(ajusteVal) ? '' : formatCurrency(ajusteVal);
              inpAjuste.style.color = (ajusteVal < 0) ? 'red' : '';
            }
          }
        }
        return;
      }
      const diasNoMesM = new Date(anoM, mesM, 0).getDate();
      const diasAtivoM = Math.max(0, diaM - 1);
      const diasInativoM = Math.max(0, diasNoMesM - diasAtivoM);
  const valorAtivoM = valor * (diasAtivoM / diasNoMesM);
  const valorInativoM = valor * (diasInativoM / diasNoMesM);
  // Para MÉDIA o requisito anterior determina que Inativo seja zero
  inpAtivo.value = valorAtivoM ? formatCurrency(valorAtivoM) : '';
  inpInativo.value = formatCurrency(0);
      // Ajuste = Ativo - Valor Padrão + Inativo (Inativo está forçado para 0 no caso Média)
      const inpAjuste = tr.querySelector('.rubrica-ajuste');
      if (inpAjuste) {
        const numericAtivoM = parseMonetary(inpAtivo.value) || 0;
        const numericInativoM = parseMonetary(inpInativo.value) || 0;
  let ajusteVal = numericAtivoM - valor + numericInativoM;
  ajusteVal = normalizeAjuste(ajusteVal);
  // Se o Valor Padrão for exatamente 0, forçamos Ajuste = 0
  if (valor === 0) {
    inpAjuste.value = formatCurrency(0);
    inpAjuste.style.color = '';
  } else if (numericInativoM > numericAtivoM) {
    ajusteVal = Math.abs(ajusteVal);
    inpAjuste.value = isNaN(ajusteVal) ? '' : formatCurrency(ajusteVal);
    inpAjuste.style.color = '';
  } else {
    inpAjuste.value = isNaN(ajusteVal) ? '' : formatCurrency(ajusteVal);
    inpAjuste.style.color = (ajusteVal < 0) ? 'red' : '';
  }
      }
      return;
    }
    if(!dateStr) {
      // sem data: tudo para ativo (caso geral)
  // Caso especial GDASS: Ativo = ponto * gdassApos ; Inativo = ponto * gdassInativoApos
      if (codigoLinha === '82286') {
        const cargo = document.getElementById('cargoApos').value;
        const classe = document.getElementById('classeApos').value;
        const padrao = document.getElementById('padraoApos').value;
        const jornada = document.getElementById('jornadaApos').value;
        const ponto = buscarGDASSPorPonto(cargo, classe, padrao, jornada) || 0;
        const qtdAtivo = Number(document.getElementById('gdassApos')?.value) || 0;
        const qtdInativo = Number(document.getElementById('gdassInativoApos')?.value) || 0;
        const baseAtivo = ponto * qtdAtivo;
        const baseInativo = ponto * qtdInativo;
        inpAtivo.value = baseAtivo ? formatCurrency(baseAtivo) : '';
        inpInativo.value = baseInativo ? formatCurrency(baseInativo) : '';
      } else {
        inpAtivo.value = valor ? formatCurrency(valor) : '';
        inpInativo.value = '';
      }
      // Ajuste calculado por fórmula unificada: Ativo - Valor Padrão + Inativo
      const inpAjusteNoDateGen = tr.querySelector('.rubrica-ajuste');
      if (inpAjusteNoDateGen) {
        const numericAtivo = parseMonetary(inpAtivo.value) || 0;
        const numericInativo = parseMonetary(inpInativo.value) || 0;
  const rawValorPadGen = inpValor.value ? inpValor.value.toString().trim() : '';
  const rawAtGen = inpAtivo.value ? inpAtivo.value.toString().trim() : '';
  const rawInGen = inpInativo.value ? inpInativo.value.toString().trim() : '';
  if (!rawValorPadGen || !rawAtGen || !rawInGen) {
    inpAjusteNoDateGen.value = formatCurrency(0);
    inpAjusteNoDateGen.style.color = '';
  } else {
    let ajusteValGen = numericAtivo - valor + numericInativo;
    ajusteValGen = normalizeAjuste(ajusteValGen);
    // Se o Valor Padrão for exatamente 0, forza Ajuste = 0
    if (valor === 0) {
      inpAjusteNoDateGen.value = formatCurrency(0);
      inpAjusteNoDateGen.style.color = '';
    } else if (numericInativo > numericAtivo) {
      ajusteValGen = Math.abs(ajusteValGen);
      inpAjusteNoDateGen.value = isNaN(ajusteValGen) ? '' : formatCurrency(ajusteValGen);
      inpAjusteNoDateGen.style.color = '';
    } else {
      inpAjusteNoDateGen.value = isNaN(ajusteValGen) ? '' : formatCurrency(ajusteValGen);
      inpAjusteNoDateGen.style.color = (ajusteValGen < 0) ? 'red' : '';
    }
  }
      }
      return;
    }
    // parse YYYY-MM-DD
    const parts = dateStr.split('-').map(s => Number(s));
    if(parts.length !== 3) return;
    const ano = parts[0], mes = parts[1], dia = parts[2];
    if(isNaN(ano) || isNaN(mes) || isNaN(dia)) return;
    const diasNoMes = new Date(ano, mes, 0).getDate();
    // dias antes do dia da aposentadoria -> ativo (assumimos dia da aposentadoria pertence a inativo)
    const diasAtivo = Math.max(0, dia - 1);
    const diasInativo = Math.max(0, diasNoMes - diasAtivo);
    if(!valor) {
      inpAtivo.value = '';
      inpInativo.value = '';
      return;
    }
  // Divisão proporcional padrão do 'valor' em ativo/inativo
    let valorAtivo = (valor * (diasAtivo / diasNoMes));
    let valorInativo = (valor * (diasInativo / diasNoMes));

  // Caso especial para Aux. Transporte (00951) e Aux. Alimentação (00136): usar proporcionalidade por dias úteis
    if (codigoLinha === '00951' || codigoLinha === '00136') {
      const partsB = dateStr.split('-').map(s => Number(s));
      const anoB = partsB[0], mesB = partsB[1], diaB = partsB[2];
      const totalBiz = countBusinessDaysInMonth(anoB, mesB);
      const bizBefore = countBusinessDaysBefore(anoB, mesB, diaB);
      valorAtivo = totalBiz > 0 ? (valor * (bizBefore / totalBiz)) : 0;
      valorInativo = totalBiz > 0 ? (valor * ((totalBiz - bizBefore) / totalBiz)) : 0;
    }

  // Caso especial para GDASS: calcular partes proporcionais a partir das bases por ponto
    if (codigoLinha === '82286') {
      const cargo = document.getElementById('cargoApos').value;
      const classe = document.getElementById('classeApos').value;
      const padrao = document.getElementById('padraoApos').value;
      const jornada = document.getElementById('jornadaApos').value;
      const ponto = buscarGDASSPorPonto(cargo, classe, padrao, jornada) || 0;
      const qtdAtivo = Number(document.getElementById('gdassApos')?.value) || 0;
      const qtdInativo = Number(document.getElementById('gdassInativoApos')?.value) || 0;
      const baseAtivo = ponto * qtdAtivo;
      const baseInativo = ponto * qtdInativo;
      valorAtivo = baseAtivo * (diasAtivo / diasNoMes);
      valorInativo = baseInativo * (diasInativo / diasNoMes);
    }

    // Considera o campo "Aplica em" para decidir como distribuir os valores
    const selAplica = tr.querySelector('.rubrica-aplicaem');
    const aplica = selAplica ? (selAplica.value || '') : '';

    if (aplica === 'Ativo') {
      inpAtivo.value = valorAtivo ? formatCurrency(valorAtivo) : '';
      inpInativo.value = formatCurrency(0);
      const inpAjuste = tr.querySelector('.rubrica-ajuste');
      if (inpAjuste) {
        const numericAtivo = parseMonetary(inpAtivo.value) || 0;
        const numericInativo = parseMonetary(inpInativo.value) || 0;
  const rawValorPadLocal = inpValor.value ? inpValor.value.toString().trim() : '';
  const rawAtLocal = inpAtivo.value ? inpAtivo.value.toString().trim() : '';
  const rawInLocal = inpInativo.value ? inpInativo.value.toString().trim() : '';
  if (!rawValorPadLocal || !rawAtLocal || !rawInLocal) {
    inpAjuste.value = formatCurrency(0);
    inpAjuste.style.color = '';
  } else {
    let ajusteVal = numericAtivo - valor + numericInativo;
    ajusteVal = normalizeAjuste(ajusteVal);
    // Se o Valor Padrão for exatamente 0, forçamos Ajuste = 0
    if (valor === 0) {
      inpAjuste.value = formatCurrency(0);
      inpAjuste.style.color = '';
    } else if (numericInativo > numericAtivo) {
      ajusteVal = Math.abs(ajusteVal);
      inpAjuste.value = isNaN(ajusteVal) ? '' : formatCurrency(ajusteVal);
      inpAjuste.style.color = '';
    } else {
      inpAjuste.value = isNaN(ajusteVal) ? '' : formatCurrency(ajusteVal);
      inpAjuste.style.color = (ajusteVal < 0) ? 'red' : '';
    }
  }
      }
    } else if (aplica === 'Ambos') {
      inpAtivo.value = valorAtivo ? formatCurrency(valorAtivo) : '';
      inpInativo.value = valorInativo ? formatCurrency(valorInativo) : '';
      const inpAjuste = tr.querySelector('.rubrica-ajuste');
      if (inpAjuste) {
        const numericAtivo = parseMonetary(inpAtivo.value) || 0;
        const numericInativo = parseMonetary(inpInativo.value) || 0;
      let ajusteVal = numericAtivo - valor + numericInativo;
  ajusteVal = normalizeAjuste(ajusteVal);
  // Se o Valor Padrão for exatamente 0, forçamos Ajuste = 0
  if (valor === 0) {
    inpAjuste.value = formatCurrency(0);
    inpAjuste.style.color = '';
  } else if (numericInativo > numericAtivo) {
    ajusteVal = Math.abs(ajusteVal);
    inpAjuste.value = isNaN(ajusteVal) ? '' : formatCurrency(ajusteVal);
    inpAjuste.style.color = '';
  } else {
    inpAjuste.value = isNaN(ajusteVal) ? '' : formatCurrency(ajusteVal);
    inpAjuste.style.color = (ajusteVal < 0) ? 'red' : '';
  }
      }
    } else if (aplica === 'Inativo') {
      inpAtivo.value = formatCurrency(0);
      inpInativo.value = valorInativo ? formatCurrency(valorInativo) : '';
      // Ajuste calculado com base no que realmente foi aplicado (Inativo aqui)
      const inpAjusteIn = tr.querySelector('.rubrica-ajuste');
      if (inpAjusteIn) {
        // Ao aplicar somente em Inativo, exibimos o valor do Inativo como Ajuste
        const numericInativo = parseMonetary(inpInativo.value) || 0;
        inpAjusteIn.value = numericInativo ? formatCurrency(numericInativo) : formatCurrency(0);
        inpAjusteIn.style.color = '';
      }
    } else {
      // Valor padrão: distribui normalmente (ambos)
      inpAtivo.value = valorAtivo ? formatCurrency(valorAtivo) : '';
      inpInativo.value = valorInativo ? formatCurrency(valorInativo) : '';
      // Ajuste por padrão segue a lógica unificada: Ativo - Valor Padrão + Inativo
      const inpAjusteDef = tr.querySelector('.rubrica-ajuste');
      if (inpAjusteDef) {
        const numericAtivo = parseMonetary(inpAtivo.value) || 0;
        const numericInativo = parseMonetary(inpInativo.value) || 0;
  const rawValorPadDef = inpValor.value ? inpValor.value.toString().trim() : '';
  const rawAtDef = inpAtivo.value ? inpAtivo.value.toString().trim() : '';
  const rawInDef = inpInativo.value ? inpInativo.value.toString().trim() : '';
  if (!rawValorPadDef || !rawAtDef || !rawInDef) {
    inpAjusteDef.value = formatCurrency(0);
    inpAjusteDef.style.color = '';
  } else {
    let ajusteValDef = numericAtivo - valor + numericInativo;
    ajusteValDef = normalizeAjuste(ajusteValDef);
    // Se o Valor Padrão for exatamente 0, forçamos Ajuste = 0
    if (valor === 0) {
      inpAjusteDef.value = formatCurrency(0);
      inpAjusteDef.style.color = '';
    } else if (numericInativo > numericAtivo) {
      ajusteValDef = Math.abs(ajusteValDef);
      inpAjusteDef.value = isNaN(ajusteValDef) ? '' : formatCurrency(ajusteValDef);
      inpAjusteDef.style.color = '';
    } else {
      inpAjusteDef.value = isNaN(ajusteValDef) ? '' : formatCurrency(ajusteValDef);
      inpAjusteDef.style.color = (ajusteValDef < 0) ? 'red' : '';
    }
  }
      }
    }
    // Se a linha estava marcada como recém-criada, removemos a marca após o primeiro cálculo
    if (tr.dataset.nova) delete tr.dataset.nova;
  });
    // Regra adicional: para Aux. Transporte (00951) e Aux. Alimentação (00136),
    // aplica proporcionalidade somente à PRIMEIRA lançada (keeper) de cada tipo e as demais
    // ficam com Ativo = 0 e Ajuste = -ValorPadrão (ou 0 se ValorPadrão = 0).
    // Preferimos não alterar linhas com valores manuais (dataset.valoresManuais === '1').
    try {
      ['00951','00136'].forEach(codeToHandle => {
        try {
          const auxRows = [];
          document.querySelectorAll('#tabelaRubricas tbody tr').forEach(tr => {
            try {
              const codigo = (tr.querySelector('.rubrica-codigo')?.value) || (tr.querySelector('.rubrica-codigo-sel')?.value) || '';
              if (codigo === codeToHandle) auxRows.push(tr);
            } catch(e) {}
          });
          if (auxRows.length >= 2) {
            // escolhe a PRIMEIRA linha não manual (preserva a proporcionalidade nela);
            // se todas forem manuais, escolhe a primeira geral.
            let keeper = null;
            for (let i = 0; i < auxRows.length; i++) {
              const tr = auxRows[i];
              if (!tr.dataset || tr.dataset.valoresManuais !== '1') { keeper = tr; break; }
            }
            if (!keeper) keeper = auxRows[0];

            // Para cada aux deste tipo que NÃO for o keeper, forçamos Ativo = 0 e Ajuste = -ValorPadrão
            auxRows.forEach(tr => {
              try {
                if (tr === keeper) return; // mantém os valores calculados para o keeper
                const inpValorPad = tr.querySelector('.rubrica-valorpadrao');
                const inpAt = tr.querySelector('.rubrica-ativo');
                const inpIn = tr.querySelector('.rubrica-inativo');
                const inpAjuste = tr.querySelector('.rubrica-ajuste');
                const valorPad = parseMonetary(inpValorPad?.value) || 0;
                if (inpAt) inpAt.value = formatCurrency(0);
                if (inpIn) inpIn.value = formatCurrency(0);
                if (inpAjuste) {
                  const forced = valorPad === 0 ? 0 : -Math.abs(valorPad);
                  inpAjuste.value = formatCurrency(forced);
                  inpAjuste.style.color = (forced < 0) ? 'red' : '';
                }
              } catch(e) {}
            });
          }
        } catch(e) {}
      });
    } catch(e) { /* não interrompe a rotina se falhar */ }

  // Após recalcular proporções, atualiza o valor-padrão do Abono
  if (typeof atualizarValorPadraoAbono === 'function') atualizarValorPadraoAbono();
  // Recalcula o Ajuste especificamente para a rubrica Abono (82273)
  // para garantir que use o VALOR PADRÃO atualmente exibido no campo
  try{
    document.querySelectorAll('#tabelaRubricas tbody tr').forEach(tr=>{
      try{
        const codigoLinha = (tr.querySelector('.rubrica-codigo')?.value) || (tr.querySelector('.rubrica-codigo-sel')?.value) || '';
        if (codigoLinha !== '82273') return;
        const inpValor = tr.querySelector('.rubrica-valorpadrao');
        const inpAtivo = tr.querySelector('.rubrica-ativo');
        const inpInativo = tr.querySelector('.rubrica-inativo');
        const inpAjuste = tr.querySelector('.rubrica-ajuste');
        if(!inpValor || !inpAtivo || !inpInativo || !inpAjuste) return;
        const valorPad = parseMonetary(inpValor.value) || 0;
        const numericAtivo = parseMonetary(inpAtivo.value) || 0;
        const numericInativo = parseMonetary(inpInativo.value) || 0;
        const rawValorPad = inpValor.value ? inpValor.value.toString().trim() : '';
        const rawAt = inpAtivo.value ? inpAtivo.value.toString().trim() : '';
        const rawIn = inpInativo.value ? inpInativo.value.toString().trim() : '';
        if (!rawValorPad || !rawAt || !rawIn) {
          inpAjuste.value = formatCurrency(0);
          inpAjuste.style.color = '';
          } else {
          let ajusteVal = numericAtivo - valorPad + numericInativo;
          ajusteVal = normalizeAjuste(ajusteVal);
          // Se o Valor Padrão do Abono for exatamente 0, força Ajuste = 0
          if (valorPad === 0) {
            inpAjuste.value = formatCurrency(0);
            inpAjuste.style.color = '';
          } else if (numericInativo > numericAtivo) {
            ajusteVal = Math.abs(ajusteVal);
            inpAjuste.value = isNaN(ajusteVal) ? '' : formatCurrency(ajusteVal);
            inpAjuste.style.color = '';
          } else {
            inpAjuste.value = isNaN(ajusteVal) ? '' : formatCurrency(ajusteVal);
            inpAjuste.style.color = (ajusteVal < 0) ? 'red' : '';
          }
        }
      }catch(e){}
    });
  }catch(e){}
}
  // Passo final: se algum dos campos essenciais estiver vazio, força Ajuste = 0
  try{
    document.querySelectorAll('#tabelaRubricas tbody tr').forEach(tr => {
      try{
        const inpValor = tr.querySelector('.rubrica-valorpadrao');
        const inpAt = tr.querySelector('.rubrica-ativo');
        const inpIn = tr.querySelector('.rubrica-inativo');
        const inpAjuste = tr.querySelector('.rubrica-ajuste');
        if(!inpValor || !inpAt || !inpIn || !inpAjuste) return;
        const rawValor = inpValor.value ? inpValor.value.toString().trim() : '';
        const rawAt = inpAt.value ? inpAt.value.toString().trim() : '';
        const rawIn = inpIn.value ? inpIn.value.toString().trim() : '';
        const valorNum = parseMonetary(inpValor.value) || 0;
        // Força Ajuste = 0 se algum campo essencial estiver vazio OU se o valor padrão for numericamente 0
        if (!rawValor || !rawAt || !rawIn || valorNum === 0) {
          inpAjuste.value = formatCurrency(0);
          inpAjuste.style.color = '';
        }
      }catch(e){}
    });
  }catch(e){}

// Atualiza proporções quando a data de aposentadoria mudar
const elDataApos = document.getElementById('dataAposentadoriaApos');
if(elDataApos) elDataApos.addEventListener('change', atualizarProporcoesRubricas);
// Recalcula quando a fundamentação mudar (ex.: Média zera inativo)
const elFund = document.getElementById('fundamentacaoApos');
// Quando a fundamentação mudar, atualiza tanto as proporções quanto o campo "Aplica em"
if(elFund) elFund.addEventListener('change', ()=>{ if (typeof atualizarAplicaEmRubricas === 'function') atualizarAplicaEmRubricas(); });

// Atualiza/força os valores do select "Aplica em" para as rubricas padrão conforme a fundamentação
function atualizarAplicaEmRubricas() {
  const fundamentacao = document.getElementById('fundamentacaoApos')?.value || '';
  // Códigos das 7 rubricas padrão que devem ser afetadas
  const padroes = new Set(['00001','00013','00591','82286','00136','00951','82273']);
  document.querySelectorAll('#tabelaRubricas tbody tr').forEach(tr => {
    const selCodigo = tr.querySelector('.rubrica-codigo');
    const selCodigoOpt = tr.querySelector('.rubrica-codigo-sel');
    let codigo = '';
    if (selCodigo && selCodigo.value) codigo = selCodigo.value.trim();
    else if (selCodigoOpt && selCodigoOpt.value) codigo = selCodigoOpt.value.trim();
    if (!codigo) return;
    const selAplica = tr.querySelector('.rubrica-aplicaem');
    if (!selAplica) return;
    if (!padroes.has(codigo)) return; // só interfere nas 7 rubricas padrão
    // Forçar 'Ativo' sempre para Aux. Alimentação, Aux. Transporte e Abono Permanência
    const forcedActiveCodes = new Set(['00136','00951','82273']);
    if (forcedActiveCodes.has(codigo)) {
      selAplica.value = 'Ativo';
      selAplica.disabled = true; // impede alteração manual, pois deve sempre aparecer Ativo
      return; // pula para a próxima linha do forEach
    } else {
      // garante que select esteja habilitado para os demais códigos
      selAplica.disabled = false;
    }
    // Não sobrescreve se o usuário já alterou manualmente o campo nesta linha ou se a linha é recém-criada
    if (!tr.dataset.aplicaManual && !tr.dataset.nova) {
      if (fundamentacao === 'Média') {
        selAplica.value = 'Ativo';
      } else if (fundamentacao === 'Paridade') {
        selAplica.value = 'Ambos';
      }
    }
  });
  // Após ajustar os selects programaticamente, recalcula as proporções para refletir as mudanças
  if (typeof atualizarProporcoesRubricas === 'function') atualizarProporcoesRubricas();
}

// ======================== Pós-óbito - Cálculo ========================
// Calcula valores a serem repostos ao erário em caso de óbito do servidor
// Considera dias posteriores ao óbito, pagamentos posteriores por meses, gratificação natalina proporcional, etc.
document.getElementById('btnCalcularPosObito').onclick = function() {
  // Coleta valores do formulário (nome, matrícula, CPF, processo, salário, data do óbito)
  // Usa valores padrão '---' quando o campo estiver vazio para manter a memória legível
  const nome = document.getElementById('posObitoNome').value || '---';
  const matricula = document.getElementById('posObitoMatricula').value || '---';
  const cpf = document.getElementById('posObitoCPF').value || '---';
  const processo = document.getElementById('posObitoProcessoSEI').value || '---';
  const salario = parseMonetary(document.getElementById('posObitoSalario').value) || 0;
  const dataObitoStr = document.getElementById('posObitoData').value; // formato YYYY-MM-DD
  const posVal = (document.getElementById('posObitoPagamentoPosterior')?.value || '').toString().toUpperCase();
  const houvePagamento = posVal.startsWith('S');
  const mesesPosteriores = Number(document.getElementById('posObitoMesesPosteriores')?.value) || 0;

  if (!salario || !dataObitoStr) {
    document.getElementById('resultadoPosObito').textContent = "Preencha todos os campos corretamente.";
    return;
  }

  // Faz parsing manual da data (evita problemas de timezone com new Date('YYYY-MM-DD'))
  const parts = dataObitoStr.split('-').map(s => Number(s));
  const ano = parts[0];
  const mes = parts[1];
  const diaObito = parts[2];
  const dataObito = new Date(ano, mes - 1, diaObito);

  // Cálculo principal: quantos dias após o óbito no mesmo mês devem ser repostos
  // A cobrança considera os dias posteriores ao dia do óbito até o final do mês
  const diasNoMes = new Date(ano, mes, 0).getDate();
  const diasRestantes = Math.max(0, diasNoMes - diaObito); // dias após o dia do óbito

  let resultado = `Memória de cálculo de Reposição ao Erário - Pós-óbito\n\nInteressado: ${nome}\nMatrícula: ${matricula}\nCPF: ${cpf}\nProcesso SEI: ${processo}\n\nSalário na competência do óbito: R$ ${salario.toFixed(2)}\nData do óbito: ${('0'+diaObito).slice(-2)}/${('0'+mes).slice(-2)}/${ano}\nDias no mês do óbito: ${diasNoMes}\nDias posteriores ao óbito: ${diasRestantes}\n\n`;

  // Calcula valor referente aos dias a repor
  let valorReposicao = 0;
  if (diasRestantes > 0) {
    const valorDia = salario / diasNoMes;
    valorReposicao = valorDia * diasRestantes;
  resultado += `Cálculo:\nValor diário: R$ ${formatCurrency(valorDia)}\nDias a repor: ${diasRestantes}\nValor a ser reposto ao erário (dias): R$ ${formatCurrency(valorReposicao)}\n`;
  } else {
    resultado += "Não há dias posteriores ao óbito no mês. Não há valor a ser reposto por dias.\n";
  }

  // Se houve pagamento posterior por meses, soma o adicional (meses x salário)
  if (houvePagamento && mesesPosteriores > 0) {
    const adicional = mesesPosteriores * salario;
    resultado += `Houve pagamento posterior: SIM\nMeses posteriores informados: ${mesesPosteriores}\nAdicional (meses x salário da competência): R$ ${formatCurrency(adicional)}\n`;
    resultado += `\nValor total a ser reposto (reposição por dias + adicional): R$ ${formatCurrency(valorReposicao + adicional)}\n`;
  } else {
    // Caso não tenha havido pagamento posterior, não há adicional
    if (!houvePagamento) resultado += `Houve pagamento posterior: NÃO\n`;
    resultado += `\nValor total a ser reposto: R$ ${formatCurrency(valorReposicao)}\n`;
  }
  // --- Cálculo adicional: Gratificação Natalina proporcional (salário/12 x meses) ---
  // Meses considerados para cálculo de 13º proporcional:
  // Se o óbito ocorreu em ou após o dia 15, conta o próprio mês; caso contrário, não.
  const mesesDesdeInicioAno = (diaObito >= 15) ? mes : (mes - 1);
  const gratificacaoNatalProporcional = (salario / 12) * Math.max(0, mesesDesdeInicioAno);

  // Valor de adiantamento do 13º (se informado). Só é considerado quando óbito no 2º semestre (mês >= 6)
  let gratNatalVal = 0;
  const gratNatalInput = document.getElementById('posObitoGratNatal');
  if (gratNatalInput && gratNatalInput.value != null) {
    const val = gratNatalInput.value.trim();
    gratNatalVal = val === '' ? 0 : parseMonetary(val);
    // Se o campo existe mas está vazio, considera 0 (corrige bug para mostrar valor devido)
  }

  // Linha informativa sobre o proporcional de Gratificação Natalina
  let infoGratNatal = '';
  let gratNatalInfoStr = '';
  if (gratificacaoNatalProporcional > gratNatalVal) {
    gratNatalInfoStr = `Valor devido proporcional de Gratificação Natalina: R$ ${formatCurrency(gratificacaoNatalProporcional - gratNatalVal)}`;
  } else if (gratificacaoNatalProporcional < gratNatalVal) {
    gratNatalInfoStr = `Valor indevido proporcional de Gratificação Natalina: R$ ${formatCurrency(gratNatalVal - gratificacaoNatalProporcional)}`;
  }
  if (mes >= 6) {
    resultado += `Adiantamento Grat. Natal (informado): R$ ${formatCurrency(gratNatalVal)}\n`;
  }
  resultado += `\nGratificação Natalina proporcional:\nMeses considerados: ${mesesDesdeInicioAno} - Valor: R$ ${formatCurrency(gratificacaoNatalProporcional)}\n`;
  if (gratNatalInfoStr) {
    resultado += gratNatalInfoStr + '\n';
  }

  // Valor base: soma de reposição por dias + adicional (se houve pagamento posterior)
  let baseCobrado = valorReposicao;
  if (houvePagamento && mesesPosteriores > 0) baseCobrado += (mesesPosteriores * salario);

  // Valor final bruto = baseCobrado + possível adiantamento de 13º (se aplicável) - 13º proporcional
  const valorFinalRaw = baseCobrado + (mes >= 6 ? gratNatalVal : 0) - gratificacaoNatalProporcional;
  let valorFinal = valorFinalRaw;
  let pagamentoAosDependentes = 0;
  // Se o cálculo resultar em negativo, interpreta-se que o valor será pago aos dependentes
  if (valorFinalRaw < 0) {
    pagamentoAosDependentes = Math.abs(valorFinalRaw);
    valorFinal = 0; // não exibimos valor final negativo no campo principal
  }

  resultado += `\nValor base (Valor indevido competência óbito + valor de competência posterior do óbito): R$ ${formatCurrency(baseCobrado)}\n`;
  if (mes >= 6) {
    resultado += `Valor final: R$ ${formatCurrency(valorFinal)}\n`;
  } else {
    resultado += `Valor final: R$ ${formatCurrency(valorFinal)}\n`;
  }
  if (pagamentoAosDependentes > 0) {
    resultado += `\nATENÇÃO: o cálculo resultou em valor negativo. Deverá ser pago aos dependentes: R$ ${formatCurrency(pagamentoAosDependentes)}\n`;
  }

  // Exibe o resultado formatado no elemento de saída
  document.getElementById('resultadoPosObito').textContent = resultado;
};

// Mostra ou esconde o campo de "meses posteriores" conforme o usuário selecione SIM/NÃO
const posPagSelect = document.getElementById('posObitoPagamentoPosterior');
if(posPagSelect){
  posPagSelect.addEventListener('change', (e)=>{
    const div = document.getElementById('posObitoMesesPosterioresDiv');
    if(e.target.value === 'SIM') div.classList.remove('hidden'); else div.classList.add('hidden');
  });
}

// Mostra ou esconde o campo para informar adiantamento do 13º quando o óbito ocorre no 2º semestre
const posDataInput = document.getElementById('posObitoData');
if(posDataInput){
  posDataInput.addEventListener('change', (e)=>{
    const val = e.target.value || '';
    const div = document.getElementById('posObitoGratNatalDiv');
    if(!val){ div.classList.add('hidden'); return; }
    const parts = val.split('-').map(s=>Number(s));
    const mes = parts[1] || 0;
    if(mes >= 6) div.classList.remove('hidden'); else div.classList.add('hidden');
  });
}


// ======================== Acúmulo de Benefícios / Salário Mínimo ========================
// Valores de referência do salário mínimo por ano/mês (usados na área de acúmulo)
const salariosMinimosRef = [
  {ano:2019, meses:[1,2,3,4,5,6,7,8,9,10,11,12], val:998.00},
  {ano:2020, meses:[1], val:1039.00},
  {ano:2020, meses:[2,3,4,5,6,7,8,9,10,11,12], val:1045.00},
  {ano:2021, meses:[1,2,3,4,5,6,7,8,9,10,11,12], val:1100.00},
  {ano:2022, meses:[1,2,3,4,5,6,7,8,9,10,11,12], val:1212.00},
  {ano:2023, meses:[1,2,3,4], val:1302.00},
  {ano:2023, meses:[5,6,7,8,9,10,11,12], val:1320.00},
  {ano:2024, meses:[1,2,3,4,5,6,7,8,9,10,11,12], val:1412.00},
  {ano:2025, meses:[1,2,3,4,5,6,7,8,9,10,11,12], val:1518.00},
];
function buscarSalarioMinimo(ano, mes) {
  for (const ref of salariosMinimosRef) {
    if (ref.ano === ano && ref.meses.includes(mes)) return ref.val;
  }
  return "";
}
function atualizarSalarioMinimoInput() {
  const ano = Number(document.getElementById('acumuloAno').value);
  const mes = Number(document.getElementById('acumuloMes').value);
  const val = buscarSalarioMinimo(ano, mes);
  document.getElementById('acumuloSalarioMin').value = val || "";
}
document.getElementById('acumuloMes').addEventListener('change',atualizarSalarioMinimoInput);
document.getElementById('acumuloAno').addEventListener('change',atualizarSalarioMinimoInput);

// Calcula a memória de cálculo para Acúmulo de Benefícios aplicando redutores por faixa
document.getElementById('btnCalcularAcumuloRubrica').onclick = function() {
  const nome = document.getElementById('acumuloNome').value || '---';
  const matricula = document.getElementById('acumuloMatricula').value || '---';
  const cpf = document.getElementById('acumuloCPF').value || '---';
  const processo = document.getElementById('acumuloProcessoSEI').value || '---';
  const salarioRef = parseMonetary(document.getElementById('acumuloSalarioRef').value) || 0;
  const ano = Number(document.getElementById('acumuloAno').value);
  const mes = Number(document.getElementById('acumuloMes').value);
  const salarioMin = buscarSalarioMinimo(ano, mes);

  // Validação básica: exige salário de referência, ano, mês e que exista valor de salário mínimo
  if (!salarioRef || !ano || !mes || !salarioMin) {
    document.getElementById('acumuloMemoria').textContent = "Preencha todos os campos corretamente.";
    return;
  }

  let memoria = `Memória de cálculo para Acúmulo de Benefícios\n\nInteressado: ${nome}\nMatrícula: ${matricula}\nCPF: ${cpf}\nProcesso SEI: ${processo}\nPeríodo do cálculo: ${('0'+mes).slice(-2)}/${ano}\nSalário referência: R$ ${formatCurrency(salarioRef)}\nSalário mínimo referência: R$ ${formatCurrency(salarioMin)}\n\n`;

  // Cálculo das faixas progressivas de redutor sobre o que excede 1,2,3 e 4 salários mínimos
  let redutor = 0;
  let faixas = [];
  if (salarioRef <= salarioMin) {
    memoria += "Salário até 1 salário mínimo. Não há aplicação de redutor.\n";
  } else {
    let faixa1 = Math.min(salarioRef, 2*salarioMin) - salarioMin;
    if (faixa1 > 0) {
      let val1 = faixa1 * 0.40;
      redutor += val1;
      faixas.push({desc:`40% do que excede 1 Salário Mínimo até 2 Salário Mínimo: (${faixa1.toFixed(2)} x 40%)`, val: val1});
    }
    let faixa2 = Math.min(salarioRef, 3*salarioMin) - 2*salarioMin;
    if (faixa2 > 0) {
      let val2 = faixa2 * 0.60;
      redutor += val2;
      faixas.push({desc:`60% do que excede 2 Salário Mínimo até 3 Salário Mínimo: (${faixa2.toFixed(2)} x 60%)`, val: val2});
    }
    let faixa3 = Math.min(salarioRef, 4*salarioMin) - 3*salarioMin;
    if (faixa3 > 0) {
      let val3 = faixa3 * 0.80;
      redutor += val3;
      faixas.push({desc:`80% do que excede 3 Salário Mínimo até 4 Salário Mínimo: (${faixa3.toFixed(2)} x 80%)`, val: val3});
    }
    let faixa4 = salarioRef - 4*salarioMin;
    if (faixa4 > 0) {
      let val4 = faixa4 * 0.90;
      redutor += val4;
      faixas.push({desc:`90% do que excede 4 Salário Mínimo: (${faixa4.toFixed(2)} x 90%)`, val: val4});
    }
    memoria += "Faixas aplicadas:\n";
    faixas.forEach(f=>{
      memoria += `${f.desc} = R$ ${f.val.toFixed(2)}\n`;
    });
  }
  memoria += `\nValor da Rubrica de redutor: R$ ${formatCurrency(redutor)}\n`;
  memoria += `Valor do salário após aplicação da rubrica: R$ ${formatCurrency(salarioRef-redutor)}\n`;
  // Exibe a memória no textarea de saída
  document.getElementById('acumuloMemoria').textContent = memoria;
};

// ======================== Pensão dependentes ========================
// Gerencia a lista de dependentes e o cálculo simples de pensão
const dependContainer = document.getElementById('dependentesContainer');
const percentInput = document.getElementById('percentBasePensao');
// Botão que adiciona dinamicamente um dependente (nome + tipo)
document.getElementById('addDependente').onclick = () => {
  const div = document.createElement('div');
  div.className = 'grid';
  div.style.marginTop = '8px';
  div.innerHTML = `
    <div><input class="nomeDep" placeholder="Nome do dependente"></div>
    <div>
      <select class="tipoDep">
        <option>Cônjuge</option>
        <option>Filho(a)</option>
        <option>Pai</option>
        <option>Mãe</option>
        <option>Outro</option>
      </select>
    </div>
    <div>
      <button class="removerDepBtn" title="Remover dependente" style="background:none;border:none;font-size:20px;cursor:pointer;">🗑️</button>
    </div>
  `;
  div.querySelector('.removerDepBtn').onclick = function() {
    div.remove();
  };
  dependContainer.appendChild(div);
};

// Calcula a pensão dividindo a porcentagem aplicável entre os dependentes cadastrados
document.getElementById('calcularPensao').onclick = () => {
  const base = parseMonetary(document.getElementById('basePensaoCalc').value) || 0;
  const deps = [...dependContainer.querySelectorAll('.grid')];
  let percTotal = 50 + 10 * deps.length;
  if (percTotal > 100) percTotal = 100;
  percentInput.value = percTotal;
  const valorTotal = base * percTotal / 100;
  const valorPorDep = deps.length ? valorTotal / deps.length : valorTotal;

  let resumo = `Valor base: R$ ${formatCurrency(base)}\nPercentual total aplicado: ${percTotal}%\nValor total da pensão: R$ ${formatCurrency(valorTotal)}\n\nDetalhamento por dependente:\n`;
  if (deps.length === 0) resumo += '(Sem dependentes cadastrados)\n';
  deps.forEach((d, i) => {
    const nome = d.querySelector('.nomeDep').value || '-';
    const tipo = d.querySelector('.tipoDep').value || '-';
  resumo += `Dependente ${i + 1}: ${nome} (${tipo}) — R$ ${formatCurrency(valorPorDep)}\n`;
  });

  // Exibe resumo da pensão calculada, incluindo detalhamento por dependente
  document.getElementById('resumoPensao').textContent = resumo;
};

// ======================== PDF/XLS Download Functions ========================
// Funções utilitárias para gerar e baixar PDF e XLS a partir de textos/dados
function baixarPDF(titulo, conteudo) {
  const doc = new window.jspdf.jsPDF();
  doc.setFont('Helvetica');
  doc.setFontSize(14);
  doc.text(titulo, 10, 15);
  doc.setFontSize(11);
  const lines = doc.splitTextToSize(conteudo, 180);
  doc.text(lines, 10, 30);
  doc.save(titulo.replace(/ /g,"_")+".pdf");
}
function baixarXLS(titulo, dadosArray, sheetName='sheet1') {
  const ws = window.XLSX.utils.aoa_to_sheet(dadosArray);
  const wb = window.XLSX.utils.book_new();
  window.XLSX.utils.book_append_sheet(wb, ws, sheetName);
  window.XLSX.writeFile(wb, titulo.replace(/ /g,"_")+".xlsx");
}

// PDF/XLS Aposentadoria — cria arquivo com o texto exibido no resultado
document.getElementById('btnAposPDF').onclick = function() {
  baixarPDF("Acertos_Financeiros_Aposentadoria", document.getElementById('resultado').textContent);
};
document.getElementById('btnAposXLS').onclick = function() {
  // Coleta dados das rubricas
  const header = ["Rubrica (código)","Denominação","Valor padrão","Aplica em","Incide PSS?","Ativo (R$)","Inativo (R$)","Ajuste (R$)"];
  const rows = [];
  document.querySelectorAll('#tabelaRubricas tbody tr').forEach(tr=>{
    const r = [
      tr.querySelector('.rubrica-codigo').value,
      tr.querySelector('.rubrica-denom').value,
      // valor padrão pode vir formatado
      (function(){ const v=tr.querySelector('.rubrica-valorpadrao').value; return v?parseMonetary(v).toFixed(2):"" })(),
      tr.querySelector('.rubrica-aplicaem').value,
      tr.querySelector('.rubrica-incidepss').value,
      (function(){ const v=tr.querySelector('.rubrica-ativo').value; return v?parseMonetary(v).toFixed(2):"" })(),
      (function(){ const v=tr.querySelector('.rubrica-inativo').value; return v?parseMonetary(v).toFixed(2):"" })(),
      (function(){ const v=tr.querySelector('.rubrica-ajuste').value; return v?parseMonetary(v).toFixed(2):"" })()
    ];
    rows.push(r);
  });
  baixarXLS("Acertos_Financeiros_Aposentadoria", [header, ...rows]);
};

// Calcula contribuição PSS usando faixas progressivas fornecidas
// Assume base >= 0; retorna valor da contribuição (Number)
function calcularContribuicaoPSS(base) {
  if (!base || base <= 0) return 0;
  const faixas = [
    {min: 0.00, max: 1518.00, rate: 0.075},
    {min: 1518.01, max: 2793.88, rate: 0.09},
    {min: 2793.89, max: 4190.83, rate: 0.12},
    {min: 4190.84, max: 8157.41, rate: 0.14},
    {min: 8157.42, max: 13969.49, rate: 0.145},
    {min: 13969.50, max: 27938.95, rate: 0.165},
    {min: 27938.96, max: 54480.97, rate: 0.19},
    {min: 54480.98, max: Infinity, rate: 0.22}
  ];
  let total = 0;
  for (const f of faixas) {
    const lower = f.min;
    const upper = f.max;
    const taxable = Math.max(0, Math.min(base, upper) - lower);
    if (taxable > 0) total += taxable * f.rate;
    if (base <= upper) break;
  }
  return total;
}

// Botão Calcular para Acertos Financeiros - Aposentadoria
document.getElementById('btnCalcularApos')?.addEventListener('click', function(){
  try {
    // Garante que os valores mostrados estão atualizados
    if (typeof atualizarProporcoesRubricas === 'function') atualizarProporcoesRubricas();

    const fundamentacao = document.getElementById('fundamentacaoApos')?.value || '---';
    const dataAposRaw = document.getElementById('dataAposentadoriaApos')?.value || '';
    // Formata data como Dia - Mês - Ano (DD - MM - YYYY)
    let dataAposFmt = '---';
    if (dataAposRaw) {
      const p = dataAposRaw.split('-');
      if (p.length === 3) dataAposFmt = `${p[2]} - ${p[1]} - ${p[0]}`;
      else dataAposFmt = dataAposRaw;
    }
    let resumo = `Resumo de Ajustes - Acertos Financeiros (Aposentadoria)\nFundamentação: ${fundamentacao}\nData aposentadoria: ${dataAposFmt}\n\n`;

    const linhas = [];
    let totalAjustes = 0;

    // Varre todas as rubricas e coleta o ajuste e os valores Ativo/Inativo (após normalização);
    // inclui todas as rubricas no resumo, mesmo que o ajuste seja zero
    const linhasTemp = [];
    let somaAtivoParaPSS = 0;
    let somaInativoParaPSS = 0;
    document.querySelectorAll('#tabelaRubricas tbody tr').forEach(tr => {
      try {
        const codigoEl = tr.querySelector('.rubrica-codigo');
        const codigoSel = tr.querySelector('.rubrica-codigo-sel');
        const codigo = (codigoEl && codigoEl.value) ? codigoEl.value : (codigoSel ? codigoSel.value : '');
        const denom = (tr.querySelector('.rubrica-denom')?.value) || '';
        const ativoVal = parseMonetary(tr.querySelector('.rubrica-ativo')?.value) || 0;
        const inativoVal = parseMonetary(tr.querySelector('.rubrica-inativo')?.value) || 0;
        const ajusteRaw = parseMonetary(tr.querySelector('.rubrica-ajuste')?.value) || 0;
        const ajuste = normalizeAjuste(ajusteRaw);
        const incide = (tr.querySelector('.rubrica-incidepss')?.value || '').toString().toLowerCase() === 'sim';
        // acumulamos a parte ativo/inativo na base somente se incide = Sim
        if (incide && ativoVal > 0) somaAtivoParaPSS += ativoVal;
        if (incide && inativoVal > 0) somaInativoParaPSS += inativoVal;
        linhasTemp.push({codigo, denom, ajuste, ativo: ativoVal, inativo: inativoVal, incide});
        totalAjustes += ajuste;
      } catch(e) { /* ignora linha com problemas */ }
    });

    // Calcula o PSS sobre a base total formada pela soma das partes Ativo que incidem
    const totalPSSAtivo = calcularContribuicaoPSS(somaAtivoParaPSS);

    // Para o Inativo, aplica-se apenas o que ultrapassar o teto do RGPS
    const TETO_RGPS = 8157.41;
    const baseInativoSupraceto = Math.max(0, somaInativoParaPSS - TETO_RGPS);
    const totalPSSInativo = calcularContribuicaoPSS(baseInativoSupraceto);

    // Distribui o PSS total de Ativo proporcionalmente entre as rubricas com Ativo que incidem
    // e distribui o PSS total de Inativo proporcionalmente entre as rubricas com Inativo que incidem
    linhasTemp.forEach(l => {
      let pssAtivoShare = 0;
      let pssInativoShare = 0;
      if (somaAtivoParaPSS > 0 && l.incide && l.ativo > 0) {
        pssAtivoShare = (l.ativo / somaAtivoParaPSS) * totalPSSAtivo;
      }
      if (baseInativoSupraceto > 0 && somaInativoParaPSS > 0 && l.incide && l.inativo > 0) {
        // proporcional pela participação do inativo na soma total de inativos
        pssInativoShare = (l.inativo / somaInativoParaPSS) * totalPSSInativo;
      }
      const pssTotalShare = pssAtivoShare + pssInativoShare;
      linhas.push({...l, pssAtivo: pssAtivoShare, pssInativo: pssInativoShare, pss: pssTotalShare});
    });

    // Mesmo que todas as rubricas tenham ajuste zero, exibimos o detalhamento
    if (linhas.length === 0) {
      resumo += 'Sem rubricas preenchidas.\n';
    } else {
      resumo += 'Detalhamento de ajustes:\n';
      linhas.forEach(l => {
        resumo += `${l.codigo} - ${l.denom} — Ajuste: R$ ${formatCurrency(l.ajuste)} \n`;
      });
      resumo += `Base PSS Ativo: R$ ${formatCurrency(somaAtivoParaPSS)}\n`;
      resumo += `Total PSS de Ativo (calculado sobre a base Ativo): R$ ${formatCurrency(totalPSSAtivo)}\n`;
      resumo += `\nBase PSS Inativo: R$ ${formatCurrency(somaInativoParaPSS)}\n`;
      resumo += `Teto RGPS: R$ ${formatCurrency(TETO_RGPS)} — Base tributável Inativo (somaInativo - teto, se positiva): R$ ${formatCurrency(baseInativoSupraceto)}\n`;
      resumo += `Total PSS de Inativo (calculado sobre a base que supera o teto RGPS): R$ ${formatCurrency(totalPSSInativo)}\n`;
      resumo += `\nTotal dos ajustes: R$ ${formatCurrency(totalAjustes)}\n`;
    }

  // Renderiza o resumo: mantém o texto simples exceto quando o "Total dos ajustes" for negativo — nesse caso fica em negrito e vermelho
    try{
      const elRes = document.getElementById('resultado');
  // converte quebras de linha em <br> para renderização HTML dentro do <pre>
  let htmlResumo = resumo.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
      if (totalAjustes < 0) {
        const totalStr = `R$ ${formatCurrency(totalAjustes)}`;
  // substitui o texto simples do total por HTML estilizado (seguro, pois totalStr é controlado)
  htmlResumo = htmlResumo.replace(`Total dos ajustes: ${totalStr}`, `Total dos ajustes: <strong style="color:red">${totalStr}</strong>`);
      }
      elRes.innerHTML = htmlResumo;
    }catch(e){ document.getElementById('resultado').textContent = resumo; }
  } catch(err) {
    console.error('Erro ao calcular resumo de ajustes:', err);
    document.getElementById('resultado').textContent = 'Erro ao calcular resumo de ajustes. Veja console para detalhes.';
  }
});

// PDF/XLS Férias — exporta cálculo de férias para PDF ou XLS
document.getElementById('btnFeriasPDF').onclick = function() {
  baixarPDF("Calculo_Ferias", document.getElementById('resultadoFerias').textContent);
};
document.getElementById('btnFeriasXLS').onclick = function() {
  const header = ["Período","Valor Férias (R$)","Abono (R$)","Desconto IR (R$)","Desconto PSS (R$)","Total líquido (R$)"];
  const periodo = document.getElementById('feriasPeriodo').value;
  const valor = parseMonetary(document.getElementById('feriasValor').value)||0;
  const abono = parseMonetary(document.getElementById('feriasAbono').value)||0;
  const descontoIR = parseMonetary(document.getElementById('feriasDescontoIR').value)||0;
  const descontoPSS = parseMonetary(document.getElementById('feriasDescontoPSS').value)||0;
  const total = valor + abono - descontoIR - descontoPSS;
  const row = [periodo, valor.toFixed(2), abono.toFixed(2), descontoIR.toFixed(2), descontoPSS.toFixed(2), total.toFixed(2)];
  baixarXLS("Calculo_Ferias", [header, row]);
};

// ======================== Rubricas - Férias ====================
// Cria uma linha simples para a tabela de rubricas de Férias
function criarLinhaRubricaFerias(valorCodigo='', zeroInit=false) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>
      <select class="rubrica-ferias-codigo-sel" style="width:180px;">
        <option value="">--Selecione--</option>
        <option value="00001">00001 - Vencimento Básico</option>
        <option value="00013">00013 - Anuênio</option>
        <option value="00591">00591 - GAE - GRATIF.ATIV.EXERC</option>
        <option value="82286">82286 - GDASS - LEI 10855/2004</option>
        <option value="00053">00053 - Adic. de Insalubridade</option>
        <option value="00136">00136 - Aux. Alimentação</option>
        <option value="00951">00951 - Aux. Transporte</option>
        <option value="OUTRA">Outra...</option>
      </select>
      <input style="width:110px; margin-top:4px;" class="rubrica-ferias-codigo" ${valorCodigo ? `value="${valorCodigo}"` : ""} placeholder="Código" autocomplete="off">
    </td>
    <td><input style="width:240px" class="rubrica-ferias-denom"></td>
    <td><input style="width:120px" class="rubrica-ferias-valor monetary" type="text" placeholder="0,00"></td>
    <td><button class="removerRubricaFerias" title="Remover linha">🗑️</button></td>
  `;

  const sel = tr.querySelector('.rubrica-ferias-codigo-sel');
  const input = tr.querySelector('.rubrica-ferias-codigo');

  // Se um código inicial foi passado, ajuste o select para corresponder
  if (valorCodigo) {
    if (rubricasOpcoes.includes(valorCodigo)) {
      sel.value = valorCodigo;
      input.value = valorCodigo;
    } else {
      sel.value = 'OUTRA';
      input.value = valorCodigo;
    }
  }

  function atualizarAutoFerias() {
    const codigo = (input.value || sel.value || '').toString();
    if (rubricasAuto[codigo]) tr.querySelector('.rubrica-ferias-denom').value = rubricasAuto[codigo];
    else tr.querySelector('.rubrica-ferias-denom').value = '';

    // Valor padrão automático para algumas rubricas
    const valField = tr.querySelector('.rubrica-ferias-valor');
    if (!valField) return;
    // If zeroInit flag was provided, initialize the value to zero once (then remove the marker)
    if (tr.dataset && tr.dataset.inicialZero === '1') {
      valField.value = formatCurrency(0);
      // remove marker so future changes recompute normally
      try { delete tr.dataset.inicialZero; } catch(e) {}
      return;
    }

    if (codigo === '00001') {
      const cargo = document.getElementById('cargoApos')?.value;
      const classe = document.getElementById('classeApos')?.value;
      const padrao = document.getElementById('padraoApos')?.value;
      const jornada = document.getElementById('jornadaApos')?.value;
      const val = buscarVencimentoBasico(cargo, classe, padrao, jornada);
      valField.value = val !== '' ? formatCurrency(val) : '';
    } else if (codigo === '00591') {
      const cargo = document.getElementById('cargoApos')?.value;
      const classe = document.getElementById('classeApos')?.value;
      const padrao = document.getElementById('padraoApos')?.value;
      const jornada = document.getElementById('jornadaApos')?.value;
      const valBase = buscarVencimentoBasico(cargo, classe, padrao, jornada);
      valField.value = valBase !== '' ? formatCurrency(valBase * 1.6) : '';
    } else if (codigo === '82286') {
      const cargo = document.getElementById('cargoApos')?.value;
      const classe = document.getElementById('classeApos')?.value;
      const padrao = document.getElementById('padraoApos')?.value;
      const jornada = document.getElementById('jornadaApos')?.value;
      const ponto = buscarGDASSPorPonto(cargo, classe, padrao, jornada) || 0;
      const qtdAtivo = Number(document.getElementById('gdassApos')?.value) || 0;
      const val = (ponto !== '' && qtdAtivo > 0) ? (ponto * qtdAtivo) : '';
      valField.value = val !== '' ? formatCurrency(val) : '';
    } else if (codigo === '00136') {
      valField.value = formatCurrency(1000);
    } else {
      // deixe em branco para outras
      // só limpa se o usuário não tiver digitado manualmente
      if (!tr.dataset.valorManual) valField.value = '';
    }
  }

  sel.addEventListener('change', function() {
    if (sel.value === 'OUTRA') { input.value = ''; input.focus(); }
    else input.value = sel.value;
    atualizarAutoFerias();
  });
  input.addEventListener('input', function() {
    if (rubricasOpcoes.includes(input.value)) sel.value = input.value; else sel.value = 'OUTRA';
    atualizarAutoFerias();
  });

  const valInp = tr.querySelector('.rubrica-ferias-valor');
  if (valInp) {
    valInp.addEventListener('input', ()=>{ try{ tr.dataset.valorManual = '1'; }catch(e){} });
  }

  tr.querySelector('.removerRubricaFerias').onclick = function() { tr.remove(); atualizarBaseFerias(); };
  // initialize auto and formatting
  // mark as initial-zero if requested so the first auto-update writes zero instead of computing
  if (zeroInit) tr.dataset.inicialZero = '1';
  setTimeout(()=>{ atualizarAutoFerias(); initMonetaryInputs(); }, 10);
  return tr;
}

// Adiciona/Inicializa a tabela de rubricas de Férias com valores padrão
try{
  const btnAddFerias = document.getElementById('adicionarRubricaFerias');
  if (btnAddFerias) btnAddFerias.onclick = function(){
    const row = criarLinhaRubricaFerias();
    const tbody = document.querySelector('#tabelaRubricasFerias tbody');
    if (tbody) tbody.appendChild(row);
    if (typeof atualizarBaseFerias === 'function') atualizarBaseFerias();
  };

  const reiniciarFerias = document.getElementById('reiniciarCalculoFerias');
  if (reiniciarFerias) reiniciarFerias.onclick = function(){
    try{
      const tbody = document.querySelector('#tabelaRubricasFerias tbody');
      if (tbody) tbody.innerHTML = '';
  const defaultOrder = ['00001','00013','00591','82286','00053'];
  defaultOrder.forEach(code => { const row = criarLinhaRubricaFerias(code, true); if (tbody) tbody.appendChild(row); });
      if (typeof initMonetaryInputs === 'function') initMonetaryInputs();
      if (typeof atualizarBaseFerias === 'function') atualizarBaseFerias();
    }catch(e){console.error('Erro reiniciar ferias', e)}
  };

  // Calcula a base das férias somando os valores informados na tabela
  function atualizarBaseFerias(){
    try{
      const tbody = document.querySelectorAll('#tabelaRubricasFerias tbody tr');
      let soma = 0;
      tbody.forEach(tr=>{ const v = parseMonetary(tr.querySelector('.rubrica-ferias-valor')?.value) || 0; soma += v; });
      const el = document.getElementById('valorBaseFerias');
      if (el) el.value = soma ? formatCurrency(soma) : formatCurrency(0);
      return soma;
    }catch(e){ return 0; }
  }

  // Atualiza os rótulos dos Períodos Aquisitivos (3 quadros) com base na data de ingresso e data de aposentadoria
  // Regras:
  // - Se a data de aposentadoria ocorrer no mesmo mês do ingresso e dia >= dia de ingresso, ou em mês posterior,
  //   considera-se que o aniversários foi atingido no ano da aposentadoria -> primeiro quadro começa em (anoApos - 2)
  // - Caso contrário (aposentadoria antes do aniversário), o primeiro quadro começa em (anoApos - 3)
  function atualizarPeriodoAquisitivoLabels(){
    try{
      const ing = document.getElementById('dataIngressoServico')?.value;
      const apos = document.getElementById('dataAposentadoriaFerias')?.value;
      const spans = [
        document.getElementById('periodoAquisitivo1LabelValue'),
        document.getElementById('periodoAquisitivo2LabelValue'),
        document.getElementById('periodoAquisitivo3LabelValue')
      ];
      const inputsDias = [
        document.getElementById('periodoAquisitivo1'),
        document.getElementById('periodoAquisitivo2'),
        document.getElementById('periodoAquisitivo3')
      ];
      if(!ing || !apos){ spans.forEach(s=>s && (s.textContent='')); return; }
      const [ingY,ingM,ingD] = ing.split('-').map(Number);
      const [aposY,aposM,aposD] = apos.split('-').map(Number);
      if([ingY,ingM,ingD].some(v=>isNaN(v)) || [aposY,aposM,aposD].some(v=>isNaN(v))){ spans.forEach(s=>s && (s.textContent='')); return; }
      const aniversarioPassou = (aposM > ingM) || (aposM === ingM && aposD >= ingD);
      const primeiroInicio = aniversarioPassou ? (aposY - 2) : (aposY - 3);
      for(let i=0;i<3;i++){
        const start = primeiroInicio + i;
        const end = start + 1;
        if(spans[i]) spans[i].textContent = `${start}/${end}`;

        // Calcula os dias a que possui direito neste período
        // Regra: para cada ocorrência do dia 15 dentro do período aquisitivo, conta-se 2,5 dias.
        // Limite máximo por período = 30 dias.
        try{
          const ingDate = new Date(ingY, ingM-1, ingD);
          const aposDate = new Date(aposY, aposM-1, aposD);
          const periodStart = new Date(start, ingM-1, ingD);
          const periodEnd = new Date(end, ingM-1, ingD); // NÃO inclusivo

          // Se aposentadoria antes do início do período, não há direito
          if(aposDate <= periodStart){ if(inputsDias[i]) inputsDias[i].value = '0'; continue; }

          // Cursor para o dia 15 do mês: comece no mês do periodStart
          let cursor = new Date(periodStart.getFullYear(), periodStart.getMonth(), 15);
          // Avança até que o cursor esteja dentro do período (>= periodStart)
          while(cursor < periodStart){ cursor.setMonth(cursor.getMonth() + 1); }

          let count15 = 0;
          while(cursor < periodEnd && cursor <= aposDate){
            // Conta esta ocorrência
            count15 += 1;
            // Próximo mês
            cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 15);
          }

          let diasDireito = count15 * 2.5;
          if(diasDireito > 30) diasDireito = 30;
          // mostra com .5 quando necessário
          if(inputsDias[i]) inputsDias[i].value = (Number.isInteger(diasDireito) ? diasDireito.toString() : diasDireito.toString());
        } catch(e){ if(inputsDias[i]) inputsDias[i].value = ''; }
      }
    }catch(e){ console.error('Erro atualizarPeriodoAquisitivoLabels', e); }
  }

  // Registra listeners para atualizar dinamicamente ao alterar as datas
  const elIngresso = document.getElementById('dataIngressoServico');
  const elApos = document.getElementById('dataAposentadoriaFerias');
  if(elIngresso){ elIngresso.addEventListener('change', atualizarPeriodoAquisitivoLabels); elIngresso.addEventListener('input', atualizarPeriodoAquisitivoLabels); }
  if(elApos){ elApos.addEventListener('change', atualizarPeriodoAquisitivoLabels); elApos.addEventListener('input', atualizarPeriodoAquisitivoLabels); }
  // Chamada inicial para preencher os rótulos caso já haja datas
  setTimeout(atualizarPeriodoAquisitivoLabels, 50);

  // Atualiza a base sempre que houver mudança nas rubricas de Férias
  document.addEventListener('input', function(e){
    if (e.target && e.target.classList && (e.target.classList.contains('rubrica-ferias-valor') || e.target.classList.contains('rubrica-ferias-codigo'))) {
      atualizarBaseFerias();
    }
  });

  const btnCalFerias = document.getElementById('calcularFerias');
  if (btnCalFerias) btnCalFerias.onclick = function(){
    try{
      // Exporta informações básicas de Férias: nome, datas e resultado exibido (para uso futuro)
      const header = ["Nome do Servidor","Data Ingresso Serviço Público","Data Aposentadoria","Resultado Férias"];
      const nome = (document.getElementById('nomeServidorFerias')?.value) || '';
      const ingresso = (document.getElementById('dataIngressoServico')?.value) || '';
      const dataApos = (document.getElementById('dataAposentadoriaFerias')?.value) || '';

      // formata datas DD/MM/AAAA para exibição no resultado
      const fmtBR = (d)=>{
        if(!d) return '';
        const parts = (d+'').split('-');
        if(parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
        return d;
      };

      const valorBase = parseMonetary(document.getElementById('valorBaseFerias')?.value) || 0;
      const diaria = valorBase / 30;

      // helper to escape HTML when injecting into innerHTML
      const escapeHtml = (str) => {
        if(str === null || str === undefined) return '';
        return String(str)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      };

      let resumoHTML = `<strong>Cálculo de Férias</strong><br>Nome: ${escapeHtml(nome)}<br>Data ingresso: ${escapeHtml(fmtBR(ingresso))}<br>Data aposentadoria: ${escapeHtml(fmtBR(dataApos))}<br><br>`;
      let totalPagar = 0;

      // Carrega informações dos 3 períodos em arrays para avaliação prévia
      const periodLabels = [];
      const diasDireitoArr = [];
      const diasGozadosArr = [];
      const recebeuArr = [];
      for(let i=1;i<=3;i++){
        periodLabels.push((document.getElementById(`periodoAquisitivo${i}LabelValue`)?.textContent) || '');
        const diasRaw = (document.getElementById(`periodoAquisitivo${i}`)?.value) || '';
        const m = (diasRaw+'').toString().match(/([\d\.\,]+)/);
        const diasDireito = m ? (parseFloat(m[1].replace(',','.')) || 0) : 0;
        diasDireitoArr.push(diasDireito);

        const gozadosRaw = (document.getElementById(`diasGozados${i}`)?.value) || '';
        let diasG = parseFloat((gozadosRaw+'').replace(',','.')) || 0;
        if(isNaN(diasG)) diasG = 0;
        if(diasG < 0) diasG = 0;
        if(diasG > diasDireito) diasG = diasDireito;
        diasGozadosArr.push(diasG);

        recebeuArr.push((document.getElementById(`recebeUmTerco${i}`)?.value) || 'Não');
      }

      // Se o usuário não gozou dias em nenhum dos 3 períodos, ignorar o mais antigo e calcular apenas os 2 últimos
      const nenhumGozado = diasGozadosArr.every(v => Number(v) === 0);
      const indicesParaCalcular = nenhumGozado ? [1,2] : [0,1,2];

      if(nenhumGozado){
        // Marca o período mais antigo como perdido no resumo
        const lostLabel = periodLabels[0] || '1';
        const diasDireito0 = Number(diasDireitoArr[0]) || 0;
        // Se o período mais antigo tiver direito a 30 dias, mostramos a mensagem formatada (vermelho/negrito)
        if (diasDireito0 === 30) {
          resumoHTML += `Período ${escapeHtml(lostLabel)}: <span style="color:#ff3b30;font-weight:700">Período total Perdido</span><br>`;
        } else {
          resumoHTML += `Período ${escapeHtml(lostLabel)} perdido<br>`;
        }
      }

      for(const idx of indicesParaCalcular){
        const iDisplay = idx + 1;
        const periodLabel = periodLabels[idx] || iDisplay;
        const diasDireito = Number(diasDireitoArr[idx]) || 0;
        const diasGozados = Number(diasGozadosArr[idx]) || 0;

        // Situação especial para o período mais antigo (idx === 0) quando direito = 30:
        // não contabilizamos valores deste período no total a pagar, mesmo que parcialmente gozado.
        if (idx === 0 && Number(diasDireito) === 30) {
          if (Number(diasGozados) === 30) {
            resumoHTML += `Período ${escapeHtml(periodLabel)}: <strong>Período Utilizado</strong><br>`;
          } else if (Number(diasGozados) === 0) {
            resumoHTML += `Período ${escapeHtml(periodLabel)}: <span style="color:#ff3b30;font-weight:700">Período total Perdido</span><br>`;
          } else {
            const lost = Number(diasDireito) - Number(diasGozados);
            const lostStr = Number.isInteger(lost) ? String(lost) : String(lost);
            resumoHTML += `Período ${escapeHtml(periodLabel)}: <span style="color:#ff3b30;font-weight:700">Período de ${escapeHtml(lostStr)} dias perdidos</span><br>`;
          }
          // pula este período sem somar valores (não inclui proporcional nem 1/3)
          continue;
        }

        // Para os demais casos, contabiliza-se normalmente
        const diasRestantes = Math.max(0, diasDireito - diasGozados);
        const proporcional = diaria * diasRestantes;
        const recebeu = recebeuArr[idx] || 'Não';
        let terc = 0;
        if(recebeu === 'Não'){
          terc = proporcional / 3;
        } else {
          // recebeu: consideramos que recebeu o valor da base inteira * 1/3
          const expectedOneThird = (diaria * diasDireito) / 3;
          const receivedAmount = (valorBase / 3) || 0;
          terc = expectedOneThird - receivedAmount;
        }
        totalPagar += proporcional + terc;

        const propFormatted = `R$ ${formatCurrency(proporcional)}`;
        const tercFormatted = `R$ ${formatCurrency(terc)}`;
        const propHtml = (proporcional < 0) ? `<span style="color:#ff3b30;font-weight:700">${escapeHtml(propFormatted)}</span>` : escapeHtml(propFormatted);
        const tercHtml = (terc < 0) ? `<span style="color:#ff3b30;font-weight:700">${escapeHtml(tercFormatted)}</span>` : escapeHtml(tercFormatted);

        // Exibição: se for o período mais antigo parcialmente gozado, mostramos também o aviso em vermelho
        let lineHtml = '';
        if (idx === 0 && Number(diasDireito) === 30 && Number(diasGozados) > 0 && Number(diasGozados) < 30) {
          const lost = Number(diasDireito) - Number(diasGozados);
          const lostStr = Number.isInteger(lost) ? String(lost) : String(lost);
          lineHtml = `Período ${escapeHtml(periodLabel)}: <span style="color:#ff3b30;font-weight:700">Período de ${escapeHtml(lostStr)} dias perdidos</span> — Direito ${escapeHtml(diasDireito)} dias — Gozados ${escapeHtml(diasGozados)} dias — Restantes ${escapeHtml(diasRestantes)} dias — Valor proporcional: ${propHtml} — 1/3 ajuste: ${tercHtml}<br>`;
        } else {
          lineHtml = `Período ${escapeHtml(periodLabel)}: Direito ${escapeHtml(diasDireito)} dias — Gozados ${escapeHtml(diasGozados)} dias — Restantes ${escapeHtml(diasRestantes)} dias — Valor proporcional: ${propHtml} — 1/3 ajuste: ${tercHtml}<br>`;
        }

        resumoHTML += lineHtml;
      }

      const totalFormatted = `R$ ${formatCurrency(totalPagar)}`;
      const totalHtml = (totalPagar < 0) ? `<span style="color:#ff3b30;font-weight:700">${escapeHtml(totalFormatted)}</span>` : escapeHtml(totalFormatted);
      resumoHTML += `<br><strong>Total a pagar:</strong> ${totalHtml}`;
      document.getElementById('resultadoFerias').innerHTML = resumoHTML;

  // Também monta a linha para eventual exportação (texto sem formatação)
  const resultado = document.getElementById('resultadoFerias').innerText || '';
      const row = [nome, ingresso, dataApos, resultado];

      // (no futuro podemos usar header/row para gerar XLS/PDF)
    }catch(e){ console.error('Erro ao calcular Férias:', e); document.getElementById('resultadoFerias').textContent = 'Erro ao calcular Férias. Veja console.'; }
  };

  // on load: populate defaults if empty
  try{
    const tbodyFer = document.querySelector('#tabelaRubricasFerias tbody');
    if (tbodyFer && tbodyFer.children.length === 0) {
  const defaultOrder = ['00001','00013','00591','82286','00053'];
  defaultOrder.forEach(code => { const row = criarLinhaRubricaFerias(code, true); tbodyFer.appendChild(row); });
      initMonetaryInputs();
      atualizarBaseFerias();
    }
  }catch(e){}
}catch(e){console.error('Erro inicializando rubricas de ferias', e)}

// PDF/XLS Acúmulo de Benefícios — exporta a memória de cálculo
document.getElementById('btnAcumuloPDF').onclick = function() {
  baixarPDF("Acumulo_Beneficios", document.getElementById('acumuloMemoria').textContent);
};
document.getElementById('btnAcumuloXLS').onclick = function() {
  // Simples: exporta os principais dados do cálculo
  const header = ["Nome","Matrícula","CPF","Processo SEI","Ano","Mês","Salário Ref (R$)","Salário Mínimo (R$)","Rubrica Redutor (R$)","Salário após Redutor (R$)"];
  const nome=document.getElementById('acumuloNome').value;
  const mat=document.getElementById('acumuloMatricula').value;
  const cpf=document.getElementById('acumuloCPF').value;
  const proc=document.getElementById('acumuloProcessoSEI').value;
  const ano=document.getElementById('acumuloAno').value;
  const mes=document.getElementById('acumuloMes').value;
  const salref=document.getElementById('acumuloSalarioRef').value;
  const salmin=document.getElementById('acumuloSalarioMin').value;
  // Extrai valores do resultado exibido
  const memoria=document.getElementById('acumuloMemoria').textContent;
  const matchRedutor = memoria.match(/Valor da Rubrica de redutor: R\$ ([\d\.,]+)/);
  const matchFinal = memoria.match(/Valor do salário após aplicação da rubrica: R\$ ([\d\.,]+)/);
  const redutor = matchRedutor?matchRedutor[1].replace(',','.'):"";
  const final = matchFinal?matchFinal[1].replace(',','.'):"";
  const row = [nome,mat,cpf,proc,ano,mes, salref ? `R$ ${formatCurrency(parseMonetary(salref))}` : '', salmin ? `R$ ${formatCurrency(parseMonetary(salmin))}` : '', redutor ? `R$ ${formatCurrency(parseMonetary(redutor))}` : '', final ? `R$ ${formatCurrency(parseMonetary(final))}` : ''];
  baixarXLS("Acumulo_Beneficios", [header, row]);
};

// PDF/XLS Pensão — exporta resumo de pensão e tabela de dependentes
document.getElementById('btnPensaoPDF').onclick = function() {
  baixarPDF("Calculo_Pensao", document.getElementById('resumoPensao').textContent);
};
document.getElementById('btnPensaoXLS').onclick = function() {
  // Exporta resumo da pensão e dependentes
  const header = ["Base (R$)","Percentual Total (%)","Valor Total Pensão (R$)"];
  const base=parseMonetary(document.getElementById('basePensaoCalc').value)||0;
  const perc=Number(document.getElementById('percentBasePensao').value)||0;
  const valTotal=base*perc/100;
  const rows = [[`R$ ${formatCurrency(base)}`,perc,`R$ ${formatCurrency(valTotal)}`]];
  // Dependentes
  const depHeader = ["Dependente","Tipo","Valor (R$)"];
  const deps = [...document.getElementById('dependentesContainer').querySelectorAll('.grid')];
  let valorPorDep = deps.length ? valTotal / deps.length : valTotal;
  deps.forEach((d,i)=>{
    const nome = d.querySelector('.nomeDep').value||'-';
    const tipo = d.querySelector('.tipoDep').value||'-';
  rows.push([nome, tipo, `R$ ${formatCurrency(valorPorDep)}`]);
  });
  baixarXLS("Calculo_Pensao", [header,...rows,[...depHeader],...rows.slice(1)]);
};

// ======================== Textos Portarias ========================
// Mostra/oculta áreas de geração de textos (portaria, cartas) e popula modelos
document.getElementById('btnTextoApos').onclick=()=>{
  document.getElementById('textoAposArea').classList.remove('hidden');
  document.getElementById('textoPensaoArea').classList.add('hidden');
  document.getElementById('portariaArea').classList.add('hidden');
  document.getElementById('cartaArea').classList.add('hidden');
};
document.getElementById('btnTextoPensao').onclick=()=>{
  document.getElementById('textoPensaoArea').classList.remove('hidden');
  document.getElementById('textoAposArea').classList.add('hidden');
  document.getElementById('portariaPensaoArea').classList.add('hidden');
  document.getElementById('cartaPensaoArea').classList.add('hidden');
};
document.getElementById('btnPortaria').onclick=()=>{
  document.getElementById('portariaArea').classList.remove('hidden');
  document.getElementById('cartaArea').classList.add('hidden');
};
document.getElementById('btnCarta').onclick=()=>{
  document.getElementById('cartaArea').classList.remove('hidden');
  document.getElementById('portariaArea').classList.add('hidden');
};
// Gera um texto de portaria padrão preenchendo campos do formulário
document.getElementById('gerarPortaria').onclick=()=>{
  const nome=document.getElementById('nomeServidor').value||'XXXX';
  const matricula=document.getElementById('matricula').value||'XXXX';
  const processo=document.getElementById('processoSEI').value||'XXXX';
  const pat=document.getElementById('numPAT').value||'XXX';
  const tipo=document.getElementById('tipoApos').value||'XXXX';
  const assinante=document.getElementById('assinante').value;
  
  // Verifica se o campo de assinatura foi selecionado
  if (!assinante || assinante === '') {
    document.getElementById('resultadoPortaria').value = 'Preencha todos os campos corretamente.';
    return;
  }
  
  // Define o cargo baseado no assinante
  let cargoAssinante, textoInicialCargo;
  if (assinante === 'Mirian Natsumi Eto') {
    cargoAssinante = 'Chefe da Divisão de Concessão e Manutenção de Benefícios do RPPU';
    textoInicialCargo = 'A CHEFE DA DIVISÃO DE CONCESSÃO E MANUTENÇÃO DE BENEFÍCIOS DO RPPU';
  } else {
    cargoAssinante = 'Chefe da Divisão de Concessão e Manutenção de Benefícios do RPPU - Substituta';
    textoInicialCargo = 'A CHEFE DA DIVISÃO DE CONCESSÃO E MANUTENÇÃO DE BENEFÍCIOS DO RPPU - Substituta';
  }
  
  const texto=`${textoInicialCargo}, da Coordenação de Atendimento do RPPU, vinculada à Coordenação-Geral de Centralização do RPPU, da Diretoria de Gestão de Pessoas do INSS, no uso das atribuições e a delegação de competência estabelecida pela PORTARIA DGP/INSS nº 05 de 18/04/2022, publicada no BSE de 19/04/2022, na PORTARIA MPS nº 3851 de 10/12/2024, publicada no DOU nº 240, de 13/12/2024, e Portaria/DGP/INSS nº 77, de 24/07/2025, publicada no BSE em 28/07/2025, resolve:\n\nConceder aposentadoria ${tipo} ao (a) servidor(a) ${nome}, matrícula SIAPE ${matricula}, ocupante do cargo de Técnico do Seguro Social, Classe S, Padrão V, do quadro de pessoal permanente do Instituto Nacional do Seguro Social, com fundamento no Artigo 20, § 2º, inciso I da Emenda Constitucional nº 103, de 2019 (Regra de Transição), com proventos integrais calculados com base na remuneração do servidor no cargo efetivo em que se der a aposentadoria e demais vantagens a que faz jus, na forma da lei. Observado o contido no processo SEI nº ${processo} e Protocolo de Requerimento PAT ${pat} do MEU INSS, e na forma da legislação vigente, declarando, em consequência, o referido cargo vago.\n\nEsta Portaria entra em vigor na data de sua publicação.\n\n\n${assinante}\n${cargoAssinante}`;
  document.getElementById('resultadoPortaria').value=texto;
  document.getElementById('resultadoPortaria').scrollIntoView({behavior:'smooth'});
};
document.getElementById('btnPortariaPensao').onclick=()=>{
  document.getElementById('portariaPensaoArea').classList.remove('hidden');
  document.getElementById('cartaPensaoArea').classList.add('hidden');
};
document.getElementById('btnCartaPensao').onclick=()=>{
  document.getElementById('cartaPensaoArea').classList.remove('hidden');
  document.getElementById('portariaPensaoArea').classList.add('hidden');
};
document.getElementById('gerarPortariaPensao').onclick=()=>{
  const nome=document.getElementById('nomePensionista').value||'XXXXX';
  const matricula=document.getElementById('matriculaFalecido').value||'XXXX';
  const processo=document.getElementById('processoSEIPensao').value||'XXXX';
  const pat=document.getElementById('numPATPensao').value||'XXX';
  const perc=document.getElementById('percentPensao').value||'50%';
  const texto=`Conceder pensão de ${perc} ao pensionista ${nome}, com base no servidor falecido matrícula SIAPE ${matricula}, conforme processo SEI nº ${processo} e Tarefa PAT nº ${pat}.`;
  document.getElementById('resultadoPortariaPensao').value=texto;
  document.getElementById('resultadoPortariaPensao').scrollIntoView({behavior:'smooth'});
};


});
