/**
 * Lógica do Simulador de Solo - Agrinho 2026
 * Tema: Agro Forte, Futuro Sustentável
 */

// 1. Captura dos elementos da tela
const selectManejo = document.getElementById('tipoManejo');
const soloVisual = document.getElementById('solo-visual');
const areaResultado = document.getElementById('resultado');
const tituloRes = document.getElementById('res-titulo');
const textoRes = document.getElementById('res-texto');

/**
 * Função para atualizar a interface quando o usuário troca o tipo de solo
 */
function atualizarVisual() {
    const manejo = selectManejo.value;
    
    // Esconde o resultado anterior para uma nova simulação
    areaResultado.style.display = 'none';

    if (manejo === 'sustentavel') {
        soloVisual.className = 'solo-sustentavel';
        soloVisual.innerText = '🌱 Solo Protegido (Palhada)';
    } else {
        soloVisual.className = 'solo-exposto';
        soloVisual.innerText = '🟤 Solo Exposto';
    }
}

/**
 * Função principal que simula o impacto ambiental
 */
function simularChuva() {
    const manejo = selectManejo.value;
    
    // Torna a área de resultado visível
    areaResultado.style.display = 'block';

    // Lógica de decisão baseada no tema do Agrinho
    if (manejo === 'sustentavel') {
        exibirSucesso();
    } else {
        exibirAlerta();
    }
}

function exibirSucesso() {
    areaResultado.style.backgroundColor = '#e8f5e9'; // Verde claro
    areaResultado.style.borderLeft = '5px solid #2e7d32';
    
    tituloRes.innerText = "✅ Equilíbrio Alcançado!";
    tituloRes.style.color = "#1b5e20";
    
    textoRes.innerHTML = `
        <strong>Resultado:</strong> Infiltração de 95% da água.<br>
        <strong>Impacto:</strong> A cobertura vegetal serviu como um "escudo". 
        Não houve erosão, os nutrientes ficaram na terra e o lençol freático foi abastecido. 
        Este é o <strong>Futuro Sustentável</strong>!
    `;
}

function exibirAlerta() {
    areaResultado.style.backgroundColor = '#ffebee'; // Vermelho claro
    areaResultado.style.borderLeft = '5px solid #c62828';
    
    tituloRes.innerText = "⚠️ Desequilíbrio Ambiental!";
    tituloRes.style.color = "#b71c1c";
    
    textoRes.innerHTML = `
        <strong>Resultado:</strong> Apenas 20% de infiltração.<br>
        <strong>Impacto:</strong> A água correu pela superfície levando a camada fértil (erosão). 
        Isso causa o assoreamento de rios e exige mais gastos com fertilizantes. 
        A produção está em risco!
    `;
}

// Inicializa o visual corretamente ao carregar a página
window.onload = atualizarVisual;