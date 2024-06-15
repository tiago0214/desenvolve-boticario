const dataBase = require('../models');
const uuid = require('uuid');

class RoleService{
  async cadastrar (dto){
    const role = await dataBase.roles.findOne({
      where:{
        nome : dto.nome
      }
    })

    if(role){
      throw new Error('Role já cadastrada!');
    }

    try{
      const newRole = await dataBase.roles.create({
        id: uuid.v4(),
        nome : dto.nome,
        descricao : dto.descricao
      })

      return newRole;
    }catch(error){
      throw new Error('Erro ao cadastrar a role!')
    }

  }

  async buscarTodasAsRoles(){
    return dataBase.roles.findAll()
  }

  async buscarRolePorId(id){
    try {
      const role = await dataBase.roles.findOne({
        where:{
          id:id
        }
      })

      if(!role){
        throw new Error('Role não encontrada!')
      }

      return role
    } catch (error) {
      throw new Error('Erro ao procurar no servidor!')
    }
  }

  async deletarRolePorId(id){
    try {
      await dataBase.roles.destroy({
        where:{
          id:id
        }
      });
    } catch (error) {
      throw new Error('Erro ao deletar o usuario!');
    }
  }

  async editarRole(dto){
    const role = await this.buscarRolePorId(dto.id);

    if(!role){
      throw new Error('Role informada não cadastrada!');
    }

    try{
      role.nome = dto.nome
      role.descricao = dto.descricao

      await role.save();

      return role
    }catch(error){
      throw new Error('Erro ao editar a role.');
    }

  }
}

module.exports = RoleService;