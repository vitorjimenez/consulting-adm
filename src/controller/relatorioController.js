import database from "../database/connection";

class relatorioController {

    registrarRelatorio(req, res) {
        const { data, entrada, saida, translado, desconto, atividades } = req.body;
        const relatorio = {
            data,
            entrada,
            saida,
            translado,
            desconto,
            atividades
        }

        database.insert(relatorio).table(relatorio)
            .then(data => {
                res.status(200).json({ message: "Relatório adicionado com sucesso" });
                console.log('Sucesso ao adicionar relatório');
            }).catch(err, () => {
                res.status(500).json({ message: "Houve uma falha ao adicionar relatório" })
                console.log("Erro ao adicionar relatório => ", err);
            });

    }
}

export default relatorioController();
