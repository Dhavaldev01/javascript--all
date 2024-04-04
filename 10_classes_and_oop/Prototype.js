// let myName = "Dhaval    "


// console.log(myName.truelength);

let myHeros = ["thor","spidermen"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.dhaval = function(){
    console.log(`dhaval is present in all object`)
}


Array.prototype.heyDhaval = function(){
    console.log(`dhaval is present in all Array`)
}


//heroPower.dhaval()
//myHeros.dhaval()
myHeros.heyDhaval()
//heroPower.heyDhaval()

// inheritance 
const User ={
    name : "chai",
    email : "chai@gmail.com"
}

const Teacher ={
    makeVideo : true
}
const TeachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssigment: 'JS assigment',
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// morden syntex

Object.setPrototypeOf(TeachingSupport,Teacher)


let OntherUsername = "chaiAurcode       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

OntherUsername.trueLength()
"dhaval".trueLength()
"iceTea".trueLength()