// import { Produto } from "./Produto.js";
import { fazFetch } from "./funcoesUtil.js";

async function getProdutos() {
  const url = "https://68195b3c1ac1155635049727.mockapi.io/api/projetofinal/produtos";
  const produtos = await fazFetch("GET", url);
  const divProdutos = document.getElementById("produtos");
  divProdutos.innerHTML = "";
  produtos.forEach((p) => {
    //   const produto = new Produto(p.id, p.produto, p.preco, p.imagem);
    const produto = {
      id: p.id,
      nome: p.produto,
      preco: p.preco,
      urlImagem: p.imagem,
    };
    const htmlProduto = montarHtmlProduto(produto);
    divProdutos.innerHTML += htmlProduto;
  });

  //   clickExcluirProduto(controller);
}

function montarHtmlProduto(produto) {
  const divProduto = `<div class="produto">
                            <p class="excluir" idProduto="${produto.id}">❌</p>
                            <img src="${produto.urlImagem}" alt="">

                            <div class="infoProduto">
                                <p>${produto.nome}</p>
                                <div class="estrelas">
                                    <img class= "estrela" src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="">
                                    <img class= "estrela" src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="">
                                    <img class= "estrela" src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="">
                                    <img class= "estrela" src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="">
                                    <img class= "estrela" src="https://cdn-icons-png.flaticon.com/512/541/541415.png" alt="">
                                </div>
                                <p>R$ ${produto.preco}</p>
                            </div>
                        </div>`;
  return divProduto;
}

function clickExcluirProduto(controller) {
  const botoesExcluirProduto = document.querySelectorAll(".excluir");
  botoesExcluirProduto.forEach((botao) => {
    botao.addEventListener("click", async (event) => {
      const idProduto = event.target.getAttribute("idProduto");
      if (confirm(`Deseja exluir o produto de id ${idProduto}`)) {
        const respostaDelete = await controller.delete("produtos", idProduto);
        await getProdutos(controller);
      }
    });
  });
}

export { getProdutos };
