import {  generateKeyPairSync, createSign, createVerify  } from 'crypto';

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

let dados = 'Essa mensagem vai sofrer alteração';

const assinador = createSign('rsa-sha256');

assinador.update(dados);

const assinatura = assinador.sign(privateKey,'hex');
console.log(assinatura);

//alterando o documento para retornar false
dados += ' -> alterando';

//enviar o documento, assinatura e chave pública para a pessoa.

const verificador = createVerify('rsa-sha256');
verificador.update(dados)

const ehVerificado = verificador.verify(publicKey,assinatura,'hex');

console.log(ehVerificado);