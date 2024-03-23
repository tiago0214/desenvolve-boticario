export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || "estudante"
        this.#ativo = ativo
    }

    #montaObj() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibirInfo() {
        const meuOb = this.#montaObj();
        return this.#nome;
    }
}

//const user = new User("Tiago", "tiago@tiago", "1-1-2021");
// console.log(user);
// console.log(user.exibirInfo());

// console.log(User.prototype.isPrototypeOf(user));