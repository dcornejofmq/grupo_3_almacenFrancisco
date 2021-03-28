const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');



const usersFilePath = path.join(__dirname, '../database/users.json');
const user = fs.readFileSync(usersFilePath,{encoding: 'utf-8'}, 'w' );
const users = JSON.parse(user);
 
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



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


            let userNew = {
            
                id: users[users.length-1].id+1,           
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,            
                password: bcrypt.hashSync(req.body.password, 10),
                image: req.file.filename
                
            }
            
            users.push(userNew)  
            console.log(users)      
            let userJson = JSON.stringify(users);        
            fs.writeFileSync(path.join(__dirname, '../database/users.json'), userJson);
            return res.redirect('/');
        } else {
            return res.render('registerUser', { errors: errors.array(), 
            old: req.body }); 
           
        }
      
        
    },
    editUser: function(req, res){
        let idUser = req.params.idUser;
        let userToEdit = users[idUser];
        
        return res.render('editUser', {userToEdit: userToEdit});
    },    
    saveUser: function(req, res) {    
        let userEdit = users.find(users =>(users.id == req.params.id));

        let updateUser = users.map(users => {
            if(users.id == usersEdit.id){
                users.firstName = req.body.firstName;
                users.lastName = req.body.lastName;
                users.email = req.body.category;
                users.password = req.body.password;
                users.image = req.body.image
            }
            return users;
        })
        let userJson = JSON.stringify(updateProd);
        
        fs.writeFileSync(path.join(__dirname, '../database/users.json'), userJson);

        res.redirect('/')
    },
    userDelete:function(req, res){
        userToDel = users.find(users => (users.id == req.params.id));
        
        return res.render('deleteUser', {userToDel: userToDel});
    },
    delete: function(req, res){
        let userToDelete = users.find(users => (users.id == req.params.id));
        let user = users.filter(users =>(users.id != userToDelete.id));
        let userJson = JSON.stringify(user);
        fs.writeFileSync(path.join(__dirname, '../database/users.json'), userJson);
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