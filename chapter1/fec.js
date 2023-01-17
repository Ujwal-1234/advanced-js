// Function execution context

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
process()
// function execution context
// once the global execution context is done and the funtion is called
// the function execution context are formed with arguments and this.
