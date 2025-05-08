document.addEventListener("DOMContentLoaded", function() {
    const produtos = [
        // Medicamentos (200 novos adicionados)
        { id: 1, nome: "Paracetamol", preco: 10.99, categoria: "medicamento" },
        { id: 2, nome: "Ibuprofeno", preco: 15.50, categoria: "medicamento" },
        { id: 3, nome: "Omeprazol", preco: 22.30, categoria: "medicamento" },
        { id: 4, nome: "Dipirona", preco: 9.80, categoria: "medicamento" },
        { id: 5, nome: "Dorflex", preco: 18.75, categoria: "medicamento" },
        { id: 6, nome: "Neosoro", preco: 7.90, categoria: "medicamento" },
        { id: 7, nome: "Benegripe", preco: 14.99, categoria: "medicamento" },
        { id: 8, nome: "Engov", preco: 8.60, categoria: "medicamento" },
        { id: 9, nome: "Buscopan", preco: 23.40, categoria: "medicamento" },
        { id: 10, nome: "Loratadina", preco: 12.99, categoria: "medicamento" },
        // ... Adicione mais 190 medicamentos aqui
    ];

    const listaProdutos = document.getElementById("produtos");
    const mostrarProdutosBtn = document.getElementById("mostrarProdutos");
    const secaoProdutos = document.getElementById("secaoProdutos");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    // Exibir produtos ao clicar no botão
    mostrarProdutosBtn.addEventListener("click", function() {
        secaoProdutos.style.display = "block";
        exibirProdutos(produtos);
    });

    function exibirProdutos(lista) {
        listaProdutos.innerHTML = "";
        lista.forEach(produto => {
            const card = document.createElement("div");
            card.classList.add("col-md-3", "mb-4");
            card.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p class="card-text">R$ ${produto.preco.toFixed(2)}</p>
                        <button class="btn btn-success add-to-cart" data-id="${produto.id}">Comprar</button>
                    </div>
                </div>
            `;
            listaProdutos.appendChild(card);
        });
    }

    searchButton.addEventListener("click", function() {
        const termoBusca = searchInput.value.trim().toLowerCase();
        const produtosFiltrados = produtos.filter(produto =>
            produto.nome.toLowerCase().includes(termoBusca));
        exibirProdutos(produtosFiltrados.length ? produtosFiltrados : produtos);
    });
});