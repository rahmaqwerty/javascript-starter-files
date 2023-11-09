// ****************************************************TASK 1****************************************************
/*Biography exercise*/


let personA = {
  name:"Jamela",
  age:"18",
  location:'London',
  likes: 'cuddling Kittens'
};

let personB = {
  name: "Rashid",
  age: "30 years old",
  location:"London",
  likes: "going to the Gym"
};


let personC = {
  name: 'May',
  age: '27 years old',
  location:'France',
  likes: 'Cooking'
};

let personD = {
  name: 'Rahima',
  age: '31 years old',
  location:'London',
  likes: 'Cycling and listening to Music'
};

console.log(personB.age);
console.log(personB.location);


function biography (person){
  return "Hi my name is " + person.name + ". I am " + person.age + " years old, I live in " + person.location + " and I enjoy " + person.likes + "!"
}

console.log(biography(personD));
console.log(biography(personA));

// the array starts counting from 0 
                  // 0     1      2        3         4       5       6 
const animals = [ "cat", "dog", "wolf", "lion", "monkey", "zebra", "cow"];

console.log(animals[0]);
console.log(animals[1]);
console.log(animals.length);

animals.push("Llama"); // Add "Llama" to the array


console.log(animals);

console.log(animals.pop()); // Remove and log the last element
animals.pop(); // Remove the last element again

console.log(animals);











// ****************************************************TASK 2****************************************************

//example while loop
const stored_password = "password123!";
let user_entered_password = prompt("Please enter your password:");

while (stored_password !== user_entered_password) {
    console.log("You have entered the wrong password try again...")
    user_entered_password = prompt("Please enter your password:");
};

console.log("Correct password, logging in..")


//for loop used for counting/ going through an array
for (let y = 0 ; y <=100 ; y++){
    console.log(y)
}









// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
function compare(a, b) {
  return a.age - b.age;
}

