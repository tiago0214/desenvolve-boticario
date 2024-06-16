const dataBase = require('../models');
const uuid = require('uuid');

class PermissaoService{
  async cadastrarPermissao(dto){
    const permissao = await dataBase.permissoes.findOne({
      where:{
        name:dto.nome
      }
    });

    if(permissao){
      throw new Error('Permissão já cadastrada!');
    }

    try{
      const newPermissao = await dataBase.permissoes.create({
        id:uuid.v4(),
        name: dto.nome,
        descricao: dto.descricao
      });

      return newPermissao;
    }catch(error){
      throw new Error('Erro ao cadastrar a permissão!');
    }
  }

  async buscarTodasPermissoes(){
    try {
      return dataBase.permissoes.findAll();
    } catch (error) {
      throw new Error('Erro ao buscar permissões');
    }
  };

  async buscarPermissaoPorId(id){
    try {
      const permissao = await dataBase.permissoes.findOne({
        where:{
          id:id
        }
      });

      return permissao;
    } catch (error) {
      throw new Error('Erro ao buscar a permissão')
    }
  }

  async deletarPermissaoPorId(id){
    const permissao = await this.buscarPermissaoPorId(id);

    if(!permissao){
      throw new Error('Permissao não encontrada');
    }
    try {
      await dataBase.permissoes.destroy({
        where:{
          id:id
        }
      })
    } catch (error) {
      throw new Error('Erro ao deletar a permissão')
    }
  };

  async editarPermissao(dto){
    const permissao = await this.buscarPermissaoPorId(dto.id);
    
    if(!permissao){
      throw new Error('Permissão não encontrada');
    }

    try {
      permissao.name = dto.nome
      permissao.descricao = dto.descricao

      await permissao.save();

      return permissao

    } catch (error) {
      throw new Error('Erro ao editar a permissão')
    }
  }
}

module.exports = PermissaoService;