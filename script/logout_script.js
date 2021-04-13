import User from './module/user.js';

const noneLoggedIn = new User("none", "none", "none", "none", "none");

let currentUser = document.getElementById("current-user");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let username = document.getElementById("username");
let dialogModal = document.getElementById("dialog-modal");

let loginInfo = JSON.parse(localStorage.getItem("currentUser"));

document.getElementById("logout-button").addEventListener('click', (event) => {
    logOut();
});

document.getElementById("delete-account-button").addEventListener('click', (event) => {
    displayDialog();
});


document.getElementById("delete-button").addEventListener('click', (event) => {
    event.preventDefault();
    deleteAccount();
    dismissDialog();
    logOut();
    
});
document.getElementById("cancel-button").addEventListener('click', (event) => {
    event.preventDefault();
    dismissDialog();
});

currentUser.innerText = loginInfo.firstname;
firstname.innerText = loginInfo.firstname;
lastname.innerText = loginInfo.lastname;
email.innerText = loginInfo.email;
username.innerText = loginInfo.username;


function logOut(){
    localStorage.setItem("currentUser", noneLoggedIn);
    window.location.href = "index.html";
}

function displayDialog(){
    dialogModal.style.display = "block";
}

function dismissDialog() {
    dialogModal.style.display = "none";
}

//dismisses the dialog when the overlay is clicked
window.onclick = (event) => {
    if(event.target == dialogModal){
        dialogModal.style.display = "none";
    }
}

function deleteAccount(){
    localStorage.removeItem(loginInfo.username);

}

