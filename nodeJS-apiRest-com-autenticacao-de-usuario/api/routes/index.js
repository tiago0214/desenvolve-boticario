const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute.js');
const usuario = require('./usuariosRoute.js');
const auth = require('./authRoute.js');
const role = require('./roleRoute.js');
const permissao = require('./permissaoRoute.js');
const seguranca = require('./seguranca.js');

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    usuario,
    produto,
    role,
    permissao,
    seguranca
  )
}
