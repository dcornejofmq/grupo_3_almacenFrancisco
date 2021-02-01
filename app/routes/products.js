var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

router.get('/productDetail', function(req, res, next) {
    res.render('productDetail');
  });
  

module.exports = router;