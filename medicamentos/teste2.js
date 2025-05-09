import { Produto } from "./Produto.js";

async function getProdutos(controller) {
  const respostaProdutos = await controller.get("produtos");
  const divProdutos = document.getElementById("produtos");
  divProdutos.innerHTML = ""; // Limpar conteúdo anterior

  respostaProdutos.forEach((p) => {
    const produto = new Produto(p.id, p.produto, p.preco, p.imagem);
    const htmlProduto = montarHtmlProduto(produto);
    divProdutos.innerHTML += htmlProduto;
  });
}

function montarHtmlProduto(produto) {
  const divProduto = `
        <div class="produto">
            <img src="${produto.urlImagem}" alt="${produto.nome}">
            <div class="infoProduto">
                <p>${produto.nome}</p>
                <p class="preco">R$ ${produto.preco}</p>
            </div>
        </div>
    `;
  return divProduto;
}

export { getProdutos };
