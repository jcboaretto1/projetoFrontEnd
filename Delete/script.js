const urlBase = 'https://68195b3c1ac1155635049727.mockapi.io/api/projetofinal/users';

async function deleteUser(e) {
    e.preventDefault();
    var idUsuario = document.getElementById("deleteUserId").value.trim();
    
    if (!idUsuario) {
        alert("Por favor, insira um ID de usuário válido.");
        return;
    }

    try {
        // Primeiro verifica se o usuário existe
        const userResponse = await fetch(`${urlBase}/${idUsuario}`);
        if (!userResponse.ok) {
            alert("Usuário não encontrado!");
            return;
        }
        
        const userData = await userResponse.json();
        
        // Mostra informações do usuário para confirmação
        document.getElementById("userInfoContent").innerHTML = `
            <h3>Usuário encontrado:</h3>
            <p>ID: ${userData.id}</p>
            <p>Nome: ${userData.name || 'Não informado'}</p>
        `;
        
        document.getElementById("userInfo").style.display = "block";
        document.getElementById("confirmDelete").style.display = "block";
        
    } catch (error) {
        alert("Erro ao buscar usuário: " + error.message);
    }
}

async function confirmDeleteUser() {
    var idUsuario = document.getElementById("deleteUserId").value.trim();
    
    try {
        const response = await fetch(`${urlBase}/${idUsuario}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            alert("Usuário deletado com sucesso!!!");
            location.reload();
        } else {
            alert("Erro ao deletar usuário.");
        }
    } catch (error) {
        alert("Erro ao deletar usuário: " + error.message);
    }
}

function cancelDelete() {
    document.getElementById("userInfo").style.display = "none";
    document.getElementById("confirmDelete").style.display = "none";
}