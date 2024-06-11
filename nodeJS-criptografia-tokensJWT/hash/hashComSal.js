import {  scryptSync, randomBytes, timingSafeEqual  } from 'crypto';

function criaHashComSal(senha){
  const sal = randomBytes(16).toString('hex');

  const senhaHasheada = scryptSync(senha,sal,64).toString('hex');

  return `${sal}:${senhaHasheada}`
}

class Usuario {
  constructor(nome,senha){
    this.nome = nome;
    [this.sal,this.senha] = criaHashComSal(senha).split(':')
  }

  autentica(nome,senha){
    if(this.nome === nome){
      const senhaPassada = scryptSync(senha,this.sal,64);
      const senhaReal = Buffer.from(this.senha,'hex');

      const hashesCorrespondem = timingSafeEqual(senhaPassada,senhaReal);

      if(hashesCorrespondem){
        console.log('Usuário autenticado com sucesso!');
        return true;
      }

      console.log('Usuário ou senha incorretos.')
      return false;
    }
  }
}
const user = new Usuario('Tiago','minhaSenha');

user.autentica('Tiago','minhaSenha');