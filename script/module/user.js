/**
 * user class that stores username and their password
 */


export default class User{
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

//for exporting multiple classes ECMAScript 2015
//module.exports ={User};
