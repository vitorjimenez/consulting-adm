import database from '../database/connection.js';

class UsuarioController {

    adicionarUsuario(req, res) {
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
                res.status(200).json({ message: 'Usuário adicionado com sucesso' });
            }).catch(err => {
                console.log('Houve um problema ao tentar adicionar usuário >> ' + err);
                res.status(500).json({ message: 'Houve um problema ao adicionar usuário.' });
            });
    }

    getUsuario(req, res) {
        const {
            filtro,
            nome,
            email,
            cpf,
            telefone
        } = req.body

        switch (filtro) {

            case "nome":
                database.select('*').table('usuario').where({ nome: nome })
                    .then(data => {
                        console.log(data)
                        res.status('200').json(data);
                    }).catch(err => {
                        console.log('Erro ao procurar nome do usuário >>' + err);
                        res.status('500').json('Erro ao buscar nome do usuário.');
                    })
                break;

            case "email":
                database.select('*').table('usuario').where({ email: email })
                    .then(data => {
                        console.log(data)
                        res.status('200').json(data);
                    }).catch(err => {
                        console.log('Erro ao procurar email do usuário >>' + err);
                        res.status('500').json('Erro ao buscar email do usuário.');
                    })
                break;

            case "telefone":
                database.select('*').table('usuario').where({ telefone: telefone })
                    .then(data => {
                        console.log(data)
                        res.status('200').json(data);
                    }).catch(err => {
                        console.log('Erro ao procurar telefone do usuário >>' + err);
                        res.status('500').json('Erro ao buscar telefone do usuário.');
                    })
                break;

            case "cpf":
                database.select('*').table('usuario').where({ cpf: cpf })
                    .then(data => {
                        console.log(data)
                        res.status('200').json(data);
                    }).catch(err => {
                        console.log('Erro ao procurar CPF do usuário >>' + err);
                        res.status('500').json('Erro ao buscar CPF de usuário.');
                    })
                break;
        }
    }

    getUsuarios(req, res) {
        database.select('*')
            .table('usuario')
            .then(data => {
                console.log(data);
                res.json(data);
            }).catch(err => {
                console.log('Erro ao consultar usuários err>' + err);
                res.json({ message: 'Erro ao consultar usuários' });
            });
    }

}

export default new UsuarioController();