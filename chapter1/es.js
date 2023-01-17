// execution stack

function stack_1(){
    var data = "The stack 1 is triggered"
    console.log(data)
}
function stack_2(){
    var data = "The second stack is triggered"
    console.log(data)
}
console.log(data)
var data="global data"
stack_1()                   // The function is called at first in the execution stack
stack_2()                   // The second function in the execution stack
console.log(data)           // When the first and second stack are done the variable displays the value at the global level if declared

// using this execution stack any task/function/module can be scheduled as per the need, if we program
