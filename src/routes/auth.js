const express = require("express");
const router = express.Router();

const { check } = require("express-validator");
const {autenticarUsuario, usuarioAutenticado} = require("../controller/Auth.controller");
const auth = require("../middleware/auth");

// Autentica un usuario
// api/auth
router.post("/",autenticarUsuario);
router.get('/',auth, usuarioAutenticado)

module.exports = router;