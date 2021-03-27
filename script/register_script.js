import User from './module/user';

let listOfUsers = [];

function registerFunction(){

    let username = document.getElementById('usernameField').value;
    let password = document.getElementById('passwordField').value;
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