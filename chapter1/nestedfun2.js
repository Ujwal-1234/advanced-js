// function nested inside another function
var count = 0

function function_1(count_1){
    return function function_2(count_2){
        console.log(count_1+count_2)
        return count_1+count_2
    }
}
var func_call = function_1(10);
count+=func_call(5);
console.log(count)