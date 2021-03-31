/**
 * @author Thomas Nguyen 
 * This script will check whether or not a user registering for an account on a website is a new user. This is achieved by using
 * local storage to act as a database to search for existing accounts.
 * If the username or email address they entered already exists, it will notify them. 
 * If they were successfully able to register their account they will be brought back to the login page
 * 
 */


import User from './module/user.js';



let firstname = document.getElementById('first-name-field');
let lastname = document.getElementById('last-name-field');
let email = document.getElementById('email-field');
let username = document.getElementById('username-field');
let password = document.getElementById('password-field');
let confirmPassword = document.getElementById('confirm-password-field');

let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    registerFunction();
});

submitBtn.disabled = true;
submitBtn.classList.add("disabled");

firstname.addEventListener("input", (event)=>{
    const notEmpty = firstname.value;
    const notEmptySpace = firstname.value.trim();
    if(notEmpty && notEmptySpace){
        submitBtn.disabled = false;
        submitBtn.classList.remove("disabled");
    }

    else{
        submitBtn.disabled = true;
        submitBtn.classList.add("disabled")
    }
});



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



    if (password === confirmPassword && validateRegistration(username, email)) {
        var newUser = new User(firstname, lastname, email, username, password);
        console.log(newUser);

        localStorage.setItem(newUser.username, JSON.stringify(newUser));
        console.log(JSON.stringify(newUser));

        //When redirected to profile page allows for it to keep track of who is currently logged in.
        localStorage.setItem("currentUser", JSON.stringify(newUser));

        window.location.href = "profile.html";
    }

    else {
        console.log("username already exists");
    }

}

/**
 * 
 * @param {*} unregUsername string from the username input field 
 * @param {*} unregEmail string from the email input field
 * @returns a boolean value depending on whether the email and username inputted are unregistered. True if no registered, false if 
 *          they alread exist
 */
function validateRegistration(unregUsername, unregEmail) {

    if (localStorage.getItem(unregUsername) === null && localStorage.getItem(unregEmail) == null) {
        return true;
    }

    return false;
}