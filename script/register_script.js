/**
 * @author Thomas Nguyen 
 * This script will check whether or not a user registering for an account on a website is a new user. This is achieved by using
 * local storage to act as a database to search for existing accounts.
 * If the username or email address they entered already exists, it will notify them. 
 * If they were successfully able to register their account they will be brought back to the login page
 * 
 */


import User from './module/user.js';


let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', () => {
    registerFunction();
});

/**
 * Validates wether or not the username and email already exists along with if the password entered is correct
 */
function registerFunction(){

    let firstname = document.getElementById('first-name-field').value;
    let lastname = document.getElementById('last-name-field').value;
    let email = document.getElementById('email-field').value;
    let username = document.getElementById('username-field').value;
    let password = document.getElementById('password-field').value;
    let confirmPassword = document.getElementById('confirm-password-field').value;
    


    
    if(password === confirmPassword && validateRegistration(username, email)){
        var newUser = new User(firstname, lastname, email, username, password);
        console.log(newUser);

        localStorage.setItem(newUser.username, JSON.stringify(newUser));
        console.log(JSON.stringify(newUser));

        //When redirected to profile page allows for it to keep track of who is currently logged in
        localStorage.setItem(email, email);

        window.location.href = "profile.html";
    }

    else{
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
function validateRegistration(unregUsername, unregEmail){
    
    if(localStorage.getItem(unregUsername) === null && localStorage.getItem(unregEmail) == null){
        return true;
    }

    return false;
}