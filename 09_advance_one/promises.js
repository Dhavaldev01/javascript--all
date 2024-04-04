const promiesOne = new Promise(function(resolve,reject){
    // DO an async task
    // DB calls , cryptography , network
    setTimeout(function(){
        console.log('ASync task is compelete')
       resolve()
    },1000)
})

promiesOne.then(function(){
    console.log("promise consumed");

})

new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const Promise3 =new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username : "Dhaval", email : "Dhaval@gmail.com"})
    },1000)
})

Promise3.then(function(user){
    console.log(user)
})


const promiesFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "Dhaval",password : "123"})
        }else {
            reject('ERROR : Somthing went wrong')
        }
    },1000)
})
 promiesFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(err){
    console.log(err)
}).finally(()=> console.log("The Promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "Javascript" ,password : "1230"})
        }else{
            reject('ERROR : JS went wrong')
        }
    },1000)
});

async function consumePromiseFive (){
    try{const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()


// async function getAllUsers(){
//    try{const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//    const data =  await response.json()
//     console.log(data)
//     } catch(error){
//         console.log("E :", error)
//     }
// }
//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error) =>  console.log(error))