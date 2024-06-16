'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      usuarios.belongsToMany(models.roles,{
        through: models.usuarios_roles,
        as: 'usuario_roles',
        foreignKey: 'usuario_id' 
      });

      usuarios.belongsToMany(models.permissoes,{
        through: models.usuarios_permissoes,//acredito que seja onde esta sendo concretizado o relacionamento//ou seja
        //o relacionamento entre as tabelas usuarios e permissoes esta sendo concretizado em usuarios_permissoes
        as: 'usuario_permissoes',
        foreignKey: 'usuario_id'
      })
    }
  }
  usuarios.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuarios',
    defaultScope:{
      attributes:{
        exclude: ['senha']
      }
    }
  });
  return usuarios;
};