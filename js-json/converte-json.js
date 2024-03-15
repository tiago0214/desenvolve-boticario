const estudante = require('./estudante.json');

const estudanteString = JSON.stringify(estudante);
console.log(estudanteString);
console.log(typeof estudanteString);

const estudanteObj = JSON.parse(estudanteString);
console.log(estudanteObj);
console.log(typeof estudanteObj);

//JSON é uma biblioteca interna do Node
//temos o método, strigify: converte um objeto em string
//método, parse : converte uma string que esta no formato Json em um Object