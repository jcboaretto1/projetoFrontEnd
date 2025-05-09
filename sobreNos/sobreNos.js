import { carregarHtml } from "../GlobalThings/carregarHtml.js";
(async () => {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  await carregarHtml("../GlobalThings/header.html", header);
  await carregarHtml("../GlobalThings/footer.html", footer);
})();
