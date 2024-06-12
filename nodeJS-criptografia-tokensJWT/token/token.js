import jwt from 'jsonwebtoken';
//posso usar o randomBytes, para gerar a chave;
const chaveSecreta = 'minhaChaveSuperSecreta';

const token = jwt.sign({
  nome:"Tiago",
  curso:"NodeJS e segurança"
},chaveSecreta);

console.log(token);

const tokenDecodificado = jwt.verify(token,chaveSecreta);
console.log(tokenDecodificado);