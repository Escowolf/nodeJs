const express = require("express");//carregando módulo express do Node
const app = express(); //instanciando o app para utilizar node

var calc = require("./Funcoes");

app.get("/quadrado/", function(req,res){
    res.send("<h1>A resposta é: "+calc.areaQuadrado(8,8)+"</h1>"); 
 })

app.get("/triangulo/",function(req,res){
    res.send("<h1>A área do triângulo é: "+calc.areaTriangulo(2,4)"</h1>");
})

app.listen(3000,function(erro){  // cria a aplicação na porta 4000 e chama a função de callback
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado na porta: http://localhost:3000/");
    }
})