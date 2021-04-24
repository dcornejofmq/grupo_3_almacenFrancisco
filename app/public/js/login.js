const form = document.querySelector('#log');

form.addEventListener('submit', function(event){
  event.preventDefault();       
  
  const emailField = this.querySelector('#email');
  const passwordField = this.querySelector('#password');
  
  if(emailField.value == ''){
      alert('Debes completar el campo Email');        
  }
  if(passwordField.value == ''){
      alert('Debes completar el campo Password');
  }
  
   
});
