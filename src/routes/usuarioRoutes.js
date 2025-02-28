import express from 'express';
import usuarioController from '../controller/usuarioController.js';
const router = express.Router();

router.post('/usuario/novo', usuarioController.adicionarUsuario); 
router.post('/usuario/buscar', usuarioController.getUsuarios);
router.get('/usuario/lista-usuarios', usuarioController.getUsuarios);

export default router;
