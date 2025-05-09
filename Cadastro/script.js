//função assincrona permite usar await para "esperar" até que algo aconteça
//(e) "evento" que acontece quando o botão for clicado 
async function cadastrar(e) { 
  //previnindo comportamento padrão do form para não recarregar a pagina ao clicar no botao 
  e.preventDefault();  
  //atribuindo os valores digitados no input a variaveis 
  var emailInput = document.getElementById("email").value; 
  var senhaInput = document.getElementById("senha").value;
  var nomeInput = document.getElementById("nome").value;
  //atribuindo o caminho da api a uma variavel 
  var urlBase = `https://68195b3c1ac1155635049727.mockapi.io/api/projetofinal/users`;

  //atribuindo todos os valores digitados no input em uma unica variavel 
  var usuario = {
    name: nomeInput,
    email: emailInput,
    password: senhaInput,
  }

  //proteção para não aceitar campos vazios 
  if (!emailInput || !senhaInput || !nomeInput) {
    alert("Todos os campos são obrigatórios!");
    return;
  }

  try {
    await fetch(urlBase, { //await "esperar" até que os dados sejam enviados para a api com fetch
      method: "POST", //"enviar"
      headers: {
        "Content-Type": "application/json", // no formato json
      },
      body: JSON.stringify(usuario), //pegando os valos da variavel usuario e colocando no formato json 
    });

    alert("Usuario cadastrado com sucesso!"); //alerta de sucesso 
    location.reload(); //limpando a pagina após os dados serem enviados 

  } catch (error) { //se houver erro 
    alert("Erro ao cadastrar usuário!"); //alerta de erro 
  }
}