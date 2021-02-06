const usersController = {

    
    login: function(req, res){        
        return res.render('login', {css:'login.css'});
    },
    
    register: function(req, res){
       
        return res.render('register', {cssreg:'register.css'});
    }

    
}


module.exports = usersController;