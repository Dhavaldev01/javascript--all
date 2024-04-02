// Immediately Invoked Function Expressions(IIFE)


(function chai(){
    // name IIFE
    console.log("Db Connected")
})();



( (name) => {
    console.log(`Db Connected ${name}`)
})('dhaval')
