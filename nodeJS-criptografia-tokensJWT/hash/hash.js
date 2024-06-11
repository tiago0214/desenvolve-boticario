import {  createHash  } from 'crypto';

function criaHash(senha){
  return createHash('sha256').update(senha).digest('hex');
}

class Usuario {
  constructor(nome,senha){
    this.nome = nome;
    this.senha = criaHash(senha);
  }

  autentica(nome,senha){
    if(nome === this.nome && this.senha === criaHash(senha)){
      console.log('Usuário autenticado com sucesso!');
      return true
    }

    console.log('Nome ou senha estão incorretos!');
    return false;
  }
}

const usuario = new Usuario('tiago','minhaSenhaSegura');
console.log(usuario);

usuario.autentica('tiago','minhaSenhaSegura');

usuario.autentica('tiag','minhaSenhaSegura');