// Função para mostrar o modal específico
function mostrarModal(numeroModal, imgSrc) {
  // Seleciona o modal correto
  const modal = document.getElementById(`modal${numeroModal}`);
  const modalImg = document.getElementById(`modalImage${numeroModal}`);

  // Define a imagem no modal
  modalImg.src = imgSrc;

  // Exibe o modal
  modal.style.display = "block";
}

// Função para fechar o modal específico
function fecharModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none"; // Esconde o modal
}
// Fechar modal ao clicar fora do conteúdo
window.onclick = function (event) {
  for (let i = 1; i <= 6; i++) {
    const modal = document.getElementById(`modal${i}`);
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
};
