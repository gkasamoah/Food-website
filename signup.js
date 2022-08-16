// Form validation
// get the elements to be validated
let username = document.getElementById('username')
let Emsg = document.getElementById('error')
let form = document.getElementById('signup')
let password = document.getElementById('password')
let email =document.getElementById('email')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
   
    
   user()
})
email.addEventListener('input',()=>{
    if (email.validity.typeMismatch) {
        email.setCustomValidity('i am expecting an email')
        email.reportValidity()
    } else {
        email.setCustomValidity('')
    }
})
function user(){
    if (username.value==='') {
        Emsg.textContent='this field cannot be empty'
        Emsg.style.color='red'
    } else {
        
    }
}
password.addEventListener('input',()=>{
    let pword = /\b([\d{1,4}\.\D])|(\w\W\s\S)[@,$%]/gi
    
    if (password.validity.valid && pword.test('password')) {
        password.setCustomValidity('')
    }
    
    else {
        password.setCustomValidity('')
       
    }

})


        
  