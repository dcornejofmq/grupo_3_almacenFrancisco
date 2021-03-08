var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();
 
router.get('/cart', productController.cart);

router.get('/detail', productController.detail);
  
router.get('/create', productController.create); 
router.post('/', productController.save)
router.get('/list', productController.list);

router.get('/:id', productController.id);
router.get('/edit', productController.edit);




module.exports = router;