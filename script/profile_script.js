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

/**
 * to display the pop up dialog modal 
 */
function displayDialog(){
    dialogModalOverlay.style.display = "block";
    addAnimation(modal, 'animate-modal-expand');
    removeAnimation(modal, 'animate-modal-expand', 300);
    
}

/**
 * to dismiss the pop up dialog modal
 */
function dismissDialog() {
    dialogModalOverlay.style.display = "none";
}

//dismisses the dialog when the overlay is clicked
window.onclick = (event) => {
    if (event.target == dialogModalOverlay) {
        dialogModalOverlay.style.display = "none";
    }
}

/**
 * removes the account from the localStorage list
 */
function deleteAccount(){
    localStorage.removeItem(loginInfo.username);

}



/** 
 * animation functions 
*/

/**
 * To add an animation to a HTML element
 * @param {*} itemToAnimate item to add an animation to
 * @param {*} animationName the animation css class name
 * 
 */
function addAnimation(itemToAnimate, animationName){
    itemToAnimate.classList.add(animationName);
    
}

/**
 * to remove an animation from a HTML element
 * @param {*} itemToAnimate item to add an animation to
 * @param {*} animationName css class animation name
 * @param {*} animationTime how long the animation will play for before the css class is removed
 */
function removeAnimation(itemToAnimate, animationName, animationTime){
    setTimeout(() => {
        itemToAnimate.classList.remove(animationName);
    }, animationTime);
}

