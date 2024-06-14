const UsuarioService = require('../services/usuarioService.js');

const usuarioService = new UsuarioService();

class UsuarioController {

  static async cadastrar(req,res){
    const { nome, email, senha } = req.body;

    try{
      const usuario = await usuarioService.cadastrar({ nome, email, senha });
  
      res.status(201).send(usuario);
    }catch(error){
      res.status(400).send({ message:error.message })
    }
  }

  static async listasTodosOsUsuarios(req,res){
    try{
      const usuarios = await usuarioService.listarUsuarios();

      res.status(200).send(usuarios)
    }catch(error){
      res.status(400).send({message:error.message})
    }
  }

  static async listarUsuarioPorId(req,res){
    try{
      const { id } = req.params
      const usuario = await usuarioService.listarPorId(id);

      res.status(200).json(usuario);
    }catch(error){
      res.status(400).send({message:error.message})
    }
  }

  static async atualizarUsuario (req,res){
    try{
      const { id } = req.params;
      const {nome,email} = req.body;
      const usuarioAtualizado = await usuarioService.atualizarUsuario({id,nome,email});

      res.status(200).json(usuarioAtualizado);
    }catch(error){
      res.status(400).send({message:error.message})
    }
  }

  static async deletarUsuario(req,res){
    try{
      const { id } = req.params;
      await usuarioService.deletarUsuario(id);
      res.status(200).send({message:`Usuário deletado com sucesso!`});
    }catch(error){
      res.status(400).send({message:error.message});
    }
  }

}

module.exports = UsuarioController;