const user = {
    username : "Dhaval",
    price : 999 ,

    welcomeMessage : function(){
      //  console.log(`${this.username} ,Welcome to Website `)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// function chai(){
//     console.log(this);
// }

// chai();


// const chai = function() {
//     let username = "dhaval"
//     console.log(this.username)
// }

// chai()



// const chai = () =>{
//     let username = "dhaval"
//     console.log(this.username)
// }

// chai()

const addTwo = (num1 ,num2 ) =>{
    return num1 + num2
}

console.log(addTwo(2,3))