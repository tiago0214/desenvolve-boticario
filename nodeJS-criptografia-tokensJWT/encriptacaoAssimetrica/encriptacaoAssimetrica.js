import {  generateKeyPairSync, publicEncrypt, privateDecrypt  } from 'crypto';

const {  privateKey,publicKey  } = generateKeyPairSync('rsa',{
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

const  mensagemCriptografada = publicEncrypt(
  publicKey,
  Buffer.from('Mensagem mais que secreta!')
);

console.log(mensagemCriptografada.toString('hex'));

//transmissão ------------------------------------

const mensagemDescriptografada = privateDecrypt(
  privateKey,
  mensagemCriptografada
)

console.log(mensagemDescriptografada.toString('utf-8'));