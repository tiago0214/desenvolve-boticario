const estudantes = require('./estudantes.json');

function filtrarProPriedade(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco[propriedade];
    });
}

//console.log(filtrarProPriedade(estudantes, "cep"));

function filtrarProPriedadeProfessora(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    });
}

const estudantesSemCep = filtrarProPriedadeProfessora(estudantes, "cep");

console.log(estudantesSemCep);