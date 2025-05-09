document.addEventListener("DOMContentLoaded", async () => {
  const url = "https://68195b3c1ac1155635049727.mockapi.io/api/projetofinal/produtos";
  const container = document.getElementById("produtos");

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro ao acessar a API");

    const produtos = await response.json();

    if (!Array.isArray(produtos) || produtos.length === 0) {
      container.innerHTML = "<p>Nenhum produto encontrado.</p>";
      return;
    }

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
