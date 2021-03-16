var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();
 
router.get('/cart', productController.cart);

/* Products List*/
router.get('/', productController.list)

/* Create Product*/  
router.get('/create', productController.create); 
router.post('/create', productController.save);

/* Podruct Detail*/
router.get('/:id', productController.detail);

/* Edit Product*/
router.get('/:id/edit', productController.editProd);
router.put('/:id', productController.saveEdit);

/* Delete Product*/
router.delete('/:id', productController.delete);





module.exports = router;