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
    body('firstName').isLength({min: 2}).withMessage('Tu nombre debe tener mas de 2 caracteres'),
    body('lastName').notEmpty().withMessage('Debes completar el campo con tu Apellido'),
    body('lasttName').isLength({min: 2}).withMessage('Tu apellido debe tener mas de 2 caracteres'),
    body('email').custom((value, { req }) => {       
         let email = req.body.email;  
         
        if (users.find(users =>(users.email == email))){
            throw new Error('El email esta en uso');
        }       
        return true;
    }).isEmail().withMessage('Debes ingresar un correo valido'),      
    body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
    body('password').isLength({min: 8}).withMessage('Tu contraseña debe tener mas de 8 caracteres'),
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.JPG', '.JPEG', '.PNG', '.GIF','.jpg','.png','.gif', '.jpeg']
        if (!file){
            throw new Error('Tienes que adjuntar una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error('Las extensiones permitidas son JPG, JPEG, PNG y GIF');
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



//Crear Usuario
router.get('/create', usersController.userReg);
router.post('/create', upload.single('image'), validateUser,  usersController.sendUser);

//Editar Usuario
router.get('/edit/:id', usersController.editUser);
router.post('/edit/:id', usersController.saveUser);

//Eliminar Usuario
router.get('/delete/:id', usersController.userDelete);
router.post('/delete/:id', usersController.delete);
// Perfil
router.get('/profile', authMiddleware, usersController.profile);
//logout
router.get('/logout/', usersController.logout)

module.exports = router;
