const PermissaoService = require('../services/permissaoService');
const permissaoService = new PermissaoService();

class PermissaoController {

  static async cadastrarPermissao(req,res){
    const { nome, descricao } = req.body;

    try {
      const permissao = await permissaoService.cadastrarPermissao({nome,descricao});

      res.status(201).send(permissao);
    } catch (error) {
      res.status(400).send({message : error.message});
    }

  }

  static async buscarTodasPermissoes(req,res){
    try {
      const permissoes = await permissaoService.buscarTodasPermissoes();

      res.status(200).send(permissoes);
    } catch (error) {
      res.status(400).send({message:error.message})
    }
  };

  static async buscarPermissaoPorId(req,res){
    const { id } = req.params;

    try {
      const permissao = await permissaoService.buscarPermissaoPorId(id);

      res.status(200).send(permissao);
    } catch (error) {
      res.status(400).send({message:error.message})
    }
  };

  static async deletarPermissaoPorId(req,res){
    const { id } = req.params;

    try {
      await permissaoService.deletarPermissaoPorId(id);

      res.status(200).send({message:'Permissão deletada com sucesso!'})
    } catch (error) {
      res.status(400).send({message:error.message})
    }
  };

  static async editarPermissao(req,res){
    const { id } = req.params;
    const { nome, descricao } = req.body;

    try {
      const permissaoAtualizada = await permissaoService.editarPermissao({ id, nome, descricao });

      res.status(200).json(permissaoAtualizada);
    } catch (error) {
      res.status(401).send({message:error.message});
    }

  }
}

module.exports = PermissaoController;