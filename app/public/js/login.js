const form = document.querySelector('#log');

form.addEventListener('submit', function(event){
       
  
  const emailField = document.querySelector('#email');
  const passwordField = document.querySelector('#password');
  
  if(emailField.value == ''){
      alert('Debes completar el campo Email');
      event.preventDefault();          
  }
  if(passwordField.value == ''){
      alert('Debes completar el campo Password');
      event.preventDefault();  
  }
  
   
});
