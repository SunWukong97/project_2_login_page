/**
 * @author Thomas Nguyen
 * This script checks whether or not the login credentials matches the ones that already exists in the database for the website.
 * This particular version utilizes local storage as the database where it pulls and push info from and to. 
 */
//importing modules: similar to importing classes in Java
import User from './module/user.js';


let errorMessage = document.getElementById("error-message");


const defaultUser = new User("admin", "admin", "admin", "admin", "admin");
const defaultUser2 = new User("admin", "admin", "admin", "username", "password");

let listOfDefaultUsers = [defaultUser, defaultUser2];


let username;
let password;

/**
 * when using modules use event listeners to allow for interactability, specifically onclick events.
 * If not functions will be 'undefined' and an error will occur
 */
document.getElementById("sign-in-button").addEventListener('click', (event) => {
    event.preventDefault();
    submitFunction();
});

document.getElementById("clear-button").addEventListener('click', () => {
    deleteAllAccounts();
});


/**
 * To validate whether or not the login credentials are correct,
 */
function submitFunction() {
    username = document.getElementById('usernameField').value;
    password = document.getElementById('passwordField').value;
    let userExist = false;

    //default account login check.
    for (var i = 0; i < listOfDefaultUsers.length; i++) {
        if (listOfDefaultUsers[i].username === username && listOfDefaultUsers[i].password === password) {
    
            localStorage.setItem("currentUser", JSON.stringify(listOfDefaultUsers[i]));
            window.location.href = "profile.html";
            userExist = true;
            break;
        }

    }



    if (localStorage.getItem(username) !== null) {
        
        //try catch block used to prevent an error being thrown if nothing is typed into the input fields
        try {
            let userInfo = JSON.parse(localStorage.getItem(username));
            let correctPassword = userInfo.password;
            if (password === correctPassword) {
                //to know who is currently logged in and to pull their info for their profile page
                localStorage.setItem("currentUser", localStorage.getItem(username));
                userExist = true;
                window.location.href = "profile.html";
                
            }

        } 
        catch (error) {
            errorMessage.style.display = "block";            

        }


    }

    if(emailLogin(username)){
        userExist = true;
    }

    if (!userExist) {
        console.log('incorrect username and/or password');
        errorMessage.style.display = "block";
    }
}

/**
 * deletes all accounts and their info stored in the database
 * aka the local storage
 */
function deleteAllAccounts(){
    localStorage.clear();
}

/**
 * Used to validate whether or not an account exists with the email address entered into the username input field. An alternative way of logging in rather than using the username tied to an account.
 * @param {*} emailAddress the email address to verify
 * @returns a boolean value: true or false.
 */
function emailLogin(emailAddress){
    for( var i = 0; i < localStorage.length; i++){
        var key = localStorage.key(i);
        let registeredAccount = JSON.parse(localStorage.getItem(key));

        if(emailAddress == registeredAccount.email){
            let correctPassword = registeredAccount.password;

            if(password === correctPassword){
                localStorage.setItem("currentUser", JSON.stringify(registeredAccount));
                window.location.href = "profile.html";
                return true;
            }
        }
    }
    return false;
}

