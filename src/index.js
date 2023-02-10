const express = require('express');
const indexRoutes = require('./routes/index.routers');
const conectarBD = require('./db/condb');

//const {PORT} = require ('./config.js')

const PORT = process.env.PORT;
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))


app.use('/api', indexRoutes);


app.get("/", (request, res) => {
    res.send("<h1>Prueba Servidor OK!!!")
})

app.listen(PORT, () => {
    console.log(`El servidor esta Funcionando en el ${PORT}`);
});


