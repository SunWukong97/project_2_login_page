//importing modules: similar to importing classes in Java
import User from './module/user.js';



const defaultUser = new User("admin", "admin");
const defaultUser2 = new User("username", "password");

let listOfUsers = [defaultUser, defaultUser2];


let username;
let password;

/**
 * when using modules use event listeners to allow for interactability, specifically onclick events.
 * If not functions will be 'undefined' and an error will occur
 */
document.getElementById("signInButton").addEventListener('click', () =>{
    submitFunction();
});



function test(){
    console.log("hello");
}
function submitFunction(){
    username = document.getElementById('usernameField').value;
    password = document.getElementById('passwordField').value;
    let userExist = false;

    for(var i = 0; i < listOfUsers.length; i++){
        if(listOfUsers[i].username === username && listOfUsers[i].password === password)
            {
                console.log("welcome");
                userExist = true;
               
            }
            
    }
    
    if(!userExist){
        console.log('incorrect username and/or password');
    }
    

    // if(username === defaultUser.username && password === defaultUser.password)
    // {
        
    // }

    // else if(username === defaultUser2.username && password === defaultUser2.password)
    // {
    //     console.log("welcome");
    // }

   
}

