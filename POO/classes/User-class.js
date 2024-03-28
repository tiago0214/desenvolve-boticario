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

    get nome() {
        return this.#nome;
    };
    get email() {
        return this.#email;
    };
    get nascimento() {
        return this.#nascimento;
    };
    get role() {
        return this.#role;
    };
    get ativo() {
        return this.#ativo;
    };
    set nome(novoNome) {
        if (novoNome === "") {
            throw new Error("Campo vazio");
        }
        this.#nome = novoNome;
    }


    // #montaObj() {
    //     return ({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }

    exibirInfo() {
        return `${this.nome},${this.email},${this.nascimento},${this.role},${this.ativo}`;
    }
}

//const user = new User("Tiago", "tiago@tiago", "1-1-2021");
// console.log(user);
// console.log(user.exibirInfo());

// console.log(User.prototype.isPrototypeOf(user));