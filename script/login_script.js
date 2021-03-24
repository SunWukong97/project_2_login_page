let defaultUsername = "admin";
let defaultPassword = "admin";
let username;
let password;

let listOfUsers = [];

function submitFunction(){
    username = document.getElementById('usernameField').value;
    password = document.getElementById('passwordField').value;

    if(username === defaultUsername && password === defaultPassword)
    {
        console.log("welcome");
    }

    else{
        console.log('incorrect username and/or password');
    }
}

//for later use in the registration page
function registerFunction(){

    username = document.getElementById('usernameField').value;
    password = document.getElementById('passwordField').value;
    var newUser = new User(username, password);
    
    listOfUsers.push(newUser);
    
    
    for(let i = 0; i < listOfUsers.length; i++)
    {
        console.log(`${listOfUsers[i].username} + ${listOfUsers[i].password}`);
        //experimenting with getter and setters
        // listOfUsers[i].username = "new username";
        // listOfUsers[i].password = "new password";
        // console.log(`${listOfUsers[i].username} + ${listOfUsers[i].password}`);
    }
}

class User{
    constructor(username, password){
        this._username = username;
        this._password = password;
    }

    get username(){
        return this._username;
    }

    get password(){
        return this._password;
    }

    set username(newUsername){
        this._username = newUsername;
    }

    set password(newPassword){
        this._password = newPassword;
    }
}