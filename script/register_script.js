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

let firstnameField = document.getElementById('first-name-field');
let lastnameField = document.getElementById('last-name-field');
let emailField = document.getElementById('email-field');
let usernameField = document.getElementById('username-field');
let passwordField = document.getElementById('password-field');
let confirmPasswordField = document.getElementById('confirm-password-field');

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
firstnameField.addEventListener("input", (event) => {
    firstnameFilled = checkInputField(firstnameField);

});

lastnameField.addEventListener("input", () => {
    lastnameFilled = checkInputField(lastnameField);
});

emailField.addEventListener("input", () => {
    emailFilled = checkInputField(emailField);
});

usernameField.addEventListener("input", () => {
    console.log(usernameField);
    usernameFilled = checkInputField(usernameField);
    
});

passwordField.addEventListener("input", () => {
    passwordFilled = checkInputField(passwordField);
});

confirmPasswordField.addEventListener("input", () => {
    confirmPasswordFilled = checkInputField(confirmPasswordField);
});




//a loop that will continually check if all fields of the form are filled every 500ms
var interval = 300;
window.setInterval(() => {

    if (firstnameFilled && lastnameFilled && emailFilled && usernameFilled && passwordFilled && confirmPasswordFilled) {
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

    let firstname = document.getElementById('first-name-field').value;
    let lastname = document.getElementById('last-name-field').value;
    let email = document.getElementById('email-field').value;
    let username = document.getElementById('username-field').value;
    let password = document.getElementById('password-field').value;
    let confirmPassword = document.getElementById('confirm-password-field').value;


    if (!validateUsernameRegistration(username)) {
        usernameErrorMessage.style.display = "block";
    }
    else if (validateUsernameRegistration(username)) {
        usernameErrorMessage.style.display = "none";
    }

    if (!validateEmailRegistration(email)) {
        emailErrorMessage.style.display = "block";
    }
    else if (validateEmailRegistration(email)) {
        emailErrorMessage.style.display = "none";
    }

    if (!validEmailFormat(email)) {
        emailErrorMessage2.style.display = "block";
    }
    else if (validEmailFormat(email)) {
        emailErrorMessage2.style.display = "none";
    }

    if (password !== confirmPassword) {
        passwordErrorMessage.style.display = "block";
    }
    else if (password == confirmPassword) {
        passwordErrorMessage.style.display = "none";
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
 * Checks to see if the username is already registered
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
 * Checks to see if the email address is already registered
 * @param {*} unregEmail string from the email input field
 * @returns a boolean value depending on whether the email and username inputted are unregistered. True if no registered, false if 
 *          they alread exist
 */
function validateEmailRegistration(unregEmail) {

    for (var i = 0; i < localStorage.length; i++) {

        var key = localStorage.key(i);
        var registeredEmail = JSON.parse(localStorage.getItem(key)).email;
        if (unregEmail == registeredEmail) {
            return false;
        }
    }
    return true;
}

/**
 * Checks to see if the password is formatted correctly
 * @param {*} this_passwordField strin from the password input field 
 * @returns  a boolean value depending if the password is formatted correctly
 */
function validPasswordFormat(this_passwordField) {
    let array = this_passwordField.split("");
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

/**
 * Checks to see if the email is formatted correctly 
 * @param {*} this_emailField string from the email input field
 * @returns a boolean value depending if the email is formatted correctly 
 */
function validEmailFormat(this_emailField) {

    if (this_emailField.indexOf('@') != -1) {
        let array = this_emailField.substring(this_emailField.indexOf("@"));
        array = array.split('');
        if (array.length > 1) {
            return true;
        }
    }
    return false;
}

/**
 * Checks to see if characters have been inputted into the input fields
 * @param {*} inputField the input field to be checked
 * @returns a boolean value depending on if the input fields are not just empty spaces
 */
function checkInputField(inputField) {

    const notEmpty = inputField.value;
    const notEmptySpaces = inputField.value.trim();
    if (notEmpty && notEmptySpaces) {
        return true;
    }
    return false;
}