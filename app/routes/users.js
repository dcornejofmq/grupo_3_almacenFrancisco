var express = require('express');
var router = express.Router();


const usersController = require('../controllers/usersController');

//const uploadFile = require('../middlewares/multerMiddleware');
//const validations = require('../middlewares/validateRegisterMiddleware');

/* GET users listing. */

// console.log( router.arguments ) ;

router.get('/login', usersController.login);

router.get('/register', usersController.register);


router.get('/create', usersController.userReg);
router.post('/create',  usersController.sendUser);

module.exports = router;
