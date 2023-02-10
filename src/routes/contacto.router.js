const { Router } = require('express');

const {getAllContacto, createContacto } = require('../controller/contacto.controller')

const router = Router();


router.get("/prueba", (request, res) => {
    res.send("<h1>Esta es la prueba de contacto !!!")
})

router.get("/listar", getAllContacto),
router.post("/crear", createContacto)

module.exports = router;