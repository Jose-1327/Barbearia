document.querySelector(".cadastro-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Cadastro enviado com sucesso!");
  this.reset();
});
