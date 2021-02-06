const productController = {
    
    productDetail: function(req, res){
        return res.render('productDetail')
    },
    productCart: function(req, res){
        return res.render('productCart')
    },
    createProduct: function(req, res) {
       return res.render('createProduct')
    },
    productList: function(req, res){
        return res.render('productList')
    }

}



module.exports = productController;