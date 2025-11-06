// ======== SOM ========
const botaoSom = document.getElementById("botaoSom");
let somAtivo = true;

botaoSom.addEventListener("click", () => {
  somAtivo = !somAtivo;
  botaoSom.classList.toggle("ativo");
  botaoSom.textContent = somAtivo ? "🔊" : "🔇";
  localStorage.setItem("somAtivo", somAtivo);
});

// ======== BRILHO ========
const controleBrilho = document.getElementById("controleBrilho");

controleBrilho.addEventListener("input", () => {
  const brilho = controleBrilho.value;
  document.body.style.filter = `brightness(${brilho})`;
  localStorage.setItem("brilhoTela", brilho);
});

// Carrega configurações salvas
window.addEventListener("load", () => {
  const somSalvo = localStorage.getItem("somAtivo");
  const brilhoSalvo = localStorage.getItem("brilhoTela");

  if (somSalvo !== null) {
    somAtivo = somSalvo === "true";
    botaoSom.classList.toggle("ativo", somAtivo);
    botaoSom.textContent = somAtivo ? "🔊" : "🔇";
  }

  if (brilhoSalvo !== null) {
    controleBrilho.value = brilhoSalvo;
    document.body.style.filter = `brightness(${brilhoSalvo})`;
  }
});

// ======== VOLTAR ========
document.getElementById("botaoVoltar").addEventListener("click", () => {
  window.location.href = "tela-inicial.html";
});
