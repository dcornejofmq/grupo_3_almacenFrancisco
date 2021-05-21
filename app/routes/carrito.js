var express = require('express');
const carritoController = require('../controllers/carritoController');
var router = express.Router();

/* GET home page. */

router.post('/addCarrito/', carritoController.addCarritoPost);

module.exports = router;