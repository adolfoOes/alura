

module.exports = function(app){
    app.get('/pagamentos', function(req, res){
        console.log('Imprimir lista de pagamentos.');
        res.send('OK');
    });    
};

