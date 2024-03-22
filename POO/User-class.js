export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || "estudante"
        this.ativo = ativo
    }

    exibirInfo() {
        return `${this.nome}, ${this.email}`;
    }
}

const user = new User("Tiago", "tiago@tiago", "1-1-2021");
// console.log(user);
// console.log(user.exibirInfo());

// console.log(User.prototype.isPrototypeOf(user));