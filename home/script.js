// import { Controller } from "./js/Controller.js";
import { getProdutos } from "./js/utilProduto.js";
import { carregarHtml } from "../GlobalThings/carregarHtml.js";

(async () => {
  // const controller = new Controller();

  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  await carregarHtml("../GlobalThings/header.html", header);
  await carregarHtml("../GlobalThings/footer.html", footer);

  await pegarUsuario();
  await getProdutos();
})();

async function pegarUsuario() {
  const usuario = localStorage.getItem("loginUsuario");
  const name = JSON.parse(usuario);
  console.log("usuario", name.name);
  const user = document.getElementById("user");
  user.innerHTML = name.name;
}
