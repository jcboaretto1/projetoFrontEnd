// IMPORTANDO AS FUNÇÕES DO PRODUTO E DO HEADER E FOOTER GLOBAL
import { getProdutos } from "./js/utilProduto.js";
import { carregarHtml } from "../GlobalThings/carregarHtml.js";

// PUXANDO A FUNÇÃO DO HEADER E FOOTER
(async () => {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  await carregarHtml("../GlobalThings/header.html", header);
  await carregarHtml("../GlobalThings/footer.html", footer);

  await pegarUsuario();
  await getProdutos();
})();

// FUNÇÃO PARA EXIBIR O NOME DE USUÁRIO NA TELA QUANDO FAZ O LOGIN
async function pegarUsuario() {
  const usuario = localStorage.getItem("loginUsuario");
  const name = JSON.parse(usuario);
  console.log("usuario", name.name);
  const user = document.getElementById("user");
  user.innerHTML = name.name;
}
