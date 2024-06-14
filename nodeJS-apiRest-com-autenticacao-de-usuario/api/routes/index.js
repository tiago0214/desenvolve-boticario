const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute.js');
const usuario = require('./usuariosRoute.js');
const auth = require('./authRoute.js');

module.exports = app => {
  app.use(
    bodyParser.json(),
    produto,
    usuario,
    auth
  )
}
