const objetoPessoa = {
    nome: "Tiago",
    idade: 29,
    cpf: "1293888129",
    turma: "JavaScript"
}

function exibirObjetos(objeto, chaveParaExibir) {
    return objeto[chaveParaExibir];
}
console.log(exibirObjetos(objetoPessoa, "cpf"));