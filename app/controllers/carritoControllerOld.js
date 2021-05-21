const fs = require('fs');
const path = require('path');
const carritoFile = path.join(__dirname, '../databaseJSON/carrito.json' );
const carritoJson = fs.readFileSync(carritoFile, {encoding: 'utf-8'}, 'w' );
const carritoData = JSON.parse( carritoJson );

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const carritoController = {

    addCarritoPost: function(req, res){
        console.log( "Inicio *** 1");
        let carrito = {
            id: req.body.id,
            img: req.body.img,
            descProducto: req.body.descProducto,
            precio: req.body.precio
        };
        console.log( "Inicio *** 2");
        console.log( carrito );
        console.log( "Inicio *** 3");

        console.log( carritoData );
        console.log( "Inicio *** 3_1");
        carritoData.push( carrito );
        
        console.log( "Inicio *** 4");
        console.log( "push");
        console.log( carrito );

        console.log( "FIN *** ");

        let carritoJson = JSON.stringify(carritoData);
        
        fs.writeFileSync(path.join(__dirname, '../databaseJSON/carrito.json'), carritoJson);

        console.log(carritoJson);
        return res.redirect('/');
    }
}

module.exports = carritoController;