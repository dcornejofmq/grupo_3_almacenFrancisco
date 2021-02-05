const productController = {
    
    productDetail: function(req, res){
        return res.render('productDetail')
    },
    productCart: function(req, res){
        return res.render('productCart')
    },
    createProduct: function(req, res) {
       return res.render('createProduct')
    }

}



module.exports = productController;