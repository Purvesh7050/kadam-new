const express = require('express');
const router = express.Router();
const userOrderController = require('../controller/userOrderController');
const verifyToken = require('../middleware/verifyToken');

//add a order
// router.post('/add', addOrder);

//get a order by id
router.get('/:id', userOrderController.getOrderById);

//get all order by a user
router.get('/',verifyToken, userOrderController.getOrderByUser);


//get all order by a user
router.get('/admin/orders',verifyToken, userOrderController.getOrderByAdmin);

module.exports = router;
