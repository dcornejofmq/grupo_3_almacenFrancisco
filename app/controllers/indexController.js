const indexController = {

    index: function(req, res){
       
        return res.render('index');
    }
    /*
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
     },
     createProduct: function(req, res) {
        return res.render('createProduct')
     },
     productList: function(req, res) {
        return res.render('productList')
     }
    */
}


module.exports = indexController;