/* Documento vai carregar */
document.addEventListener('DOMContentLoaded', function() {

  /* Botão de Jogar */
  const btnJogar = document.getElementById('btnJogar');
  if (btnJogar) {
    btnJogar.addEventListener('click', function() {
      window.location.href = 'modo.html';
    });
  }

  /* Modo Fácil */
  const btnFacil = document.getElementById('btnFacil');
  if (btnFacil) {
    btnFacil.addEventListener('click', function() {
      window.location.href = 'facil.html?modo=facil';
    });
  }

  /* Modo dificil */
  const btnDificil = document.getElementById('btnDificil');
  if (btnDificil) {
    btnDificil.addEventListener('click', function() {
      window.location.href = '?modo=dificil';
    });
  }

  /* Botão de voltar para o inicio */
  const btnVoltar = document.getElementById('btnVoltar');
  if (btnVoltar) {
    btnVoltar.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }
  /*Ver pontos*/
   const btnPontos = document.getElementById('btnPontos');
  if (btnPontos) {
    btnPontos.addEventListener('click', function() {
      window.location.href = 'pontos.html';
    });
  }

  const btnVoltar2 = document.getElementById('btnVoltar2');
  if (btnVoltar2) {
    btnVoltar2.addEventListener('click', function() {
      window.location.href = 'modo.html';
    });
  }
});