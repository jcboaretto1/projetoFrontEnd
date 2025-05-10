// recurso mostra o caminho do arquivo HTML
//  elemento do DOM mostrando o conteúdo
export async function carregarHtml(recurso, elemento) {
  const meuFetch = await fetch(recurso);
  const resposta = await meuFetch.text();
  elemento.innerHTML = resposta;
}
