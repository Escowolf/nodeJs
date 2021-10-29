const express = require("express");//carregando módulo express do Node
const app = express(); //instanciando o app para utilizar node

app.get("/",function(req,res){
    res.send("<h1>Bem-vindo!</h1>");
});

app.get("/:nome/",function(req,res){
    res.send("<h1>Página inicial de nodeJs <br> Olá, "+req.params.nome+"<h1>");
});

app.listen(4000,function(erro){  // cria a aplicação na porta 4000 e chama a função de callback
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado na porta: http://localhost:4000/");
    }
})
