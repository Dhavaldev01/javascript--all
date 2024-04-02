const form = document.querySelector('form');
// this usecase will give you empty value
//const height = parseint(document.querySelector('#height').value)
form.addEventListener('submit' , function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')
    const result_1 = document.querySelector('#result_1')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a vaild height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a vaild weight ${weight}`;
    }else{
       const  bmi =  (weight / ((height*height)/10000)).toFixed(2)
       // show the result
       results.innerHTML =  `<span>${bmi}</span>` 
       
       if (bmi <= 18.6) {
    result_1.innerHTML = `Underweight`;
    console.log("done")
} else if (bmi > 18.6 && bmi <= 24.9) {
    result_1.innerHTML = `Normal Range`;
    console.log("done1")
} else {
    result_1.innerHTML = `Overweight`;
    console.log("done2")
}
    }


})


