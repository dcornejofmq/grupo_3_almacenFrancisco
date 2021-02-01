var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */

router.get('/', indexController.index);
router.get('/login', indexController.login);

router.get('/register', indexController.register);


module.exports = router;
