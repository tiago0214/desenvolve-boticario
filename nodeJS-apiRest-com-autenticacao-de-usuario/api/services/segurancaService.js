const dataBase = require('../models');
const Sequelize = require('sequelize');

class SegurancaService {
  async cadastrarAcl(dto){
    const usuario = await dataBase.usuarios.findOne({
      include:[
        {
          model: dataBase.roles,
          as: 'usuario_roles',
          attributes: ['id', 'nome', 'descricao']
        },
        {
          model: dataBase.permissoes,
          as: 'usuario_permissoes',
          attributes: ['id','name', 'descricao']
        }
      ],
      where:{
        id: dto.usuarioId
      }
    });

    if(!usuario){
      throw new Error('Usuario não cadastrado!');
    }

    const rolesCadastradas = await dataBase.roles.findAll({
      where:{
        id:{
          [Sequelize.Op.in]: dto.roles
        }
      }
    });

    const permissoesCadastradas = await dataBase.permissoes.findAll({
      where:{
        id:{
          [Sequelize.Op.in]: dto.permissoes
        }
      }
    })

    await usuario.removeUsuario_roles(usuario.usuarios_role);
    await usuario.removeUsuario_permissoes(usuario.usuarios_permissoes);

    await usuario.addUsuario_roles(rolesCadastradas);
    await usuario.addUsuario_permissoes(permissoesCadastradas);

    const novoUsuario = await dataBase.usuarios.findOne({
      include:[
        {
          model: dataBase.roles,
          as: 'usuario_roles',
          attributes: ['id', 'nome', 'descricao']
        },
        {
          model: dataBase.permissoes,
          as: 'usuario_permissoes',
          attributes: ['id','name', 'descricao']
        }
      ],
      where:{
        id: usuario.id
      }
    })

    return novoUsuario;
  }
}

module.exports = SegurancaService;