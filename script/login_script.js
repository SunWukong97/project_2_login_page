/**
 * @author Thomas Nguyen
 * This script checks whether or not the login credentials matches the ones that already exists in the database for the website.
 * This particular version utilizes local storage as the database where it pulls and push info to and from. 
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

    for (var i = 0; i < listOfDefaultUsers.length; i++) {
        if (listOfDefaultUsers[i].username === username && listOfDefaultUsers[i].password === password) {
            console.log("welcome");
            localStorage.setItem("currentUser", JSON.stringify(listOfDefaultUsers[i]));
            window.location.href = "profile.html";
            userExist = true;
            break;
        }

    }

    if (localStorage.getItem(username) !== null) {
        
        try {
            let userInfo = JSON.parse(localStorage.getItem(username));
            let correctPassword = userInfo.password;
            if (password === correctPassword) {
                //to know who is currently logged in and to pull their info for their profile page
                localStorage.setItem("currentUser", localStorage.getItem(username));
                window.location.href = "profile.html";
                userExist = true;
            }

        } 
        catch (error) {
            errorMessage.style.display = "block";            

        }


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

