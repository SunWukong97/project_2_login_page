# project_2_login_page
## General Info
A personal project where I create an account system that allows a user to login, sign up and retrieve their password. It was also an oppertunity for me to learn and explore how JavaScript ES6 classes work and how they differentiate from other OOP languages, along with DOM manipulation using Javascript.

The purpose of this document is to describe the functionality of each page and how they work. In this document the terms **system**, **database**  and **user** will be used when describing certain things work, where 
<br>\* **system** will refer to pieces of JavaScript code. 
<br>\* **database** will refer to the usage of local storage in order to simulate a database.
<br>\* **user** will refer to a person interacting with the website.
<br>link to the website: https://sunwukong97.github.io/project_2_login_page/

## Table of Contents
+ [Login Page](#login-page)
+ [Forgot Password Page](#forgot-password-page)
+ [Sign up Page](#sign-up-page)
+ [Profile Page](#profile-page)
+ [Technologies](#technologies)
+ [Credits](#credits)

## Login Page
![picture of the login page](https://github.com/SunWukong97/project_2_login_page/blob/main/login_page_mockup/Web%201920%20%E2%80%93%20login.png)
Here at the main page a user can enter their username/email and password in order to sign in if they already have an account. After entering their credentials the system will check to see if the corresponding username and password matches an existing account in the databse. If it does they will be redirected to their profile page, if not an error message will show up indicating that either the password or username is incorrect.
 In order to achieve this I used LocalStorage to act as a database to check for the cerednetials entered whenever the login button is clicked.
 ```
 function submitFunction() {
    username = document.getElementById('usernameField').value;
    password = document.getElementById('passwordField').value;
    let userExist = false;

    //default account login check.
    for (var i = 0; i < listOfDefaultUsers.length; i++) {
        if (listOfDefaultUsers[i].username === username && listOfDefaultUsers[i].password === password) {
    
            localStorage.setItem("currentUser", JSON.stringify(listOfDefaultUsers[i]));
            window.location.href = "profile.html";
            userExist = true;
            break;
        }

    }



    if (localStorage.getItem(username) !== null) {
        
        //try catch block used to prevent an error being thrown if nothing is typed into the input fields
        try {
            let userInfo = JSON.parse(localStorage.getItem(username));
            let correctPassword = userInfo.password;
            if (password === correctPassword) {
                //to know who is currently logged in and to pull their info for their profile page
                localStorage.setItem("currentUser", localStorage.getItem(username));
                userExist = true;
                window.location.href = "profile.html";
                
            }

        } 
        catch (error) {
            errorMessage.style.display = "block";            

        }


    }

    if(emailLogin(username)){
        userExist = true;
    }

    if (!userExist) {
        console.log('incorrect username and/or password');
        errorMessage.style.display = "block";
    }
}
```

### Forgot password
In the event a user forgets their password they can click on the **Forgot Password?** link in order to be redirected to the Forgot Password page to retrieve their password.

### Join us
If a user does not have an account they may click on the **Join us** link to be redirected to the sign up page and create an account there.

### Important
Since localStorage is being used as a database to store all the accounts information, in order to delete all stored information from your machine press the **A** button located in the "Or login with" section. 

## Forgot Password Page
![picture of the forgot password page](https://github.com/SunWukong97/project_2_login_page/blob/main/login_page_mockup/Web%201920%20%E2%80%93%20forgot%20password.png)
A user may enter their email address in to the input field to retrieve their password that is tied to a registered account. If the email entered is tied to a registered account a pop up alert will show up, if not than just a notification will appear at the top of the screen indicating an email has been sent.

![notification at the top of the pop up page after an email has been entered](https://github.com/SunWukong97/project_2_login_page/blob/main/login_page_mockup/Web%201920%20%E2%80%93%20forgot%20password%20%E2%80%93%201.png)

In the event that the text entere into the input field is not in the format of an email address e.x. something@domainName than an error message will showup indicating invalid email format.
<br>![error message for invalid email](https://github.com/SunWukong97/project_2_login_page/blob/main/login_page_mockup/error%20message.png)

## Sign up Page
![picture of the sign up page](https://github.com/SunWukong97/project_2_login_page/blob/main/login_page_mockup/Web%201920%20%E2%80%93%20registration.png)
On This page a user may sign up for an account by entereing all the necessary information into the fields. All the fields must be filled in before the sign up button can be pressed. Whenever a user presses the sign up button various fields will be checked by the system before submitting the information to the database. If a field is not filled incorrectly an appropriate error message will display underneath the field. For example if a username or email is already registered to an account in the database an error message will show up indicating it has already been taken or is registered to another account and nothing will be submitted to the databse.
<br>![registered username error message](https://github.com/SunWukong97/project_2_login_page/blob/main/login_page_mockup/error%20message%20%E2%80%93%202.png)

Along with that the system will also check to make sure the email address entered into the email field is in the correct email format (something@domainName). The same will happen with the password and confirm password field to check that the text in both fields are the same before submitting.

## Profile Page
![picture of profile page](https://github.com/SunWukong97/project_2_login_page/blob/main/login_page_mockup/Web%201920%20%E2%80%93%20profile.png)
Here a user's information will be displayed such as their first name, last name and email address from when they signed up. There are also two buttons a user can interact with: the log out button and the delete account button.

### Log out button
If the log out button is pressed the user will logged out of their account and redirected back to the login page.

### Delete account button
If the delete account button is pressed a pop-up modal will appear confirming whether or not the user wants to delete their account. If the user chooses to delete their account, all information tied to their account will be deleted from the database and the user will be redirected back to the login page. If they choose not to and press the cancel button the pop-up modal is dismissed. 
![pop up modal when the delete account button is pressed](https://github.com/SunWukong97/project_2_login_page/blob/main/login_page_mockup/Web%201920%20%E2%80%93%20profile%20%E2%80%93%202%20modal.png)

## Technologies
Project is created using:
+ HTML5
+ CSS3
+ JavaScript(ES6)

## Credits
author: SunWukong97 (Thomas Nguyen)
