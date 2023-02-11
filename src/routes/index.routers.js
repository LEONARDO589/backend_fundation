const express = require('express');
const router = express.Router();
const conectarBD = require('../db/condb.js');

const Auth = require('./auth');
const paymentRouter = require ('./payment.router.js');
const contactoRouter = require('./contacto.router.js');
const integranteRouter = require('./integrante.router');
const Empleados = require('./Employee.router');
const Beneficiario = require('./Beneficiario.router');
const Programas = require('./Programas.router');
const Users = require('./User.router');



//router.use("/empleados", Empleados )
router.use("/contactos", contactoRouter)
router.use('/integrantes', integranteRouter)
//router.use("/payment", paymentRouter)

router.get("/con", (request, res) => {
    res.send("<h1>Prueba API OK!!!")
})


// Verificar que paymentRouter sea una función o un objeto de enrutador
if (typeof paymentRouter === 'function') {
  router.use("/payment", paymentRouter);
} else {
  console.error("paymentRouter debe ser una función o un objeto de enrutador");
}

if (typeof Beneficiario === 'function') {
  router.use("/beneficiarios", Beneficiario );
} else {
  console.error("paymentRouter debe ser una función o un objeto de enrutador");
}


if (typeof Empleados === 'function') {
    router.use("/empleados", Empleados );
  } else {
    console.error("paymentRouter debe ser una función o un objeto de enrutador");
  }


if (typeof Programas === 'function') {
  router.use("/programas", Programas );
} else {
  console.error("paymentRouter debe ser una función o un objeto de enrutador");
}

if(typeof Users === 'function'){
  router.use("/users", Users);
}else{
  console.error("Usuarios no se encuentra activo o no es funtion")
}

if(typeof Auth === 'function'){
  router.use("/auth", Auth);
}else{
  console.error("Autenticado no se encuentra no es funtion")
}


module.exports = router;