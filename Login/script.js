document.getElementById("formLogin").addEventListener("submit", async function (e) {
  e.preventDefault();

  //Pega os valores dos inputs, o trim() remove os espaços em branco do começo e do final da string
  const emailInput = document.getElementById("emailUser").value.trim();
  const senhaInput = document.getElementById("senhaUser").value.trim();

  //Para não deixar os campos em branco
  if (!emailInput || !senhaInput) {
    alert("Preencha os campos necessários!!!");
    return;
  }

  try {
    // Faz a busca dos usuários na API
    const resposta = await fetch("https://68195b3c1ac1155635049727.mockapi.io/api/projetofinal/users");

    if (!resposta.ok) {
      alert("Erro ao buscar os usuários!");
      return;
    }

    const usuarios = await resposta.json();

    // Verifica se há um usuário com email e senha correspondentes
    const usuarioEncontrado = usuarios.find(
      (user) => user.email.toLowerCase() === emailInput.toLowerCase() && user.password === senhaInput
    );

    // Se não encontrou, exibe mensagem de erro
    if (!usuarioEncontrado) {
      alert("Email ou senha inválidos!");
      return; //Interrompe aqui se estiver errado
    }

    // Se chegou aqui, o login foi bem-sucedido AMÉM
    alert("Login realizado com sucesso!");
    localStorage.setItem("loginUsuario", JSON.stringify(usuarioEncontrado));

    window.location.href = "../home/index.html"; //Redireciona para a página HOME
  } catch (error) {
    // Se ocorrer um erro no programa
    alert("Ocorreu um erro ao fazer login. Tente novamente mais tarde.");
    console.error("Erro:", error);
  }
});
