var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var methodOverride = require( 'method-override');
// Libreria para gestionar archivos que se envian al servidor desde un formulario
var multer = require( 'multer');
var logger = require('morgan');

var app = express();

// Seteo la ubicación de los archivos que usaremos en la aplicación - Dir: Public 
app.use(express.static(path.join(__dirname, 'public')));
// Indico que cuando recibamos un objeto por Post se podran acceder a los datos en pos.body como parametros del tipo String
app.use(express.urlencoded({ extended: false }));
// convierte los objetos del tipo Json a array de String
app.use(express.json());
app.use(logger('dev'));
app.use(cookieParser());
// La linea siguiente me permite agregar otros metodos diferentes de GET y POST en los formularios
app.use(methodOverride( "_method"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Cargo Middlewares
const logMiddleware  = require( './middlewares/logMiddleware');
//app.use( logMiddleware( req, res, next));

// Cargo los routers 
const indexRouter    = require('./routes/index');
const usersRouter    = require('./routes/users');
const productsRouter = require('./routes/products');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// catch 404 and forward to error handler

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
