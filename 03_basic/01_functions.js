// function AddTwoNumbers(a,b){
//     console.log(a+b)
// }


// function AddTwoNumbers(a,b){
//     // let result = a+b
//     // return result
//     return a + b
// }
// const result = AddTwoNumbers(3,4)
// console.log("Result", result);

function loginUserMessage(username){
    if(username === undefined)// another way to write if(!username)
    {
        console.log("Plese Enter Username ")
        return
    }
    return `${username} just loggrd In `
}

//console.log(loginUserMessage("Dhaval"))//dhaval just loggrd In 
//console.log(loginUserMessage()) ///Plese Enter Username 

function calculateCartPrice(...num1){
    return num1 /// function ma anr rest oprater kevay , spried no kavay matr function puratu
}
// console.log(calculateCartPrice(200,400,500))

const user = {
    username : "Dhaval",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.user} and Price is ${anyobject.username}`)
}

//handleObject(user);

const myNewArray = [200,400,100,600]
function rerurnSecondValue(getArray){
    return getArray[1]
}

console.log(rerurnSecondValue(myNewArray));

// normal function function create karata pela call karo to run tah 
// One()
// function One (){}
// Two()
// const Two = function(){}    // function ela call karo to err ave  