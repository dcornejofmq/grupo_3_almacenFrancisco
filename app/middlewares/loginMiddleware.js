function loginMiddleware(req, res, next) {
    res.locals.isLogged = false;
    
    if (req.session.user) {
        res.locals.isLogged = true;
        res.locals.carrito = 3;
    }


    next();
}

module.exports = loginMiddleware;