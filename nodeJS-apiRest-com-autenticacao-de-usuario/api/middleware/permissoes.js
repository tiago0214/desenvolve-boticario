const dataBase = require('../models');

const permissoes = (listaDePermissoes) => {
  return async (req, res, next) => {
    const { usuarioId } = req;

    const usuario = await dataBase.usuarios.findOne({
      include:[
        {
          model: dataBase.permissoes,
          as: 'usuario_permissoes',
          attributes: ['id','name']
        }
      ],
      where:{
        id: usuarioId
      }
    });

    if(!usuario){
      return res.status(401).send('Usuario não cadastrado!');
    };

    const permissoesIguais = usuario.usuario_permissoes
      .map( permissao => permissao.name)
      .some( permissao => listaDePermissoes.includes(permissao));

    if(!permissoesIguais){
      return res.status(401).send('Usuario não possui acesso a essa rota!');
    };

    return next();
  }
}

module.exports = permissoes;