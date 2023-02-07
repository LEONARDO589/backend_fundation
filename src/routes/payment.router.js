const express = require('express');
const router = express.Router();

const {createorder, captureOrder, cancelOrder} = require('../controller/payment.controllers')

router.post('/create', createorder);
router.get('/captura', captureOrder);
router.get('/cancel',cancelOrder)

module.exports = router;