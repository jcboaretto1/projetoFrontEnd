
document.getElementById("formLogin").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!email || !senha) {
    alert("Preencha os campos necessários!!!");
    return;
  }

  try { //COLOCAR A API AQUI
    const resposta = await fetch("https://68195b3c1ac1155635049727.mockapi.io/api/projetofinal/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Bearer: token.token
      },
      body: JSON.stringify({ email, senha }),
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      alert("Login realizado com sucesso!");
      window.location.href = "../home/index.html";
    } else {
      alert("Erro ao realizar login!!! ");
    }
  } catch (error) {
    alert("Erro ao conectar com o servidor !!!");
  }
});
