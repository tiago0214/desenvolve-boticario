const { Router } = require('express');
const PermissaoController = require('../controllers/permissaoController.js');

const router =  Router();

router
  .post('/permissao',PermissaoController.cadastrarPermissao)
  .get('/permissao',PermissaoController.buscarTodasPermissoes)
  .get('/permissao/:id',PermissaoController.buscarPermissaoPorId)
  .delete('/permissao/:id',PermissaoController.deletarPermissaoPorId)
  .put('/permissao/:id',PermissaoController.editarPermissao);

  module.exports = router;