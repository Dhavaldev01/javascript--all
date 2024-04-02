// const userEmail = "D@Dhaval.ai"

// if(userEmail){
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email ")
// }

// falsy values
// false , 0 ,-0 ,BigInt 0n , "" ,null ,undefined , NaN

// truthy values
// "0" ,"false" , " " , [] , {} ,function(){} , 


// how to check array is empty or not 

// if (userEmail.length === 0){
//     console.log("Array is empty")
// }

// How Check Object is empty or not 


// const emptyObj = {}
// /// Object.keys(emptyObj) => return kare Aaary
// if(Object.keys(emptyObj).length === 0 ){
//     console.log("Object is Empty")
// }

/// Nullish Coalescing Operator (??) : null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 55
val1 = null ?? 10 ?? 20
// console.log(val1);

/// Terniaerr Operrator

// condition ? true : false 