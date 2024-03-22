const user = {
    nome: "Tiago",
    idade: 29,
    email: "tiagoo@tiagoo",
    role: "estudante",
    ativo: true,
    exibirInfo: function () {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Shara",
    email: "shara@shara",
    role: "admin",
    criarCurso() {
        console.log("Curso criado");
    }
}
Object.setPrototypeOf(admin, user);
//eu preciso desse método, porque eu tenho dois objetos literais.
admin.criarCurso();
admin.exibirInfo();