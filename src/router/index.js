const express = require('express');
const menuController = require('../controllers/menuController');
const customerController = require('../controllers/customerController');
const categoryController = require('../controllers/categoryController');
const orderController = require('../controllers/orderController');
const router = express.Router();

router.get('/menus', menuController.getAll);
router.get('/menu/:id', menuController.getById);
router.post('/menu/create', menuController.create);
router.put('/menu/update/:id', menuController.update);
router.delete('/menu/delete/:id', menuController.delete);

router.get('/customers', customerController.getAll);
router.get('/customer/:id', customerController.getById);
router.post('/customer/create', customerController.create);
router.put('/customer/update/:id', customerController.update);
router.delete('/customer/delete/:id', customerController.delete);

router.get('/categories', categoryController.getAll);
router.get('/category/:id', categoryController.getById);
router.post('/category/create', categoryController.create);
router.put('/category/update/:id', categoryController.update);
router.delete('/category/delete/:id', categoryController.delete);

router.post('/order/create', orderController.create)
router.get('/orders', orderController.getAll)

module.exports = router;
