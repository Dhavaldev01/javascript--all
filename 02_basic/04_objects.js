//const tinderUser = new Object();    // singaltone object 
const tinderUser = { }                               // non singaltone object 
    
   

tinderUser.id = "123abc"
tinderUser.name = "same "
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regulerUser = {
    email  : "dhaval@gmail.com",
    fullname : {
        userfullname : {
            firstname : "dhaval",
            lastname  : "patel "
        }
    }
}

// console.log(regulerUser.fullname);

// console.log(regulerUser.fullname.userfullname);
// console.log(regulerUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2 : "b"}
const obj2 = {3: "a", 4 : "b"}

// const obj3 = Object.assign( obj1,obj2)
//const obj3 = Object.assign({},  obj1,obj2) // a lakhavu saru che 

//const obj3 = {...obj1 , ...obj2 }

const users = [
    {
    id : 1,
    email : "Dhaval"
    },  
    {
    id : 1,
     email : "Dhaval"
    },    
 {
    id : 1,
    email : "Dhaval"
 },
    {
    id : 1,
    email : "Dhaval"
     },
    {
    id : 1,
    email : "Dhaval"
     },
]

/// user[1].email   /// acces kari levanu 
// console.log(obj3)

//console.log(Object.keys(tinderUser));  /// badhi key kadhi ne array ma ptint kare 
//console.log(Object.entries(tinderUser));  

//console.log(tinderUser.hasOwnProperty('isLOgged'))

const course = {
    cousename : "js in hindi",
    price : "999",
    courseInstructor : "dhaval"
}
// course.courseInstructor
// var m var (course.courseInstructor) no lakahvu hoy to  distruer kari nakhvu 

// const {courseInstructor} = course    part -1
// console.log(courseInstructor);

const {courseInstructor : instructor} = course    /// par-2
// console.log(instructor);

// {
//     "name" : "dhaval",
//     "courename " : "js in hindi ",
//     "price" : "free"

// }
