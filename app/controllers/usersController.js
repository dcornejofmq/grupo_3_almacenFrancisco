const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../database/users.json');
const user = fs.readFileSync(usersFilePath,{encoding: 'utf-8'}, 'w' );
const users = JSON.parse(user);

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



//const { validationResult} = require('express-validator');

/*const User = require('../models/User')*/
    


const usersController = {

    
    login: function(req, res){        
        return res.render('login');
    },
    
    register: function(req, res){
       
        return res.render('register');
    },
    userReg: function(req, res){
        res.render('registerUser')
    },
    sendUser: function(req, res){
        let userNew = {
            
            id: users[users.length-1].id+1,           
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,            
            password: req.body.password,
            image: req.body.image
            
        }
        
        users.push(userNew)  
        console.log(users)      
        let userJson = JSON.stringify(users);        
        fs.writeFileSync(path.join(__dirname, '../database/users.json'), userJson);
        return res.redirect('/');
    }
    
}


module.exports = usersController;