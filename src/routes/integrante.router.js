const { Router } = require('express');

const {getAllIntegrantes, createIntegrantes, getCountProgramas } = require('../controller/integrantes.controller')

const router = Router();

router.get("/listar", getAllIntegrantes);
router.get("/cuentaprogramas", getCountProgramas );
router.post("/create", createIntegrantes)


module.exports = router;    