const express = require( 'express' );
const path = require( 'path' );

const app = express();

const publicFolderPath = path.resolve( __dirname, './Public' );
app.use( express.static( publicFolderPath ));

app.listen( 3000, () => {
  console.log( 'Servidor corriendo en el puerto 3000' );
});

app.get( '/', ( reg, res ) => {
  
   res.sendFile( path.resolve( __dirname, './views/index.html' ));
  
})
