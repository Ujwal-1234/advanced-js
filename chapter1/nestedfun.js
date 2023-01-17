// nested functions

function a(){                                       // The first function a-> ..
    console.log("call for function a")      
    function b(){                                   // The function b.. heirarchi a->b-> ..
        console.log("call for function b")
        function c(){                               // The innermost function inside a->b->c ..
            console.log("call for function c")
        }
        c();
    }
    b();
}
a();

// in the above code a is called at first 
// within function a() b() is called
// within function b() c() is called
// inside function c() the code and scope of c is there and it is the innermost function. this executes at end in the nested functions 