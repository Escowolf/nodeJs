const express = require("express");//carregando módulo express do Node
const app = express(); //instanciando o app para utilizar node

app.get("/",function(req,res){
    res.send("<h1>Query params</h1>");
});

app.get("/pessoa/:nome/",function(req,res){
    res.send("<h1>Consulta nome</h1> <br> <h2>Olá, "+req.params.nome+"!<\h2>");
});

app.get("/idade/", function(req,res){
    //req --> dados enviados pelo cliente
    var id = req.query["id"];

    if (id>0 && id<=18){
        res.send("<h1>Você é de menor! Não pode acessar essa página.</h1>")
    }else if(id>18 && id<100){
        //res --> resposta enviada pelo servidor de volta ao cliente
        res.send("<h1>Mesmo depois dos 18 você ainda é jovem,<br> afinal são apenas "+id+" anos!</h1>");
    }else if(id>=100){
        res.send("<h1>É impressionante você estar viva! Vida longa à rainha!</h1>")
    }else{
        res.send("<h1>Você não digitou um valor válido.</h1>");
    }
   
    
})

app.listen(4002,function(erro){  // cria a aplicação na porta 4002 e chama a função de callback
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado na porta: http://localhost:4002/");
    }
})
