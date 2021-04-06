let currentUser = document.getElementById("current-user");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let username = document.getElementById("username");

let loginInfo = JSON.parse(localStorage.getItem("currentUser"));

currentUser.innerText = loginInfo.firstname;
firstname.innerText = loginInfo.firstname;
lastname.innerText = loginInfo.lastname;
email.innerText = loginInfo.email;
username.innerText = loginInfo.username;


function logOut(){
    localStorage.setItem("currentUser", null);
    window.location.href = "index.html";
}

function deleteAccount(){
    ;
}