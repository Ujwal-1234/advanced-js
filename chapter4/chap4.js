// callbacks, promises, asysnc/await 

// call backs

function add(x, y){
    return x+y;
}

const sum = add(5,8)
const num_add = add(10, 30)

console.log(sum)
console.log(num_add)


// call backs by function refrence
function add(x, y){
    return x+y;
}
function sub(x, y){
    return x-y;
}
function multiply(x, y){
    return x*y
}

function calculate(x, inp){
    return inp(x, 8);
}
console.log(calculate(10, add))
console.log(calculate(90, sub))
console.log(calculate(100, multiply))


// Promise 
let pro = new Promise((resolve, reject)=>{
    var x =  prompt("Enter 1")              // input value for condition of promise
    if(x == 1){
        resolve("OK")                       // if condition is true, the resolve function works and this fullfills the promise
    }
    else{
        reject("error")                     // sets the value as rejected and result value is set as error
    }
});
pro.then(
    function (value){console.log(value)},   // The value is logged when the promise is fullfilled
    function (error){console.log(error)},    // The error result is logged when the promise is rejected
    logA(),
    logB()
);
pro.then(logC)
function logA(){
    console.log("LOG A")
}

function logB(){
    console.log("LOG B")
}
function logC(){
    console.log("LOG C")
}

// above the chaining is done using the .then() for a Promise