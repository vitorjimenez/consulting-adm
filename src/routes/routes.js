const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/usuarioController');

router.post('/usuario/novo', UsuarioController.adicionarUsuario);

export default router;
module.exports = router;