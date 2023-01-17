// function nested inside another function
var count = 0

function function_1(count_1){
    return function function_2(count_2){
        console.log(count_1+count_2)
        return count_1+count_2
    }
}
var func_call = function_1(10); // the func_call contains the function_2 declaration
count+=func_call(5);            // function_2 is executed and the statements under function_2 are executed
console.log(count)