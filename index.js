
function validationEmail() {

    const emailInput = document.querySelector('.js-input');
    const errorMessage = document.querySelector('.js-emailError');

    //Regular validation patterns of email.
    const validPatterns = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(validPatterns.test(emailInput.value)){
        //valid email

        errorMessage.textContent = '';

    } else {
        //invilid error message
        errorMessage.textContent = 'valid email required';
    }
}
validationEmail();

console.log(validationEmail());
