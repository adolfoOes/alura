

module.exports = function(app){
    app.get('/pagamentos', function(req, res){
        console.log('Imprimir lista de pagamentos.');
        res.send('OK');
    });

    app.post('/pagamentos/pagamento', function(req, res){

        var pagamento = req.body;
        console.log('Processando requisição de pagamento.');

        pagamento.status = "CRIADO";
        pagamento.dataCriacao = new Date;

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = app.persistencia.pagamentoDao();

        pagamentoDao.salva(pagamento, function(error, resultado){
            console.log('Pagamento craido.');
            res.json(pagamento);
        });

        res.send(pagamento);
        
    });    

};

