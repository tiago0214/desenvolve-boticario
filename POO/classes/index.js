import User from "./User-class.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Mariana", "m@m", "2021-1-1");
console.log(novoUser.nome);

// console.log(novoUser);

const novoAdmin = new Admin("Shara", "S@S.com", "2020-1-1");
console.log(novoAdmin.nome);
novoAdmin.nome = "";
console.log(novoAdmin.nome);
