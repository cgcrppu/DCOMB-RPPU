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

// Mapeamento de códigos de rubricas para denominações automáticas
// Usado para preencher automaticamente o nome quando o código for conhecido no acertos financeiros aposentadoria
const rubricasAuto = {
  "00001": "Vencimento Básico",
  "00013": "Anuênio",
  "00591": "GAE - GRATIF.ATIV.EXERC",
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
    // avoid double-binding listeners
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
      <select class="rubrica-acerto">
        <option>Sim</option>
        <option>Não</option>
      </select>
    </td>
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
        <option>Não</option>
      </select>
    </td>
  <td><input style="width:80px" class="rubrica-ativo monetary" type="text" placeholder="0,00"></td>
  <td><input style="width:80px" class="rubrica-inativo monetary" type="text" placeholder="0,00"></td>
  <td><input style="width:80px" class="rubrica-ajuste monetary" type="text" placeholder="0,00"></td>
    <td><button class="removerRubrica" title="Remover linha">🗑️</button></td>
  `;

  const sel = tr.querySelector('.rubrica-codigo-sel');
  const input = tr.querySelector('.rubrica-codigo');

  // Quando usuário escolher uma opção no select, atualiza o input de código
  sel.addEventListener('change', function() {
    if (sel.value === "OUTRA") {
      input.value = "";
      input.focus();
    } else {
      input.value = sel.value;
      atualizarRubricaAuto();
    }
  });
  // Quando o usuário digitar no input de código, ajusta o select se reconhecido
  input.addEventListener('input', function() {
    if (rubricasOpcoes.includes(input.value)) {
      sel.value = input.value;
    } else {
      sel.value = "OUTRA";
    }
    atualizarRubricaAuto();
  });

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
    } else {
      // Se não for automático, deixa em branco para o usuário preencher
      tr.querySelector('.rubrica-valorpadrao').value = "";
    }
  }

  // Atualiza automaticamente todas as linhas da tabela quando parâmetros de vencimento mudam
  ['cargoApos','classeApos','padraoApos','jornadaApos'].forEach(id=>{
    document.getElementById(id).addEventListener('change',()=>{
      document.querySelectorAll('#tabelaRubricas tbody tr').forEach(linha=>{
        const codigo = linha.querySelector('.rubrica-codigo').value;
        // Atualiza denominação
        linha.querySelector('.rubrica-denom').value = rubricasAuto[codigo] || "";
        // Atualiza valor padrão
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
        } else {
          linha.querySelector('.rubrica-valorpadrao').value = "";
        }
      });
    });
  });

  tr.querySelector('.removerRubrica').onclick = function() {
    tr.remove();
  };

  atualizarRubricaAuto();
  return tr;
}
document.getElementById('adicionarRubrica').onclick = function() {
  const row = criarLinhaRubrica();
  document.querySelector('#tabelaRubricas tbody').appendChild(row);
  // initialize monetary formatting for inputs in the new row
  initMonetaryInputs();
};
if (document.querySelector('#tabelaRubricas tbody').children.length === 0) {
  const row = criarLinhaRubrica();
  document.querySelector('#tabelaRubricas tbody').appendChild(row);
  initMonetaryInputs();
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
  resultado += `\nGratificação Natalina proporcional:\nMeses considerados: ${mesesDesdeInicioAno} - Valor: R$ ${formatCurrency(gratificacaoNatalProporcional)}\n`;

  // Valor de adiantamento do 13º (se informado). Só é considerado quando óbito no 2º semestre (mês >= 6)
  const gratNatalVal = parseMonetary(document.getElementById('posObitoGratNatal')?.value) || 0;
  if (mes >= 6) {
    resultado += `Adiantamento Grat. Natal (informado): R$ ${formatCurrency(gratNatalVal)}\n`;
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

  resultado += `\nValor base (dias + adicional se houver): R$ ${formatCurrency(baseCobrado)}\n`;
  if (mes >= 6) {
    resultado += `Valor final após subtrair Gratificação Natalina proporcional e somar adiantamento Grat. Natal (se houver): R$ ${formatCurrency(valorFinal)}\n`;
  } else {
    resultado += `Valor final após subtrair Gratificação Natalina proporcional: R$ ${formatCurrency(valorFinal)}\n`;
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
  const header = ["Rubrica (código)","Denominação","Valor padrão","Acerto Financeiro?","Aplica em","Incide PSS?","Ativo (R$)","Inativo (R$)","Ajuste (R$)"];
  const rows = [];
  document.querySelectorAll('#tabelaRubricas tbody tr').forEach(tr=>{
    const r = [
      tr.querySelector('.rubrica-codigo').value,
      tr.querySelector('.rubrica-denom').value,
      // valor padrão pode vir formatado
      (function(){ const v=tr.querySelector('.rubrica-valorpadrao').value; return v?parseMonetary(v).toFixed(2):"" })(),
      tr.querySelector('.rubrica-acerto').value,
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
  const texto=`A CHEFE DA DIVISÃO DE CONCESSÃO E MANUTENÇÃO DE BENEFÍCIOS DO RPPU - Substituta, da Coordenação de Atendimento do RPPU, vinculada à Coordenação-Geral de Centralização do RPPU, da Diretoria de Gestão de Pessoas do INSS, no uso das atribuições e a delegação de competência estabelecida pela PORTARIA DGP/INSS nº 05 de 18/04/2022, publicada no BSE de 19/04/2022, na PORTARIA MPS nº 3851 de 10/12/2024, publicada no DOU nº 240, de 13/12/2024, e Portaria/DGP/INSS nº 77, de 24/07/2025, publicada no BSE em 28/07/2025, resolve:\n\nConceder aposentadoria ${tipo} ao (a) servidor(a) ${nome}, matrícula SIAPE ${matricula}, ocupante do cargo de Técnico do Seguro Social, Classe S, Padrão V, do quadro de pessoal permanente do Instituto Nacional do Seguro Social, com fundamento no Artigo 20, § 2º, inciso I da Emenda Constitucional nº 103, de 2019 (Regra de Transição), com proventos integrais calculados com base na remuneração do servidor no cargo efetivo em que se der a aposentadoria e demais vantagens a que faz jus, na forma da lei. Observado o contido no processo SEI nº ${processo} e Protocolo de Requerimento PAT ${pat} do MEU INSS, e na forma da legislação vigente, declarando, em consequência, o referido cargo vago.\n\nEsta Portaria entra em vigor na data de sua publicação.`;
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
