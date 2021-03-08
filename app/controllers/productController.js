const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productsJson.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


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
    save: function(req, res){
        let productNew ={
            
            nameProd: req.body.nameProd,
            description: req.body.description,
            category: req.body.category,
            dataProduct: req.body.dataProduct,
            price: req.body.price
            
        }
        let productJson = JSON.stringify(products);
        fs.writeFileSync('./app/database/products.json', productJson);
        res.redirect('/');
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
    
    
    saveEdit: function(req, res) {
        let idProd = req.params.idProd
    }
}



module.exports = productController;