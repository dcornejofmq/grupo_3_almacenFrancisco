var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */

// console.log( router.arguments ) ;

router.get('/login', usersController.login);

router.get('/register', usersController.register);


module.exports = router;
