// global execution context

// undefined variable
console.log("name", name)
console.log("work", work)


var name = "stark"
var work = "enjoy"

function process(){
    return {
        person : name,
        job : work
    };
}

// global execution context forms wheneve the js code is runned
// global execution context contains window, this, global variables and functions defined globally.