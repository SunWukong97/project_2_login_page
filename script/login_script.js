/**
 * @author Thomas Nguyen
 * This script checks whether or not the login credentials matches the ones that already exists in the database for the website.
 * This particular version utilizes local storage as the database where it pulls and push info to and from. 
 */
//importing modules: similar to importing classes in Java
import User from './module/user.js';



const defaultUser = new User("admin", "admin,", "admin", "admin", "admin");
const defaultUser2 = new User("admin", "admin", "admin", "username", "password");

let listOfDefaultUsers = [defaultUser, defaultUser2];


let username;
let password;

/**
 * when using modules use event listeners to allow for interactability, specifically onclick events.
 * If not functions will be 'undefined' and an error will occur
 */
document.getElementById("signInButton").addEventListener('click', () =>{
    submitFunction();
});



/**
 * To validate whether or not the login credentials are correct,
 */
function submitFunction(){
    username = document.getElementById('usernameField').value;
    password = document.getElementById('passwordField').value;
    let userExist = false;

    for(var i = 0; i < listOfDefaultUsers.length; i++){
        if(listOfDefaultUsers[i].username === username && listOfDefaultUsers[i].password === password)
            {
                console.log("welcome");
                userExist = true;
               break;
            }
            
    }

    if(localStorage.getItem(username) !== null){

        let userInfo = JSON.parse(localStorage.getItem(username));
        let correctPassword = userInfo.password;
        if(password === correctPassword)
        {
            //to know who is currently logged in and to pull their info for their profile page
            localStorage.setItem("currentUser", localStorage.getItem(username));
            console.log('welcome');
            console.log(userInfo);
            userExist = true;
        }
    }
    
    if(!userExist){
        console.log('incorrect username and/or password');
    }
    

    

   
}
