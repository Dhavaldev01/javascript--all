const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "Swift by apple"
}

for (const key in myObject){
   // console.log(`${key} shortcut id for ${myObject[key]}`);
}

const Arr = ["js", "ruby", "py"]

for (const key in Arr){
    console.log(Arr[key]);
}