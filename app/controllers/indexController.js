const indexController = {
    index: function(req, res){
       
        return res.render('index');
    },
    login: function(req, res){        
        return res.render('login');
    },
   
     register: function(req, res){
       
         return res.render('register');
     },
    
     productDetail: function(req, res){
         return res.render('productDetail')
     },
     productCart: function(req, res){
         return res.render('productCart')
     }
    
}


module.exports = indexController;