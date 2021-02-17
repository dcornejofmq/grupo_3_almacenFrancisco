const fs = require( 'fs' );
function logMiddleware( req, res, next ) 
{
    fs.writeFileSync( 'log.txt', 'Se ingreso en la página ' + req.url );
    console.log( 'Pase por LogMiddleware' );
    next();
}

module.exports = logMiddleware;
