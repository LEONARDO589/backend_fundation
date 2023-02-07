const express = require('express');
const router = express.Router();
const conectarBD = require('../db/condb.js');


const paymentRouter = require ('./payment.router.js');
const contactoRouter = require('./contacto.router.js');


router.use("/contacto", contactoRouter)
router.use("/payment", paymentRouter)

router.get("/con", (request, res) => {
    res.send("<h1>Prueba API OK!!!")
})


router.get('/suma', async (req, res) =>{
    const [rows] = await conectarBD.query('SELECT 1 + 1 as result')
    console.log(rows[0]);
    res.json(rows[0])
})


module.exports = router;