import { Controller } from "./js/Controller.js";
import { Produto } from "./js/Produto.js";
import { fazFetch } from "./js/funcoesUtil.js";
import { getProdutos } from "./js/utilProduto.js";


( async () => {
    const controller = new Controller();
    
    await getProdutos( controller );

    // const produto = { 
    //     produto: "Tadalafila",
    //     preco: 100.00,
    //     imagem: "./Assets/tadala.png"
    // };
    // const respostaPost = controller.post( "produtos", produto );
} )()


