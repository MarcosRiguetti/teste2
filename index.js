// Carregando módulos
    const express = require("express")
    const app = express()
    const handlebars = require('express-handlebars')

//Configurações
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handleabrs')
    //Conexão com o banco de dados
        const Sequelize = require('sequelize')
        const sequileze = new Sequelize('test', 'root', 'MarcoS00', {
            host: "localhost",
            dialect: 'mysql'
        })
        sequileze.authenticate().then( () => {
            console.log("Conectado com sucesso!")
        }).catch(() => {
            console.log("Falha ao conectar: " + erro)
        })

// Outros
    // http
        const PORT = 8081
            app.ouvir( PORT , ()  => {
                console.log ("Servidor rodando!")
            } )