document.getElementById("formLogin").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("emailUser").value;
  const senha = document.getElementById("senhaUser").value;

  if (!email || !senha) {
    alert("Preencha os campos necessários!!!");
    return;
  }

  try {
    // Faz a busca dos usuários na API
    const resposta = await fetch("https://68195b3c1ac1155635049727.mockapi.io/api/projetofinal/users");
    const usuarios = await resposta.json();

    // Faz a verificação se existe um usuário com o email e senha fornecidos
    const usuarioEncontrado = usuarios.find(user => user.email === email && user.password === senha);

    if (usuarioEncontrado) {
      alert("Login realizado com sucesso!");
      window.location.href = "../home/index.html";
    } else {
      alert("Email ou senha incorretos.");
    }
  } catch (error) {
    alert("Erro ao conectar com o servidor !!!");
  }
});