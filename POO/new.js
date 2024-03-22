// function User(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//     this.telefone

//     this.exibirInfo = function () {
//         console.log(`Meu nome: ${this.nome}, minha idade: ${this.idade}`)
//     }
// }
// const tiago = new User("Tiago", 29);
// const shara = new User("Shara", 27);
// tiago.telefone = "123";
// console.log(tiago);
// console.log(shara);
// // tiago.exibirInfo();
// //O que o JS vai fazer é,primeiro: Criar um novo objeto, e depois checar a cadeia de prototipos, o que precisa ser encaixado. No exemplo acima, o que tem que ser encaixado, são os métodos é as propriedades de User

// function Admin(role) {
//     User.call(this, "Camille", "camille@camiller");
//     this.role = role || "estudante";
// }

// Admin.prototype = Object.create(User.prototype); //nessa linha, eu criei um objeto para ser protótipo da minha função construtora Admin.
//outra coisa, O JS: sempre cria protótipo a partir de um objeto literal ou uma função construtora.
//por isso, eu coloquei como o protótipo da minha função aqui, O Object.create(User.prototype); ESSE código cria um objeto utilizando o protótipo do outro objeto(que esta na minha função construtora)// seu eu tivesse um objeto literal, eu não precisava utilizar a palavra prototype para a função construtora User.
// const novoUser = new Admin("admin");
// console.log(novoUser);


const user = {
    init: function (nome, email) {
        this.nome = nome;
        this.emai = email;
    },
    exibirInfo: function (nome) {
        console.log(this.nome) //se eu utilizar o this, mesmo que eu passo o parâmetro ele não vai usar.
    }
}

const novoUser = Object.create(user);
novoUser.init("Shara", 27);
//uma forma de contonar, para ter uma função construtora. desde o inicio. é utilizar uma função que geralmente chamamos de init



novoUser.exibirInfo("Tiago");
//método para verificar ser é protótipo.
console.log(user.isPrototypeOf(novoUser));