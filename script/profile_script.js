import User from './module/user.js';

const noneLoggedIn = new User("none", "none", "none", "none", "none");

let currentUser = document.getElementById("current-user");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let username = document.getElementById("username");
let dialogModalOverlay = document.getElementById("dialog-modal-overlay");
let modal = document.getElementById("modal");

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
    localStorage.setItem("currentUser", JSON.stringify(noneLoggedIn));
    window.location.href = "index.html";
}

function displayDialog(){
    dialogModalOverlay.style.display = "block";
    addAnimation(modal, 'animate-modal-expand', 300);
    
}

function dismissDialog() {
    dialogModalOverlay.style.display = "none";
}

//dismisses the dialog when the overlay is clicked
window.onclick = (event) => {
    if (event.target == dialogModal) {
        dialogModalOverlay.style.display = "none";
    }
}

function deleteAccount(){
    localStorage.removeItem(loginInfo.username);

}



/** 
 * animation functions 
*/

function addAnimation(itemToAnimate, animationName, animationTime){
    itemToAnimate.classList.add(animationName);
    setTimeout(() => {
        modal.classList.remove(animationName);
    }, animationTime);
}

