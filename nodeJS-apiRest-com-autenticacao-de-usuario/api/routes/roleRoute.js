const { Router } = require('express');
const RoleController = require('../controllers/roleController.js');

const router = Router();
router
  .post('/role',RoleController.cadastrar)
  .get('/role',RoleController.buscarTodasAsRoles)
  .get('/role/:id',RoleController.buscarRolePorId)
  .delete('/role/:id',RoleController.deletarRolePorId)
  .put('/role/:id',RoleController.editarRole);

module.exports = router;