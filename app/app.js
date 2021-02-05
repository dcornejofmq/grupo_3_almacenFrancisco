var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const indexRouter    = require('./routes/index');
const usersRouter    = require('./routes/users');
const productsRouter = require('./routes/products');

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', productsRouter);
/*
app.use('/register', usersRouter);
app.use('/productDetail', indexRouter);
app.use('/productCart', indexRouter);
app.use('/createProduct', indexRouter);
<<<<<<< HEAD
app.use('/productList', indexRouter);

=======
*/
>>>>>>> 12f5b407792de3455f43a46c21d23fd79f078188

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
