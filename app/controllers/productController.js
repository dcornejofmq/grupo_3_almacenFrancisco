const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const product = fs.readFileSync(productsFilePath,{encoding: 'utf-8'}, 'w' );
const products = JSON.parse(product);

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productController = {

    list: (req, res) => {
        const bebidas = [];
        const despensa = [];
        const cuiper = [];

        products.map((products) => {
            if (products.category == 'bebidas'){
                bebidas.push(products)
            }if (products.category == 'despensa'){
                despensa.push(products)
            }else if(products.category == 'cuiper'){
                cuiper.push(products)
            } 


        });
        const enviarVista = {
            prodBebidas: bebidas,
            prodDespensa: despensa,
            prodCuiper: cuiper
        }
        
        
        return res.render('productList', enviarVista);
        
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
            price: req.body.price
            
        }
        console.log(products);
        products.push(productNew)
        console.log(productNew);
        console.log(products);
        let productJson = JSON.stringify(products);
        console.log(productJson);
        fs.writeFileSync(path.join(__dirname, '../database/products.json'), productJson);
        return res.redirect('/');
    },

    detail: function(req, res){
        
        return res.render('productDetail', )
    },
    cart: function(req, res){
        return res.render('productCart')
    },   
    editProd: function(req, res){
        let idProd = req.params.idProd;
        let prodToEdit = products[idProd];
        
        return res.render('editProduct', {prodToEdit: prodToEdit});
    },    
    saveEdit: function(req, res) {    
        let productEdit = {           
                       
            nameProd: req.body.nameProd,
            description: req.body.description,
            category: req.body.category,            
            price: req.body.price
            
        }
        
        products.push(productEdit)        
        
        let productJson = JSON.stringify(products);
        
        fs.writeFileSync(path.join(__dirname, '../database/products.json'), productJson);
        return res.redirect('/editProduct');
    },
    delete: function(req, res){
        
    }
}



module.exports = productController;