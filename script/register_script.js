import User from './module/user.js';


let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', () => {
    registerFunction();
});

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

        localStorage.setItem(email, email);

        window.location.href = "index.html";
    }

    else{
        console.log("username already exists");
    }      
    
}

function validateRegistration(unregUsername, unregEmail){
    
    if(localStorage.getItem(unregUsername) === null && localStorage.getItem(unregEmail) == null){
        return true;
    }

    return false;
}