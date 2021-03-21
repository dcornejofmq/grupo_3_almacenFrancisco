var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

 
router.get('/cart', productController.cart);

/* Products List*/
router.get('/', productController.list)

/* Create Product*/  
router.get('/create', productController.create); 
router.post('/create', productController.save);

/* Podruct Detail*/
router.get('/:id', productController.detail);

/* Edit Product*/
router.get('/edit/:idProd', productController.editProd);
router.put('/edit/:idProd', productController.saveEdit);

/* Delete Product*/
router.get('/delete/:id', productController.toDelete);
router.delete('/delete/:id', productController.delete);





module.exports = router;