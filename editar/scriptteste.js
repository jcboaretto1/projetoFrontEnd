async function editarUsuario(event) {
    event.preventDefault();
  
    const userId = document.getElementById('userId').value.trim();
    const novoEmail = document.getElementById('novoEmail').value.trim();
    const novaSenha = document.getElementById('novaSenha').value.trim();
  
    if (!userId || !novoEmail || !novaSenha) {
      alert("Preencha todos os campos!");
      return;
    }
  
    const url = `https://68195b3c1ac1155635049727.mockapi.io/api/projetofinal/users/${userId}`;
  
    try {
      // Verifica se o usuário existe primeiro
      const verificar = await fetch(url);
      if (!verificar.ok) {
        alert("Usuário não encontrado. Verifique o ID.");
        return;
      }
  
      // Faz a requisição PUT com os campos corretos
      const resposta = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: novoEmail,
          password: novaSenha // nome correto do campo
        })
      });
  
      if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`);
      }
  
      const dados = await resposta.json();
      console.log("Usuário atualizado com sucesso:", dados);
      alert("Usuário atualizado com sucesso!");
    } catch (erro) {
      console.error("Erro ao atualizar usuário:", erro);
      alert("Erro ao atualizar. Verifique o ID ou tente novamente.");
    }
  }
  
  document.getElementById("formss").addEventListener("submit", editarUsuario);
  
  