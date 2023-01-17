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
