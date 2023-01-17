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