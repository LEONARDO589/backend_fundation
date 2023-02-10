const { Router } = require('express');

const {getAllProgramas} = require("../controller/Programas.controller")

const router = Router();

router.get("/listar", getAllProgramas)



module.exports = router;