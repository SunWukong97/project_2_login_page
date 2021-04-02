/**
 * @author Thomas Nguyen 
 * This script will check whether or not a user registering for an account on a website is a new user. This is achieved by using
 * local storage to act as a database to search for existing accounts.
 * If the username or email address they entered already exists, it will notify them. 
 * If they were successfully able to register their account they will be brought to the profile page
 * 
 */


import User from './module/user.js';


let firstnameFilled;
let lastnameFilled;
let usernameFilled;
let emailFilled;
let passwordFilled;
let confirmPasswordFilled;

let firstname = document.getElementById('first-name-field');
let lastname = document.getElementById('last-name-field');
let email = document.getElementById('email-field');
let username = document.getElementById('username-field');
let password = document.getElementById('password-field');
let confirmPassword = document.getElementById('confirm-password-field');

let usernameErrorMessage = document.getElementById('username-error-message');
usernameErrorMessage.style.display = "none";

let emailErrorMessage = document.getElementById('email-error-message');
emailErrorMessage.style.display = "none";

let emailErrorMessage2 = document.getElementById('email-error-message2');
emailErrorMessage2.style.display = "none";

let passwordErrorMessage = document.getElementById('password-error-message');
passwordErrorMessage.style.display = "none";


let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    registerFunction();
});

submitBtn.disabled = true;
submitBtn.classList.add("disabled");

//will constatnly check to see if anything is typed into the field
firstname.addEventListener("input", (event) => {
    firstnameFilled = checkInputField(firstname);

});

lastname.addEventListener("input", () => {
    lastnameFilled = checkInputField(lastname);
});

email.addEventListener("input", () => {
    emailFilled = checkInputField(email);
});

username.addEventListener("input", () => {
    usernameFilled = checkInputField(username);
});

password.addEventListener("input", () => {
    passwordFilled = checkInputField(password);
});

confirmPassword.addEventListener("input", () => {
    confirmPasswordFilled = checkInputField(confirmPassword);
});




//a loop that will continually check if all fields of the form are filled every 500ms
var interval = 500;
window.setInterval(() => {

    if (firstnameFilled && lastnameFilled && usernameFilled && passwordFilled && confirmPasswordFilled) {
        submitBtn.disabled = false;
        submitBtn.classList.remove("disabled");


    }
    else {
        submitBtn.disabled = true;
        submitBtn.classList.add('disabled');
    }
}, interval);




/**
 * Validates wether or not the username and email already exists along with if the password entered is correct
 */
function registerFunction() {

    firstname = document.getElementById('first-name-field').value;
    lastname = document.getElementById('last-name-field').value;
    email = document.getElementById('email-field').value;
    username = document.getElementById('username-field').value;
    password = document.getElementById('password-field').value;
    confirmPassword = document.getElementById('confirm-password-field').value;


    if (!validateUsernameRegistration(username)) {
        usernameErrorMessage.style.display = "block";
    }

    if (!validateEmailRegistration(email)) {
        emailErrorMessage.style.display = "block";
    }

    console.log(validEmailFormat(email));
    if (!validEmailFormat(email)) {
        emailErrorMessage2.style.display = "block";
    }

    if(password !== confirmPassword){
        passwordErrorMessage.style.display = "block";
    }

    if (password === confirmPassword && validateUsernameRegistration(username) && validateEmailRegistration(email) && validEmailFormat(email)) {
        var newUser = new User(firstname, lastname, email, username, password);
        console.log(newUser);

        localStorage.setItem(newUser.username, JSON.stringify(newUser));
        console.log(JSON.stringify(newUser));

        //When redirected to profile page allows for it to keep track of who is currently logged in.
        localStorage.setItem("currentUser", JSON.stringify(newUser));

        window.location.href = "profile.html";
    }

}

/**
 * 
 * @param {*} unregUsername string from the username input field 
 * @returns a boolean value depending on whether the email and username inputted are unregistered. True if no registered, false if 
 *          they alread exist
 */
function validateUsernameRegistration(unregUsername) {

    if (localStorage.getItem(unregUsername) === null) {
        return true;
    }

    return false;
}

/**
 * 
 * @param {*} unregEmail string from the email input field
 * @returns a boolean value depending on whether the email and username inputted are unregistered. True if no registered, false if 
 *          they alread exist
 */
function validateEmailRegistration(unregEmail) {

    if (localStorage.getItem(unregEmail) == null) {
        return true;
    }

    return false;
}

function validPasswordFormat(passwordField) {
    let array = passwordField.split("");
    let validPassword = true;
    array.forEach((i) => {
        if (i === ' ') {
            validPassword = false;
        }
        else {
            validPassword = true;
        }
    });
    return validPassword;
}

function validEmailFormat(emailField) {

    if (emailField.indexOf('@') != -1) {
        console.log("no @");
        let array = emailField.substring(emailField.indexOf("@"));
        array = array.split('');
        console.log(array);
        if (array.length > 1) {
            return true;
        }
    }
    return false;
}

function checkInputField(inputField) {

    const notEmpty = inputField.value;
    const notEmptySpaces = inputField.value.trim();
    if (notEmpty && notEmptySpaces) {
        return true;
    }
    return false;
}