const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Saruman"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Saruman


//preciso utilizar o método create(), para fazer uma cópio do outro objeto, porque objetos são valores por referência.