

function adminMiddleware(req, res, next) {
    res.locals.adminLogged = false;
    
    if (req.session.admin) {
        
        res.locals.adminLogged = true;
        console.log(res.locals.adminLogged);
    }


    next();
}

module.exports = adminMiddleware; 