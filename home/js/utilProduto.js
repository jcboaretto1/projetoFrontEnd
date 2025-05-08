import { Produto } from "./Produto.js";

async function getProdutos( controller ) {
    const respostaProdutos = controller.get( "produtos" );
    const divProdutos = document.getElementById( "produtos" );
    divProdutos.innerHTML = "";
    await respostaProdutos.then( produtos => {
        produtos.forEach( p => {
            const produto = new Produto( p.id, p.produto, p.preco, p.imagem );
            const htmlProduto = montarHtmlProduto( produto );
            divProdutos.innerHTML += htmlProduto;
        });
    } )
    clickExcluirProduto( controller );
}

function montarHtmlProduto( produto ) {
    const divProduto = `<div class="produto">
                            <p class="excluir" idProduto="${produto.id}">❌</p>
                            <img src="${produto.urlImagem}" alt="">

                            <div class="infoProduto">
                                <p>${produto.nome}</p>
                                <div class="estrelas">
                                    <img class= "estrela" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwo984WuxZzFZG_DMJhBWgOmvqiyiqr7HBw&s" alt="">
                                    <img class= "estrela" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwo984WuxZzFZG_DMJhBWgOmvqiyiqr7HBw&s" alt="">
                                    <img class= "estrela" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwo984WuxZzFZG_DMJhBWgOmvqiyiqr7HBw&s" alt="">
                                    <img class= "estrela" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwo984WuxZzFZG_DMJhBWgOmvqiyiqr7HBw&s" alt="">
                                    <img class= "estrela" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwo984WuxZzFZG_DMJhBWgOmvqiyiqr7HBw&s" alt="">
                                </div>
                                <p>R$ ${produto.preco}</p>
                            </div>
                        </div>`;
    return divProduto;
}

function clickExcluirProduto( controller ) {
    const botoesExcluirProduto = document.querySelectorAll( ".excluir" );
    botoesExcluirProduto.forEach( botao => {
        botao.addEventListener( "click", async ( event ) => {
            const idProduto = event.target.getAttribute( "idProduto" );
            if( confirm( `Deseja exluir o produto de id ${idProduto}` ) ) {
                const respostaDelete = await controller.delete( "produtos", idProduto );
                await getProdutos( controller );
            }
        } )
    } )
}

export { getProdutos }