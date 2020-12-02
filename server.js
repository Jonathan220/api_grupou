const express = require("express");
const db = require('./app/db/models');
const bodyParser = require("body-parser")

// db.sequelize.sync({force: true}).then(()=>{
//     console.log('Tabelas dropadas e sincronizadas')
// })

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({
        messagem: "grupou api"
    })
})
//passando a isntancia do express para o index da pasta routers
require('./app/routers')(app);

app.listen(3000, ()=>{
    console.log("Servidor rodando...");
})