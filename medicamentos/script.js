import { carregarHtml } from "../GlobalThings/carregarHtml.js";

// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", async () => {
  // Carregando o conteúdo do header e footer
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  await carregarHtml("../GlobalThings/header.html", header);
  await carregarHtml("../GlobalThings/footer.html", footer);

  // url da api dos produtos
  const url = "https://68195b3c1ac1155635049727.mockapi.io/api/projetofinal/produtos";
  const container = document.getElementById("produtos");

  // buscando resposta api
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro ao acessar a API");

    // transformando ele para json
    const produtos = await response.json();

    if (!Array.isArray(produtos) || produtos.length === 0) {
      container.innerHTML = "<p>Nenhum produto encontrado.</p>";
      return;
    }

    // criando e exibindo produtos dentro das caixinhas div
    container.innerHTML = produtos
      .map(
        (produto) => `
        <div class="produto">
          <img src="${produto.imagem}" alt="${produto.produto}" />
          <div class="info">
            <p class="nome">${produto.produto}</p>
            <p class="preco">R$ ${parseFloat(produto.preco).toFixed(2)}</p>
          </div>
        </div>
      `
      )
      .join("");
  } catch (error) {
    container.innerHTML = "<p>Erro ao carregar produtos. Verifique o console.</p>";
    console.error("Erro:", error);
  }
});
