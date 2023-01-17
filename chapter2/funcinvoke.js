// function invoked 
function greet(name){
    alert(`hello ${name}, Good morning..`);
}

greet("stark")          // function called

var _name = prompt("Enter The Name")    // take input from a prompt
greet(_name)                            // function again called with the _name variable as parameter