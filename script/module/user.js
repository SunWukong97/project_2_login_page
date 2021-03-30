/**
 * user class that stores username and their password
 */


export default class User{
    // constructor(username, password){
    //     this._username = username;
    //     this._password = password;
    // }
    constructor(firstname, lastname, email, username, password){
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
        this._username = username;
        this._password = password;

    }

    get firstname(){
        return this._firstname;
    }

    get lastname(){
        return this._lastname;
    }

    get email(){
        return this._email;
    }

    get username(){
        return this._username;
    }

    get password(){
        return this._password;
    }

    set firstname(newFirstname){
        this._firstrname = newFirstname;
    }

    set lastname(newLastname){
        this._lastname = newLastname;
    }

    set email(newEmail){
        this._email = newEmail;
    }

    set username(newUsername){
        this._username = newUsername;
    }

    set password(newPassword){
        this._password = newPassword;
    }

    toJSON(){
        return {
            firstname : this._firstname,
            lastname: this._lastname,
            email: this._email,
            username: this._username,
            password: this._password
        };
    }
}

//for exporting multiple classes ECMAScript 2015
//module.exports ={User};
