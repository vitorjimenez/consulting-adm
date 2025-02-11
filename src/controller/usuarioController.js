const { status } = require('express/lib/response');
const database = require('../database/connection');

class UsuarioController {
    adicionarUsuario(req, res){
        const usuario = {
            nome,
            contato, 
            email, 
            senha,
            cpf, 
            banco_horas,
            tipo_acesso
        } = req.body;

        console.log(usuario);

        database.insert(usuario)
        .table('usuario')
        .then(data => {
            console.log(data);
            res.json(status = 200, {message: 'Usuário adicionado com sucesso'});
        }).catch(err => {
            console.log('Houve um problema ao tentar adicionar usuário' + err);
            res.json(status = '500')
        });
    }

}

module.exports = new UsuarioController();