const marvel_heros = ["thor","Ironman","spiderman"]
const dc = ["superman", "flash", "batman"]

//marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1])


// concat new arrat return kare .............

// const All_heros = marvel_heros.concat(dc)
// console.log(All_heros)

const All_new_heros = [...marvel_heros ,...dc]
// console.log(All_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)


//console.log(Array.isArray("Dhaval")) // chck kare Array che ke nay 
//console.log(Array.from("Dhaval")) //string nr array ma convet kari nakhe

//console.log(Array.from({name : "Dhaval"})) // intersting [] array ape kem ke ane kaber no pad e  
 

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1,score2,score3));  //  value ne array ma convrt kari nakhe

