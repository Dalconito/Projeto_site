const fs = require('fs');
var index_nome = [], index_cat =[];
var conteudo = fs.readFileSync('data.json', function(err, data) {console.error(err);});

var conteudo_tratado = JSON.parse(conteudo);

console.log(conteudo_tratado[4].nome_titulo);

function procura (element, index)
{
    if(element.nome_titulo == "Leoni")
    {
        index_nome[index] = index;
    }
    else
    {
        console.log("NADA ENCONTRADO");
    }
};
conteudo_tratado.forEach(procura);
var filtro_nome = index_nome.filter(Boolean);

function procura_cat (element, index)
{
    if(element.categoria_titulo == "Funcionario")
    {
        index_cat[index] = index;
    }
    else
    {
        console.log("NADA ENCONTRADO");
    }
};
conteudo_tratado.forEach(procura_cat);
var filtro_cat = index_cat.filter(Boolean);
var match = filtro_nome.filter(element => filtro_cat.includes(element));

for(var i= 0; i<match.length; i++)
{
    console.log(conteudo_tratado[match[i]].nome_titulo);
    console.log(conteudo_tratado[match[i]].categoria_titulo);
    console.log(conteudo_tratado[match[i]].valor_titulo);
    console.log(conteudo_tratado[match[i]].emissao_titulo);
    console.log(conteudo_tratado[match[i]].vencimento_titulo);
    console.log("---------------------");
}
