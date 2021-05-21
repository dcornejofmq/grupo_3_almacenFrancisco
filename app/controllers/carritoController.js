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
        
        carritoData.push( carrito );

        console.log ( "el valor de carrito")
        
        console.log( res.locals.carrito  );
        res.locals.carrito = res.locals.carrito + 1 ; 
        console.log ( "el valor de carrito -- despues de la suma")
        
        console.log( res.locals.carrito  );
        
        let carritoJson = JSON.stringify(carritoData);
        
        fs.writeFileSync(path.join(__dirname, '../databaseJSON/carrito.json'), carritoJson);
        
        return res.redirect( "/");
    }
}

module.exports = carritoController;