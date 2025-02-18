import database from '../database/connection.js';

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
            res.status(200).json({message: 'Usuário adicionado com sucesso'});
        }).catch(err => {
            console.log('Houve um problema ao tentar adicionar usuário >>' + err);
            res.status(500).json({message: 'Houve um problema ao adicionar usuário.'});
        });
    }

}

export default new UsuarioController();