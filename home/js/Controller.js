import { fazFetch } from "./funcoesUtil.js";

export class Controller {
    #urlBase = "https://68195b3c1ac1155635049727.mockapi.io/api/projetofinal";
    
    async get( endpoint ) {
        return await fazFetch( "GET", `${this.#urlBase}/${endpoint}` );
    }

    async post( endpoint, dados ) {
        return await fazFetch( "POST", `${this.#urlBase}/${endpoint}`, dados );
    }

    async put( endpoint, dados ) {
        return await fazFetch( "PUT", `${this.#urlBase}/${endpoint}`, dados );
    }

    async delete( endpoint, id ) {
        return await fazFetch( "DELETE", `${this.#urlBase}/${endpoint}/${id}`, { id:id } );
    }
}