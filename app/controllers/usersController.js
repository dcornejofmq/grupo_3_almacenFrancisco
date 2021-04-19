const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const db = require("../database/models");


const usersController = {

    
    login: function(req, res){        
        return res.render('login');
    },
    logon: function(req, res) {
        let errors = validationResult(req);
        
        if (errors.isEmpty()){
           for (let i = 0; i < users.length; i++) {
               if (users[i].email == req.body.email && bcrypt.compareSync(req.body.password, users[i].password)) {
                       delete users[i].password;
                       req.session.user = users[i]; 
                       
                    /*  if (req.body.remember) {
                        res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2});

                      }*/
                           
                       
                       return res.redirect('profile');
                   
               }         
            }
    }else {
        
        return res.render('login', {errors: errors.array()});
        
    }
},
    register: function(req, res){
       
        return res.render('register');
    },
    userReg: function(req, res){
        res.render('registerUser')
    },
    sendUser: function(req, res){
        let errors = validationResult(req);        
        if(errors.isEmpty()){
            db.User.create({

                        
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,            
                password: bcrypt.hashSync(req.body.password, 10),
                image: req.file.filename
                
                })
           
            res.redirect('/');

        
        } else {
            return res.render('registerUser', { errors: errors.array(), 
            old: req.body }); 
           
        }
      
        
    },
    editUser: function(req, res){
        db.User.findByPk(req.params.id)
        .then(function(userToEdit) {
            res.render('editUser', {userToEdit: userToEdit}); 
        })
 
    },    
    saveUser: function(req, res) { 
        db.User.update({

            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,            
            password: bcrypt.hashSync(req.body.password, 10)
        },{
                where: {
                   id: req.params.id
                }
        })

        
        res.redirect('/')
    },
    userDelete:function(req, res){
        db.User.findByPk(req.params.id)
        .then(function(userToDel) {
            res.render('deleteUser', {userToDel: userToDel}); 
        })

        
    },
    delete: function(req, res){
        db.User.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect("/");
        
    },
    profile: function (req, res) {
        
        res.render('profile', {user: req.session.user});
    },
    logout:function(req, res) {
    req.session.destroy();
    return res.redirect('/');    
    }

    
}


module.exports = usersController;