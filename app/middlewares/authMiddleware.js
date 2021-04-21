function authMiddleware(req, res, next) {
                               
    if(!req.session.user){
        res.redirect('/users/login')
    }
    next();
}

module.exports = authMiddleware;