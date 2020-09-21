const express = require('express');

const newProduct = require('../../controllers/products-control/new-product');
const updateProduct = require('../../controllers/products-control/update-product');
const deleteProduct = require('../../controllers/products-control/delete-product');
const showAllProducts = require('../../controllers/products-control/get-products');

const router = express.Router();

router.get('/',showAllProducts)
router.post('/addProduct',newProduct.createProduct);
router.patch('/:pid',updateProduct);
router.delete('/:productID', deleteProduct);

module.exports = router;