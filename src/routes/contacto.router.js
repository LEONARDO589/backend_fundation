const { Router } = require('express');

const router = Router();


router.get("/contacto", (request, res) => {
    res.send("<h1>Prueba contacto !!!")
})

module.exports = router;