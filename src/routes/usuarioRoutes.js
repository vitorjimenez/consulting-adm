import express from 'express';
import usuarioController from '../controller/usuarioController.js';
const router = express.Router();

router.post('/usuario/novo', usuarioController.adicionarUsuario); 
router.get('/usuario/lista-usuarios', usuarioController.getUsuarios);
router.get('/', (req,res)=> {
    res.json('Hello World');
});

export default router;
