var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator')
const usersController = require('../controllers/usersController');



const storage = multer.diskStorage({
    destination: (req, File, cb) => {
        cb(null, path.join(__dirname, '../public/Img/users'));
    },
    filename: (req, file, cb) =>{

        const newFileName = 'user'+ Date.now() + path.extname(file.originalname);
        cb(null, newFileName)
    }
    
});

const upload = multer({ storage });

const validateUser = [
    body('firstName').notEmpty().withMessage('Debes completar el campo con tu Nombre'),
    body('lastName').notEmpty().withMessage('Debes completar el campo con tu Apellido'),
    body('email').isEmail().withMessage('Debes completar el campo con tu E-Mail'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña')
];


router.get('/login', usersController.login);

router.get('/register', usersController.register);

//Crear Usuario
router.get('/create', usersController.userReg);
router.post('/create', upload.single('image'), validateUser,  usersController.sendUser);

//Editar Usuario
router.get('/edit/:idUser', usersController.editUser);
router.put('/edit/:idUser', usersController.saveUser);

//Eliminar Usuario
router.get('/delete/:id', usersController.userDelete);
router.delete('/delete/:id', usersController.delete);

module.exports = router;
