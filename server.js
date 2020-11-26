const express = require("express");
const db = require('./app/db/models');

db.sequelize.sync({force: true}).then(()=>{
    console.log('Tabelas dropadas e sincronizadas')
})

const app = express();

app.get("/", (req, res) => {
    res.json({
        messagem: "grupou api"
    })
})

app.listen(3000, ()=>{
    console.log("Servidor rodando...");
})