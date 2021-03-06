const productController = {
    
    detail: function(req, res){
        return res.render('productDetail')
    },
    cart: function(req, res){
        return res.render('productCart')
    },
    create: function(req, res) {
       return res.render('createProduct')
    },
    list: function(req, res){
        return res.render('productList')
    },
    edit:function(req, res){
        return res.render('editProduct')
    },
    id: function(req, res){
        return res.render('productDetail')
    },
    save: function(req, res){
        let productNew ={
            nameProd: req.body.nameProd,
            description: req.body.description,
            category: req.body.category,
            dataProduct: req.body.dataProduct,
            price: req.body.price,
            photo: req.body.photo
        }
        res.redirect('/products/create');
    },
    
    saveEdit: function(req, res) {
        let idProd = req.params.idProd
    }
}



module.exports = productController;