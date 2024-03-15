const estudantes = require('./estudantes.json');

function buscaEstudante(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

const estudanteEncontrado = buscaEstudante(estudantes, 'telefone', "58996279799");

console.log(estudanteEncontrado);
