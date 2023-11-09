// ****************************************************TASK 1****************************************************

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











// ****************************************************TASK 2****************************************************











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
