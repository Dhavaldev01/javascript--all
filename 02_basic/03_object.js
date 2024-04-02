// singleton 
// object.create

// object literals
const mySym = Symbol("key1")

const jsUser = {
    name : "Dhaval",
    "full name" : "Dhaval patel",
    age :20,
    [mySym] : "mykey1",
    location : "surat",
    Email : "Dhaval@gmail.com",
    isLoddedIn : false ,
    lastLoginDayes : ["Monday", "saturday"]
}

// console.log(jsUser.Email)
// console.log(jsUser["Email"])
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym])

jsUser.Email = "Dhaval1@gmail.com"
//Object.freeze(jsUser)
jsUser.Email = "Dhaval2@gmail.com"
//console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello js User")
}

jsUser.greeting2 = function(){
    console.log(`Hello js User, ${this.name}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());


