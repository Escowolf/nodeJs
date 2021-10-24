const express = require("express");//carregando módulo express do Node
const app = express(); //instanciando o app para utilizar node
//var nomeFunc = require("./nome");//chama módulo nome com função nome

//nomeFunc("Ezequiel Sousa Silva");
app.listen(4000,function(erro){  // cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})
