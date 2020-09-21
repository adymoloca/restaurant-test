const express = require('express');
const { createOrder } = require('../../controllers/orders-control/new-order');
const showOrdersByClient = require('../../controllers/orders-control/get-orders-by-clientID.JS');
const showAllOrders = require('../../controllers/orders-control/getALL');



const router = express.Router();

router.get('/',showAllOrders)
router.post('/:clientID',createOrder)
router.get('/:clientID',showOrdersByClient)




module.exports = router;