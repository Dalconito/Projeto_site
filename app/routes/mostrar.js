module.exports = function(app)
{
    const fs = require('fs');
    var url =require('url');

    app.get('/mostrar', function(req, res)
    {
        var basedados;
        var q = url.parse(req.url, true);
        
        var conteudo = fs.readFileSync('data.json', function(err, data) {console.error(err);});

        var conteudo_tratado = JSON.parse(conteudo);
        var array_conteudo = [0]; array_conteudo[0] = conteudo_tratado;
        array_conteudo.push(q.query);
        var array_flat = []; array_flat = array_conteudo.flat();
        var dados_tratados = JSON.stringify(array_flat, null, 4);
        dados_parse = JSON.parse(dados_tratados);
        var leitura = []; leitura = dados_parse;
        
          console.log(leitura);
          res.render("mostrar", {leitura:leitura});

    });
};