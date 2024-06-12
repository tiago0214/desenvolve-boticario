import {  createHash  } from 'crypto';

class Usuario {
  constructor(nome,senha){
    this.nome = nome;
    this.senha = this.criaHash(senha);
  }
  criaHash(senha){
    return createHash('sha256').update(senha).digest('hex');
  }
  autentica(nome,senha){
    if(nome === this.nome && this.senha === this.criaHash(senha)){
      console.log('Usuário autenticado com sucesso!');
      return true
    }

    //console.log('Nome ou senha estão incorretos!');
    return false;
  }
}

const usuario = new Usuario('tiago','1214');

for(let senhaTeste = 0 ; senhaTeste < 10000; senhaTeste++){
  if(usuario.autentica('tiago',senhaTeste.toString()))
    console.log(`A senha é ${senhaTeste}`)
}