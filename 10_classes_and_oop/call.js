function SetUsername (username){
    this.username = username
}

function createUser(username,email,passeord){
    SetUsername.call(this ,username)
    this.email = email
    this .passeord = passeord
}

const chai = new createUser("chai", "chai@fb.com","123")
console.log(chai)