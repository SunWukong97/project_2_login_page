let modalContainer = document.getElementById("modal-container");
let errorMessage = document.getElementById("email-field-error-message");
let emailField = document.getElementById("email-field");



document.getElementById("next-button").addEventListener('click', (event) => {
    event.preventDefault();
    next();
});
    





function next(){
    if(!validEmailFormat(emailField.value)){
        errorMessage.style.display = "block";
    }
    
    else{
        errorMessage.style.display = "none";
        modalContainer.classList.add("modal-animation"); 
    }
}


/**
 * Checks to see if the email is formatted correctly 
 * @param {*} this_emailField string from the email input field
 * @returns a boolean value depending if the email is formatted correctly 
 */
 function validEmailFormat(this_emailField) {

    if(this_emailField.indexOf('@') != -1){
        let array = this_emailField.substring(this_emailField.indexOf('@'));
        array = array.split('');
        if(array.length > 1){
            return true;
        }
    }
    return false;
}