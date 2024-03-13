const alunos = ["Tiago", "Shara", "Camille", "Lorrany", "Souza"];
const notas = [5, 6, 7, 8, 4];

const aprovados = alunos.filter((aluno, indice) => {
    return notas[indice] >= 7;
});

console.log(aprovados);