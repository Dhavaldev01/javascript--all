const myNums = [1,2,3]

// const mytotal = myNums.reduce(function (acc, curval){
//     console.log(`acc : ${acc} and curval ${curval}`)
//     return acc + curval
// }, 0)


// const mytotal = myNums.reduce((acc ,curr)=>  acc + curr , 0)
// console.log(mytotal)

const shoppingCart = [
    {
        itemName : "js course",
        price : 299
    },
    {
        itemName : "java course",
        price : 239
    },
    {
        itemName : "python course",
        price : 599
    },
    {
        itemName : "Data Science ",
        price : 1299
    },
]



const price  = shoppingCart.reduce((acc ,item ) =>(acc + item.price),0)
console.log(price)