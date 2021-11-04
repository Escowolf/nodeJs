const express = require("express");//carregando módulo express do Node
const app = express(); //instanciando o app para utilizar node

app.get("/",function(req,res){
    res.send("<h1>Hello World! Query params</h1>");
});

app.get("/consulta/:nome/",function(req,res){
    res.send("<h1>Página inicial de nodeJs <br> Olá, "+req.params.nome+"<h1>");
});

app.get("/consulta/idade/", function(req,res){
    //req --> dados enviados pelo cliente
    var idade = req.query["idade"];

    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("Sua idade é = " + idade);
    
})

app.listen(4001,function(erro){  // cria a aplicação na porta 4000 e chama a função de callback
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado na porta: http://localhost:4001/");
    }
})
