function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => {
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }
    })//sintaxe estranha, poderia retornar direto, ao inves de tentar atribuir o valor para a variavel livrosComDesconto.

    return livrosComDesconto
}