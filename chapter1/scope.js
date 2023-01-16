// scope of a variable
var var1 = "THE Global variable"  // global variable that can be accessed globally within any functions
function scope_of_var2(){
    var var2 = "This variable is with limited scope withing the function itselt " // The var 2 variable can be accessed only within this function
    win = "THE variable for the window/global scope"
}
scope_of_var2();
console.log(var1)
console.log(var2)

console.log(window.win)    // using this the var2 variable data can be set to the global execution context 