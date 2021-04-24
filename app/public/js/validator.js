
    const form = document.querySelector('#select');
    

    form.addEventListener('submit', function(event){
        event.preventDefault();       
        const firstField = this.querySelector('#firstName');
        const lastField = this.querySelector('#lastName');
        const emailField = this.querySelector('#email');
        const passwordField = this.querySelector('#pass');
        
        
        const fileInput = this.querySelector('#image');
        const filePath = fileInput.value;
        const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
      


        if(firstField.value == ''){
            alert('Debes completar el campo Nombre');
        }else if(firstField.value.length <3){
            alert('Tu nombre debe tener mas de 2 caracteres')
        }
        if(lastField.value == ''){
            alert('Debes completar el campo Apellido');
        }
        if(emailField.value == ''){
            alert('Debes completar el campo Email');
        
        }
        if(passwordField.value == ''){
            alert('Debes completar el campo Password');
        }else if(passwordField.value.length <8){
            alert('Tu contraseña debe tener mas de 8 caracteres')
       
        }
        
        if(!allowedExtensions.exec(filePath)){
        alert('Adjunta una imagen con las siguientes extensiones .jpeg/.jpg/.png/.gif');
        fileInput.value = '';
        return false;
        }
        
    });
