// const connection = require('../database/connection.js');
// const express = require('express');
// const router = express.Router();
// const UsuarioController = require('../controller/usuarioController');

import express from 'express';
import usuarioController from '../controller/usuarioController.js'; // Use the correct import name (lowercase "usuarioController")
const router = express.Router();

router.post('/usuario/novo', usuarioController.adicionarUsuario); // Correct usage

export default router;
