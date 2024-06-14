const dataBase = require('../models');
const hash = require('bcryptjs');
const uuid = require('uuid');

class UsuarioService {
  async cadastrar(dto){
    const usuario = await dataBase.usuarios.findOne({
      where:{
        email : dto.email
      }
    });

    if(usuario){
      throw new Error("Usuário já cadastrado!");
    }
    try {
      const senhaHash = await hash.hash(dto.senha,8);
  
      const novoUsuario = dataBase.usuarios.create({
        id: uuid.v4(),
        nome: dto.nome,
        email: dto.email,
        senha: senhaHash
      });
  
      return novoUsuario;
    } catch (error) {
      throw new Error('Erro ao cadastrar o usuário!');
    }

  }
}

module.exports = UsuarioService;