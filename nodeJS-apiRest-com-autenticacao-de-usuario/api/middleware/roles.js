const dataBase = require('../models');

const roles = (listaRoles) => {
  return async ( req, res, next ) => {
    const { usuarioId } = req;

    const usuario = await dataBase.usuarios.findOne({
      include:[
        {
          model: dataBase.roles,
          as: 'usuario_roles',
          attributes: ['id','nome']
        }
      ],
      where: {
        id: usuarioId
      }
    });

    if(!usuario){
      return res.status(401).send('Usuario não cadastrado!');
    };

    const rolesIguais = await usuario.usuario_roles.map( role => role.nome).some( role => listaRoles.includes(role));

    if(!rolesIguais){
      return res.status(401).send('Usuario não possui acesso a essa rota!');
    };

    return next();
  };
};

module.exports = roles;