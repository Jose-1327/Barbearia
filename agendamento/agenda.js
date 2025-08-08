// Função para formatar um número como valor monetário em BRL.
function formatarValor(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Aguarda o carregamento completo do DOM antes de executar o script.
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os checkboxes com a classe 'servico'.
  const checkboxes = document.querySelectorAll(".servico");
  
  // Adiciona um 'ouvinte' de evento de 'change' para cada checkbox.
  // Sempre que uma checkbox for marcada ou desmarcada, a função 'calcularTotal' é chamada.
  checkboxes.forEach(cb => cb.addEventListener("change", calcularTotal));

  // Função para calcular o valor total dos serviços selecionados.
  function calcularTotal() {
    let total = 0;
    checkboxes.forEach(cb => {
      // Se a checkbox estiver marcada, adiciona o seu valor ao total.
      if (cb.checked) {
        total += parseFloat(cb.value);
      }
    });
    // Atualiza o texto do elemento com o ID 'total' com o valor formatado.
    document.getElementById("total").textContent = formatarValor(total);
  }

  // Adiciona um 'ouvinte' de evento para o envio do formulário.
  document.querySelector(".cadastro-form").addEventListener("submit", function (e) {
    // Impede o comportamento padrão de envio do formulário.
    e.preventDefault();
    
    // Obtém o valor total exibido no campo 'Total'.
    const total = document.getElementById('total').textContent;
    
    // Exibe um alerta com a confirmação do agendamento e o valor total.
    alert(`Agendamento confirmado!\nTotal: ${total}`);
    
    // Reseta o formulário, limpando todos os campos.
    this.reset();
    
    // Reseta o valor total para R$0,00 após o envio do formulário.
    document.getElementById("total").textContent = "R$0,00";
  });
});