const express = require("express");//carregando módulo express do Node
const app = express(); //instanciando o app para utilizar node

var calc = require("./Funcoes");//chamando as funções fora do node

app.get("/",function(req,res){
    res.send("<h1>Módulo</h1>");
});

app.get("/quadrado/", function(req,res){
    res.send("<h1>A área do quadrado é: "+calc.areaQuadrado(5,5)+"</h1>"); 
 })

app.get("/triangulo/",function(req,res){
    res.send("<h1>A área do triângulo é: "+calc.areaTriangulo(3,6)+"</h1>");
})

app.listen(4000,function(erro){  // cria a aplicação na porta 4000 e chama a função de callback
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado na porta: http://localhost:4000/");
    }
})