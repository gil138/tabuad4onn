// Função para voltar à tela inicial
function voltarTelaInicial() {
  window.location.href = "tela-inicial.html"; 
}

// Função para voltar à tela de modos
function voltarTelaModos() {
  window.location.href = "tela-modos.html"; 
}

// Variável de pontuação
let pontos = 0;

// Função que calcula a pontuação com base no número de acertos
function calcularPontuacao() {
  // Verifica se a variável global 'perguntasAcertadas' existe 
  if (typeof window.perguntasAcertadas !== "undefined") {
    pontos = window.perguntasAcertadas * 5;
  } else {
    console.warn("Variável 'perguntasAcertadas' não encontrada!");
    pontos = 0;
  }

  // Mostra o valor no HTML (no elemento com id="pontuacao")
  const pontuacaoElemento = document.getElementById("pontuacao");
  if (pontuacaoElemento) {
    pontuacaoElemento.textContent = pontos;
  }
}

// Executa quando o conteúdo da página terminar de carregar
window.addEventListener("DOMContentLoaded", () => {
  calcularPontuacao();

  // Adiciona a função de voltar aos botões
  const botaoVoltarModos = document.getElementById("botao-voltarmodos");
  if (botaoVoltarModos) {
    botaoVoltarModos.addEventListener("click", voltarTelaModos);
  }

  const botaoVoltarInicial = document.getElementById("botao-voltarinicial");
  if (botaoVoltarInicial) {
    botaoVoltarInicial.addEventListener("click", voltarTelaInicial);
  }
});
