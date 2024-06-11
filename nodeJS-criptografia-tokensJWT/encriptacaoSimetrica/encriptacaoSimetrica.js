import {  createCipheriv,  randomBytes,  createDecipheriv  } from 'crypto';

const mensagem = 'Uma mensagem qualquer';

const chave = randomBytes(32);
const vi = randomBytes(16);
const cifra = createCipheriv('aes256',chave,vi);

const mensagemCifrada = cifra.update(mensagem,'utf-8','hex') + cifra.final('hex');

console.log(mensagemCifrada);

//transmissão dos dados -> chave,vi,mensagem cifrada.

const decifra = createDecipheriv('aes256',chave,vi);

const mensagemDecifrada = decifra.update(mensagemCifrada,'hex','utf-8') + decifra.final('utf-8');

console.log(mensagemDecifrada.toString('utf-8'));