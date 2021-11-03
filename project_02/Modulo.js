const express = require("express");//carregando módulo express do Node
const app = express(); //instanciando o app para utilizar node

var calc = require("./Funcoes");
calc.areaQuadrado(3,8);

app.get("/", function(req,res){
    res.send("A resposta é: "); 
 })

app.listen(4000,function(erro){  // cria a aplicação na porta 4000 e chama a função de callback
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado na porta: http://localhost:4000/");
    }
})