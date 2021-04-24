const form = document.querySelector('#product');

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    const productField = this.querySelector('#nameProd');
    const descriptionField = this.querySelector('#description');

    const fileInput = this.querySelector('#image');
    const filePath = fileInput.value;
    const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    
    if(productField.value == ''){
        alert('Debes completar el campo Nombre del Producto');
        }else if(productField.value.length <5){
        alert('El nombre del producto debe tener mas de 5 caracteres')
        }
       if(descriptionField.value == ''){
           alert('Debes completar la descipcion');
        }else if(descriptionField.value.length <19){
            alert('La descripcion debe tener mas de 20 caracteres')
        } 
        if(!allowedExtensions.exec(filePath)){
        alert('Adjunta una imagen con las siguientes extensiones .jpeg/.jpg/.png/.gif');
        fileInput.value = '';
        return false;
        }
});

