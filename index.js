const express = require("express")
const bodyParser = require("body-parser")
const {check} = require('express-validator')


// Database 
const db = require("./config/db")

db.sync()
    .then( () => console.log('Conectado al servidor'))
    .catch( error => console.log(error))


// Inicializar express
const app = express()

// Habilitar bodyParser para leer datos del form
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// Agregamos express validator a toda la aplicacion
// app.use(expressValidator())

// Donde cargar los archivos estaticos
app.use(express.static('public'))


// Middleware

// Rutas




const host = process.env.HOST || "0.0.0.0"
const port = process.env.PORT || 3000

app.listen(port, host, () => {
    console.log("El servidor esta funcionando");
})