let alertBannerContainer = document.getElementById("alert-banner-container");
let errorMessage = document.getElementById("email-field-error-message");
let emailField = document.getElementById("email-field");

let password;


document.getElementById("next-button").addEventListener('click', (event) => {
    event.preventDefault();
    next();
});

/**
 * function for the next button, will display a banner at the top of the page if everything was 
 * successful
 */
function next() {
    validEmailFormat(emailField.value) ? errorMessage.style.display = "none" : errorMessage.style.display = "block";
    if (validateRegisteredEmail(emailField.value)) {
        addAnimation(alertBannerContainer, 'alert-banner-container-animation');
        window.alert(`shhh... the password for ${emailField.value} was: ${password}`);
    }

    if (!validateRegisteredEmail(emailField.value) && (validEmailFormat(emailField.value))){
        addAnimation(alertBannerContainer, 'alert-banner-container-animation');
    }
}


/**
 * Checks to see if the email is formatted correctly 
 * @param {*} this_emailField string from the email input field
 * @returns a boolean value depending if the email is formatted correctly 
 */
function validEmailFormat(this_emailField) {

    if (this_emailField.indexOf('@') != -1) {
        let array = this_emailField.substring(this_emailField.indexOf('@'));
        array = array.split('');
        if (array.length > 1) {
            return true;
        }
    }
    return false;
}

/**
 * Checks to see if the email address is one that is registered
 * @param {*} emailAddress string from the email input field 
 * @returns a boolean value if the email address is registered. True if the email is registerd, false if it isn't.
 */
function validateRegisteredEmail(emailAddress) {

    for (var i = 0; i < localStorage.length; i++) {

        var key = localStorage.key(i);
        var accountInfo = JSON.parse(localStorage.getItem(key));

        if (emailAddress == accountInfo.email) {
            password = accountInfo.password;

            return true;
        }
    }
    return false;
}

/**
 * To add an animation to a HTML element
 * @param {*} itemToAnimate item to add an animation to
 * @param {*} animationName the animation css class name
 * 
 */
 function addAnimation(itemToAnimate, animationName){
    itemToAnimate.classList.add(animationName);
    
}