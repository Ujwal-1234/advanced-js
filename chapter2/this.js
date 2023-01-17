// implicit binding

const user = {
    name:"stark",
    age:29,
    greet(){
        alert(`Hello ${this.name}, Good morning ..`);
    }
}
user.greet()



// 2nd part for implicit binding
const projects = {
    name: "stark",
    age:29,
    greet(){
        alert(`hello ${this.name}, Good Morning .. `);
    },
    projects:{
        name: "Mark 42",
        time_taken: "2 yrs",
        speak(){
            alert(`${projects.name}, you have build ${this.name} within ${this.time_taken} of time`)
        }
    }
}
projects.greet()
projects.projects.speak()



// Explicit Binding
function greet(){
    alert(`hello ${this.name}, you have ${this.data}`)
}
const ex_user = {
    name: "explicit binding",
    data: "dummy data"
}
greet.call(ex_user)
// call is the method to invoke the context of function



// new binding

function new_User(name, age) {  
    this.name = name;
    this.age = age;
  }
const me = new new_User("Tyler", 27);
const you = new new_User("stark", 40);
alert(`hey, ${me.name}, your age is ${me.age}`);
alert(`hey, ${you.name}, your age is ${you.age}`);
// new bindings enables to create a kind of prototype that can be used multiple times 
// by creating new objects using that function()/prototype





// lexical binding

const lexical_user = {
    name: "Stark",
    age: 42,
    languages: ["JS", "C++", "Python", "JAVA"],
    greet() {
        const hello = `Hello, my name is ${this.name} and I know`;
    
        // const langs = this.languages.reduce(function (str, lang, i) {
        //     if (i === this.languages.length - 1) {
        //     return `${str} and ${lang}.`;
        //     }
        //     return `${str} ${lang},`;
        // }.bind(this), "");

        // alternate of using reduce() for array

        const langs = this.languages.reduce(mylang)
        function mylang(First, each){
            return `${First} ${each}`;  
        }
        console.log(lexical_user.languages) // to check if the array values are changed after the reduce() method called
        alert(hello + langs);
  },
};
lexical_user.greet()
console.log(lexical_user.languages) // to check if the array values are changed after the reduce() method called

// .reduce() is the method, used to perform operation on the array based on the parameters provided.
// here in above the reduce() method is used for string concatination for the string data present in array languages.
// the reduce() method doesnot affect or change the array after operation performed.




// window binding

window.initial = "Hey Good";            // The variables are declared and binded with windows and can be accessed in any functions using this refrence

function _person_greet(time){
    switch(time){
        case "morning": alert(`${this.initial} ${this.morning_greet} ... ${user_name}`);break;
        case "afternoon" : alert(`${this.initial} ${this.afternoon} ... ${user_name}`);break;
        default : alert(`Hey Welcome .. ${user_name}`);break;
    }
}
const user_name = prompt("Tell me your name")       // To take in the user_name value
function morning(){
    window.morning_greet = " Morning";
}
function afternoon(){
    window.afternoon =" Afternoon";
}
morning()
_person_greet("morning")
afternoon()
_person_greet("afternoon")
_person_greet("esajadsf");

// above is about binding the variables with the window global object
// can be accessed in any function one declared by binding with window global object

// NOTE ::-- "use strict"; is a statement if written in the document, the this refrence will become undefined and the window binding doesnot work.