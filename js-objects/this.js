let nome = "Tiago";
let idade = 29;


const pessoa = {
    nome: "Maria",
    idade: 30,
    apresentar: function () {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
};

pessoa.apresentar(); // Saída: Olá, meu nome é Maria e eu tenho 30 anos.

const pessoa2 = {
    nome: "Ti",
    idade: 20,
    apresentar: () => {
        console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`);
    }
};

pessoa2.apresentar();