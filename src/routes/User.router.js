const { Router } = require('express');
const router = Router();

const { getAllUsers, createUserVali } = require('../controller/Users.controller');
const auth = require("../middleware/auth");


router.get("/listar", auth, getAllUsers);
router.post("/uservalidado", auth, createUserVali)


module.exports = router;