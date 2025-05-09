async function editarUsuario(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const novaSenha = document.getElementById('novaSenha').value.trim();

  if (!email || !novaSenha) {
    alert("Preencha todos os campos!");
    return;
  }

  const url = `https://68195b3c1ac1155635049727.mockapi.io/api/projetofinal/users`;

  try {
    const resposta = await fetch(url);
    const usuarios = await resposta.json();

    const usuarioEncontrado = usuarios.find(user => user.email === email);

    if (!usuarioEncontrado) {
      alert("Usuário não encontrado!");
      return;
    }

    const updateUrl = `${url}/${usuarioEncontrado.id}`; // URL para atualizar o usuário

    // Faz a requisição PUT com os campos corretos
    const atualizar = await fetch(updateUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: novaSenha // nome correto do campo
      })
    });

    if (!atualizar.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    const dados = await atualizar.json();
    console.log("Usuário atualizado com sucesso:", dados);
    alert("Usuário atualizado com sucesso!");
    window.location.href = "../Login/index.html";
  } catch (erro) {
    console.error("Erro ao atualizar usuário:", erro);
    alert("Erro ao atualizar. Verifique o ID ou tente novamente.");
    location.reload();
  }
}

document.getElementById("formss").addEventListener("submit", editarUsuario);

