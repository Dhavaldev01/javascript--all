function multioleBye5(num){
    
    return num * 5
}

multioleBye5.power  =  2
console.log(multioleBye5(5));
console.log(multioleBye5.power); 

function createUser(username , score){
    this.username  = username 
    this.score = score
}

createUser.prototype.incrment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

const chai = new createUser("chai",25)
const tea = new createUser("chai",250)

chai.printMe()