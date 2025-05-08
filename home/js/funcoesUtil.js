function fazFetch( metodo, url, dados = null ) {
    let configMetodo = {};  
    if( metodo !== "GET" ) {
        configMetodo = {
            method: metodo, // Método padrão é GET
            body: JSON.stringify( dados ),
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        };
    }

    const meuFetch = fetch( url, configMetodo )
    .then( resposta => verificaErro( resposta ) ) 
    .then( resposta => resposta.json())
    .catch( ( erro ) => {
        console.log( erro );
    } )
    return meuFetch;
}

function verificaErro( resposta ) {
    if( !resposta.ok ) {
        console.log( "Erro" );
        return;
    }
    return resposta;
}


export { fazFetch }