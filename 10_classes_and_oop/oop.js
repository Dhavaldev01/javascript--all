
// Object literal
const user = {
    username : "Dhaval",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
       // console.log("get")
      //  console.log(`username : ${this.username}`)
      console.log(this)
    }
}

//console.log(user.getUserDetails());
//console.log(this)

//const PromiseOne = new Promise()
//const date  = new Date()

function User(username, loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn; 

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const UserOne = new User("dhaval",12,true)
const UserTwo = new User("done",13,true)
console.log(UserOne);
console.log(UserTwo);

