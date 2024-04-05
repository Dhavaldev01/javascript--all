// ES6 

class User {
    constructor(username ,email,password){
        this.username = username;
        this.email = email;
        this.password = password;

    }
    encryptPasword(){
        return `${this.password}abc`
    }
    changeusername (){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai ", "chai@gmail.com" ,"123")
console.log(chai.encryptPasword())
console.log(chai.changeusername())

// behind the sence  class no hoy to

function User(username ,email,password){
    this.username = username;
    this.email = email;
    this.password = password;

}

User.prototype.encryptPasword = function(){
    return `${this.password}abc`
}
User.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea ", "chai@gmail.com" ,"123")
console.log(tea.encryptPasword())

console.log(tea.changeusername())
