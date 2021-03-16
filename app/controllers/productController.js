const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const product = fs.readFileSync(productsFilePath,{encoding: 'utf-8'}, 'w' );
const products = JSON.parse(product);

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productController = {

    list: function(req, res){
        return res.render('productList', {products: products});
    },
    create: function(req, res) {
        return res.render('createProduct')
     },
     save: function(req, res){
         
        let productNew = {
            
            id: products[products.length-1].id+1,            
            nameProd: req.body.nameProd,
            description: req.body.description,
            category: req.body.category,
            dataProduct: req.body.dataProduct,
            price: req.body.price
            
        }
        console.log(products);
        products.push(productNew)
        console.log(productNew);
        console.log(products);
        let productJson = JSON.stringify(products);
        console.log(productJson);
        fs.writeFileSync(path.join(__dirname, '../database/products.json'), productJson);
        res.redirect('/');
    },

    detail: function(req, res){
        
        return res.render('productDetail', )
    },
    cart: function(req, res){
        return res.render('productCart')
    },   
    editProd: function(req, res){
        return res.render('editProduct')
    },    
    saveEdit: function(req, res) {
        let idProd = req.params.idProd
    },
    delete: function(req, res){
        
    }
}



module.exports = productController;