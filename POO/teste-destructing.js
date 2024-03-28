

function nome(nomeCompleto) {
    console.log(nomeCompleto.split(" "));
    let [nome, ...sobrenome] = nomeCompleto.split(" ")
    console.log(nome);
    console.log(sobrenome);
}

nome("Tiago Souza Dias")