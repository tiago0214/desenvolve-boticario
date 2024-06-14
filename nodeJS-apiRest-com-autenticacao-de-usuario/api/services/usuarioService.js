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

  async listarUsuarios (){
    const usuarios = await dataBase.usuarios.findAll();

    return usuarios;
  }

  async listarPorId(id){
    const usuarioEncontrado = await dataBase.usuarios.findOne({
      where:{
        id:id
      }
    })
    console.log(usuarioEncontrado);

    if(!usuarioEncontrado){
      throw new Error('Usuario não encontrado');
    }

    return usuarioEncontrado
  }

  async atualizarUsuario(dto){
    const usuarioSelecionado = await this.listarPorId(dto.id);
    try{
      usuarioSelecionado.nome = dto.nome;
      usuarioSelecionado.email = dto.email;

      await usuarioSelecionado.save();
      return usuarioSelecionado;
    }catch(error){
      throw new Error('Erro ao editar o usuário');
    }
  }

  async deletarUsuario(id){
    try{
      await dataBase.usuarios.destroy({
        where:{
          id:id
        }
      })
    }catch(error){
      throw new Error('Erro ao tentar deletar o usuário!');
    }
  }
}

module.exports = UsuarioService;