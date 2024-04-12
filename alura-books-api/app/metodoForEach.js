const elementoParaInserirOsLivros = document.getElementById('livros');
const valorTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirOsLivrosNaTela(listaDeLivros) {
    elementoParaInserirOsLivros.innerHTML = '';
    listaDeLivros.forEach(livro => {
        valorTotalLivrosDisponiveis.innerHTML = '';
        let verificarDispnibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
        elementoParaInserirOsLivros.innerHTML += `
        <div class="livro">
        <img class="${verificarDispnibilidade}" src="${livro.imagem}" alt="Capa do livro Cangaceiro JavaScript" />
        <h2 class="livro__titulo">
        ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
        <span class="tag">${livro.categoria}</span>
        </div>
        </div>
        `;
    });
}   