async function cadastrar(e) {
  e.preventDefault();
  var emailInput = document.getElementById("email").value;
  var senhaInput = document.getElementById("senha").value;
  var nomeInput = document.getElementById("nome").value;
  var urlBase = `https://68195b3c1ac1155635049727.mockapi.io/api/projetofinal/users`;

  var usuario = {
    name: nomeInput,
    email: emailInput,
    password: senhaInput,
  }

  if (!emailInput || !senhaInput || !nomeInput) {
    alert("Todos os campos são obrigatórios!");
    return;
  }

  try {
    await fetch(urlBase, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    alert("Usuario cadastrado com sucesso!");
    location.reload();

  } catch (error) {
    alert("Erro ao cadastrar usuário!");
  }
}

