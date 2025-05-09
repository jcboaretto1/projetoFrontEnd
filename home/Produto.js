export class Produto {
  id = 0;
  nome = "";
  preco = 0.0;
  urlImagem = "";

  constructor(id, nome, preco, urlImagem) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.urlImagem = urlImagem;
  }

  validar() {
    if (!this.nome || !this.preco || !this.urlImagem) {
      alert("Preencha todos os campos!");
    }
  }
}
