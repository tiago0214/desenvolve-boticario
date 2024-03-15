const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: null
    }]
}


function ligarParaTelefone(telefone1, telefone2) {
    console.log(`Ligando para ${telefone1}`);
    console.log(`Ligando para ${telefone2}`);
}

//ligarParaTelefone(...estudante.telefones);

const dadosEnvios = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

//console.log(dadosEnvios);

//mas um exemplo de espalhamento

const fichaGuerreiro = {
    nome: "Aragon",
    class: "Guerreiro"
}

const equipamentoGuerreiro = {
    espada: "Anduril",
    capa: "Capa elfica"
}

const guerreiro = { ...fichaGuerreiro, ...equipamentoGuerreiro }
console.log(guerreiro);