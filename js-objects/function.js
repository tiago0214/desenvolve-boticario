const objetoPessoa = {
    nome: "Tiago",
    idade: 29,
    cpf: "1293888129",
    turma: "JavaScript",
    media: 7.5,
    estaAprovado: function (mediaBase) {
        return this.media >= mediaBase ? true : false;
    }
}

console.log(objetoPessoa.estaAprovado(7));
