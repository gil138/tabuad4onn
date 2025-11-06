// Função para voltar à tela inicial
function voltarTela() {
  window.location.href = "tela-inicial.html"; // coloque aqui o nome correto do arquivo da tela inicial
}

// Variável de pontuação
let pontos = 0;

// Função que calcula a pontuação com base no número de acertos
function calcularPontuacao() {
  // Verifica se a variável global existe 
  if (typeof window.perguntasAcertadas !== "undefined") {
    pontos = window.perguntasAcertadas * 5;
  } else {
    console.warn(" Variável 'perguntasAcertadas' não encontrada!");
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

  // Adiciona a função de voltar ao botão
  const botaoVoltar = document.getElementById("botao-voltar");
  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", voltarTela);
  }
});

//no lugar de perguntasacertadas voce coloca a variavel que armazena a quantidade de perguntas acertadas

