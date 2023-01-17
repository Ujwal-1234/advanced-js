// Event Loop
// Event loop is like a task queue, where one function calls the another
// In the event loop we see how a function is initiated for execution and how its execution completes.
// There are two main terms in it - the current stack and - the queue stack.
// the task are pushed from the queue stack to the current stack for execution.

function morning(){
    console.log("Hey, good morning ")
    return afternoon()
}
function afternoon(){
    console.log("morning - > over ")
    console.log()
    console.log("Hey, good afternoon")
    return evening()
}
function evening(){
    console.log("afternoon - > over ")
    console.log()
    console.log("Hey Good Evening")
    return night()
}
function night(){
    console.log("evening - > over ")
    console.log()
    console.log("Good Night. go for sleep")
    return "Day is over, all the task completed"
}
morning()



// CurrentStack and Queuestack

let CurrentStac = [];
let Queuestack = ["122", "1214", "eqdf", "4qfeq"];

while(true){
    if(CurrentStac.length===0 && Queuestack.length > 0){
        CurrentStac.push(Queuestack.shift());
        console.log(CurrentStac, Queuestack);
        CurrentStac.pop();
    }else{
        console.log("Operations completed of Queue task")
        break;
    }
}
