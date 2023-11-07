let a = 5;
const b = 10;
let c= a + b;
console.log(c)
a = 20

console.log(c)
c = a+ b


// function sayHey() { console.log("Hey!")};

sayHey()

sayHey()


let x = 10
console.log( 5* x)

console.log ("Its Tuesday")



//standard way of writing a function 

function sayHey(name) {
    console.log("Hey," + name + "! ")}

function conversation() {
    sayHey();
    console.log("How are you?");
    console.log("Goodbye!");
}

conversation();
sayHey(" Rahma");

function add_5(x){
    console.log(x + 5)
}

add_5(10)
add_5(30948849)

function conversation(name, topic){
    sayHey(name)
    console.log("Do you like " + topic + "?")
}

//conversation("Rahma", "pizza")
//conversation("Jamela", "Italian")

//we use return to store information when we want to store information for later on and not stright away console.log it.
function multiply_by_5(x){
    return x * 5

}
console.log(multiply_by_5(8))


function futureAge(name, current_age){
    age_in_5_years = current_age +5
    return "Hi " + name + "! you will be" + age_in_5_years + "in 5 years time" 
console.log

}
console.log(futureAge("Rahma", "32"))
