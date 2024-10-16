function enviarFormulario() {
    // Obtém os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const escolaridade = document.getElementById("escolaridade").value;
    const cidade = document.getElementById("cidade").value;
    const sexo = document.getElementById("sexo").value;
  
    // Exibe a mensagem de agradecimento
    document.getElementById("mensagem").style.display = "block";
  
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor, se necessário
    // Por exemplo, usando AJAX para enviar os dados para um arquivo PHP
  }