var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();
 
router.get('/productCart', productController.productCart);

router.get('/productDetail', productController.productDetail);
  
router.get('/createProduct', productController.createProduct); 

router.get('/productList', productController.productList);


module.exports = router;