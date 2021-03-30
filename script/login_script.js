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
            console.log('welcome');
            console.log(userInfo);
            userExist = true;
        }
    }
    
    if(!userExist){
        console.log('incorrect username and/or password');
    }
    

    

   
}

