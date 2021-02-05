var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */

router.get('/', indexController.index);

/* 
router.get('/login', indexController.login);

router.get('/register', indexController.register);

router.get('/productCart', indexController.productCart);

router.get('/productDetail', indexController.productDetail);

router.get('/createProduct', indexController.createProduct);
<<<<<<< HEAD

router.get('/productList', indexController.productList);

=======
*/
>>>>>>> 12f5b407792de3455f43a46c21d23fd79f078188

module.exports = router;
