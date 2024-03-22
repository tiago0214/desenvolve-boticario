function exibirInfo(name, email) {
    console.log(name, email);
}
const user1 = {
    name: "Shara",
    cellphone: "987"
}

const user = {
    name: "Tiago",
    cellphone: "123",
    email: "tiago@tiago",
    funcao: function (func) {
        func.apply(user1, [this.name, this.cellphone]);
    }
}
user.funcao(exibirInfo);
