var express = require('express');
const buscadorController = require('../controllers/buscadorController');
var router = express.Router();

/* GET home page. */

router.get('/buscarTexto/:idtexto', buscadorController.buscarTexto);

module.exports = router;