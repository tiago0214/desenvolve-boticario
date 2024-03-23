import User from "./User-class.js"

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas) {
        return `O curso ${nomeDoCurso} com ${vagas} vagas, foi criado!`;
    }
}
// const novoAdmin = new Admin("Souza", "S@S", "1760-7-8");
// console.log(novoAdmin.criarCurso("JS", 20));
// console.log(novoAdmin);