var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');

const storage = multer.diskStorage({
    destination: (req, File, cb) => {
        cb(null, path.join(__dirname, '../public/Img/productos png'));
    },
    filename: (req, file, cb) =>{

        const newFileName = 'Producto'+ Date.now() + path.extname(file.originalname);
        cb(null, newFileName)
    }
})
const upload = multer({ storage })
router.get('/cart', productController.cart);

/* Products List*/
router.get('/', productController.list)

/* Create Product*/  
router.get('/create', productController.create); 
router.post('/create', upload.single('image'), productController.save);

/* Podruct Detail*/
router.get('/:id', productController.detail);

/* Edit Product*/ 
router.get('/edit/:id', productController.editProd);
router.post('/edit/:id', productController.saveEdit);

/* Delete Product*/
router.get('/erase/:id', productController.toDelete);
router.post('/erase/:id', productController.delete);

/* Product Category */
router.get('/category/:idCategory', productController.catList);


/* Product Category */
/*router.get('/buscarTexto/', productController.buscarTextoBarra);*/

router.get('/buscarTexto/textoIngresado', productController.buscarTextoIngresado);

/*router.get('/buscarTexto/:idTexto', productController.buscarTextoConId);*/

module.exports = router;