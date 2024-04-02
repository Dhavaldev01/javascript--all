let myDate = new Date()
// console.log(myDate.toString())

// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate);


//let myCreatedDate = new Date(2023,0,23)
//console.log(myCreatedDate.toDateString())


//let myCreatedDate2 = new Date(2023,0,23,5,3)
let myCreatedDate2 = new Date("2023-01-14")
//toLocaleDateString  string vapariye to simple date ape 12/2/23
//console.log(myCreatedDate2.toLocaleString())

let myTimeStamp = Date.now()
//console.log(myTimeStamp);

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday : "long",
})

