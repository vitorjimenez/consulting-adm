import database from '../database/connection.js';

class UsuarioController {
    adicionarUsuario(req, res){
        console.log(req.body);

        const { nome, contato, email, senha, banco_horas, tipo_acesso } = req.body;
        const usuario = {
            nome,
            contato, 
            email, 
            senha, 
            banco_horas,
            tipo_acesso
        };

        database.insert(usuario)
        .table('usuario')
        .then(data => {
            console.log(data);
            res.status(200).json({message: 'Usuário adicionado com sucesso'});
        }).catch(err => {
            console.log('Houve um problema ao tentar adicionar usuário >> ' + err);
            res.status(500).json({message: 'Houve um problema ao adicionar usuário.'});
        });
    }

    getUsuarios(req, res) {
            database.select('*')
                    .table('usuario')
                    .then(data => {
                        console.log(data);
                        res.json(data);
                    }).catch(err => {
                        console.log('Erro ao consultar usuários err>' + err);
                        res.json({message: 'Erro ao consultar usuários'});
                    });
    }

}

export default new UsuarioController();