const express = require("express");//carregando módulo express do Node
const app = express(); //instanciando o app para utilizar node

app.get("/principal/", function(req,res){
   //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("<h1>Rotas</h1>");   
})

app.get("/principal/sobre/", function(req,res){
    //res --> resposta enviada pelo servidor de volta ao cliente
     res.send("<h1>Trabalho de Nodejs</h1>");   
 })

app.get("/principal/sobre/integrantes/", function(req,res){
    //res --> resposta enviada pelo servidor de volta ao cliente
     res.send("<h1>Beatriz, Ezequiel, Filipe</h1>");   
 })

app.listen(4001,function(erro){  // cria a aplicação na porta 4000 e chama a função de callback
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado na porta: http://localhost:4000/");
    }
})
