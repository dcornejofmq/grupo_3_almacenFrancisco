var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const { body, check } = require('express-validator')
const usersController = require('../controllers/usersController');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../database/users.json');
const user = fs.readFileSync(usersFilePath,{encoding: 'utf-8'}, 'w' );
const users = JSON.parse(user);

const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware');
const e = require('express');



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
    body('email').custom((value, { req }) => {       
         let email = req.body.email;  
         
        if (users.find(users =>(users.email == email))){
            throw new Error('El email esta en uso');
        }       
        return true;
    }).isEmail().withMessage('Debes ingresar un correo valido'),      
    body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.JPG', '.PNG', 'GIF']
        if (!file){
            throw new Error('Tienes que adjuntar una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error('Las extensiones permitidas son JPG, PNG y GIF');
            }
        }
        return true
    })
];
const validateLogin = [
    body('email').isEmail().withMessage('Debes completar el campo con tu E-Mail'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña')
];

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', validateLogin,  usersController.logon);

router.get('/register', guestMiddleware, usersController.register);

//Crear Usuario
router.get('/create', usersController.userReg);
router.post('/create', upload.single('image'), validateUser,  usersController.sendUser);

//Editar Usuario
router.get('/edit/:idUser', usersController.editUser);
router.put('/edit/:idUser', usersController.saveUser);

//Eliminar Usuario
router.get('/delete/:id', usersController.userDelete);
router.delete('/delete/:id/erase', usersController.delete);
// Perfil
router.get('/profile', authMiddleware, usersController.profile);
//logout
router.get('/logout/', usersController.logout)

module.exports = router;
