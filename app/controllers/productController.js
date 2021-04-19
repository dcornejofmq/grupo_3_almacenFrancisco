
const db = require("../database/models");

const productController = {

    list: function (req, res) {
        db.Product.findAll()        
         .then(function(enviarVista){
             console.log(enviarVista);
            res.render('productList',{enviarVista: enviarVista} );
         });
        
        
    },
    create: function(req, res) {
        return res.render('createProduct')
     },
     save: function(req, res){
            db.Product.create({

                        
            nameProd: req.body.nameProd,
            description: req.body.description,
            category: req.body.category,            
            price: req.body.price,
            image: req.file.filename
            
            })
       
        return res.redirect('/');
    },

    detail: function(req, res){
        db.Product.findByPk(req.params.id)
        
        .then(function(prodFound){
            res.render('productDetail', {prodFound:prodFound});
        }); 
    },
    cart: function(req, res){
        return res.render('productCart')
    },   
    editProd: function(req, res){
        db.Product.findByPk(req.params.id)
        
        .then(function(prodToEdit){
            res.render('editProduct', {prodToEdit:prodToEdit});
        });
    },    
    saveEdit: function(req, res) {    
        db.Product.update({
                        
            nameProd: req.body.nameProd,
            description: req.body.description,
            category: req.body.category,            
            price: req.body.price,
            
            
            },{
                where: {
                   id: req.params.id
                }
            });    

        res.redirect('/')
    },
    toDelete:function(req, res){
        db.Product.findByPk(req.params.id)
        
        .then(function(prodToDel){
            res.render('deleteProduct', {prodToDel:prodToDel});
        });
    },
    delete: function(req, res){
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect("/");
    },
    catList: function (req, res) {
        let enviarVista = products.filter(products => (products.category == req.params.idCategory))
        
        
       return res.render('productList',{enviarVista: enviarVista}); 
    }
}



module.exports = productController;