import User from "./User-class.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(nomeEstudante, curso) {
        return `O aluno ${nomeEstudante}, passou no curso de ${curso}`
    }
}
// const novoDocente = new Docente("Camille", "camille@camille", "2018-02-05");
// console.log(novoDocente);
// console.log(novoDocente.aprovaEstudante("Shara", "Inglês"));
// console.log(novoDocente.exibirInfo());