function promessa(bool) {
    const x = bool;
    return new Promise((resolve, reject) => {
        if (!x) {
            reject(new Error("Falha na promessa"));
        }
        resolve("Sucesso na promessa");
    })
}

function exibirResposta(texto) {
    console.log(texto);
}

promessa(true)
    .then(exibirResposta);