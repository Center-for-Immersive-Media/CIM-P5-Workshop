////////////////////////////////////////////////////////////
//
//  Lesson 00 - Introduction to JavaScript / Programming
//
////////////////////////////////////////////////////////////

// ====== COMMENTS ======
// Comments are used to explain what the code does.
// Comments are ignored by the computer when the code is run.
// We can create a comment by using two forward slashes.

// ====== CONSOLE ======
// The console is a tool that allows us to see the output of our program.
// We can open the console by pressing the F12 key.
//****************************
console.log("Hello World!");
//****************************

// ====== VARIABLES ======
// A variable is a container for a value, like a number we might want to use in our program.
// We can create a variable with the keyword var, followed by the name of the variable.
// We can then assign a value to the variable with the = operator.
// We can then use the variable in our program, and it will be replaced with the value we assigned to it.
// We can also change the value of a variable by assigning it a new value.
// We can also use variables to store the results of calculations.
// We can also use variables to store the results of functions.

// Old way of declaring variables
var x = 50;

// New way of declaring variables
const y = 50; // Will never change
let z = 50; // Should only be used when the variable has to change later

// Reassigning a variable
//****************************
z = "Hello";
// y = "World"; // THIS WOULD THROW AN ERROR
console.log(z + " " + y);
//****************************

// ====== FUNCTIONS / METHODS / ROUTINES ======
// A function is a block of code that can be called to perform a specific task.
// We can create a function with the keyword function, followed by the name of the function.
// We can then call the function by using its name, followed by parentheses.
// We can also pass arguments to a function by putting them inside the parentheses.
// We can also return a value from a function by using the return keyword.

function Add(x, y) {
  return x + y;
}

//****************************
console.log(Add(5, 10));
console.log(5 + 10);
//****************************

function isEven(x) {
  if (x % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

//****************************
console.log(isEven(5));
console.log(`Is 5 even? ${isEven(5)}`);
//****************************

// ====== ARRAYS ======
// An array is a collection of values.
// We can create an array by using square brackets, and putting the values inside.
// We can access the values in an array by using square brackets, and putting the index of the value inside.
// Arrays are zero-indexed, which means the first value has an index of 0.

const names = ["Kevin", "Alan", "Joe", "Cody"];

//****************************
console.log(names[1]);
console.log(`Hi, my name is ${names[0]}`); // Template strings
console.log(names.length);
console.log(names);
//****************************

// ====== OBJECTS ======
// An object is a collection of key-value pairs.
// We can create an object by using curly braces, and putting the key-value pairs inside.
// We can access the values in an object by using square brackets, and putting the key inside.
// We can also access the values in an object by using dot notation, and putting the key after the dot.

const person = {
  firstName: "Kevin",
  lastName: "Merinsky",
  age: 35,
  hobbies: ["Coding", "Tinkering", "Chilling"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
  greet: function () {
    console.log(`Hi, my name is ${this.firstName} ${this.lastName}`);
    // the 'this.' keyword is required when nesting objects
  },
};

//****************************
console.log(person["firstName"]);
console.log(person.firstName);
console.log(person.hobbies[1]);
console.log(person.address.city);
person.greet();
//****************************

// ====== CONDITIONALS ======
// A conditional is a statement that is either true or false.
// We can use conditionals to control the flow of our program.
// We can use the if statement to run a block of code if a condition is true.
// We can use the else statement to run a block of code if a condition is false.
//****************************
if (person.age >= 21) {
  console.log("You can rent a car!");
} else {
  console.log("You can't rent a car!");
}
//****************************

// ====== LOOPS  ======
// A loop is a block of code that is repeated a certain number of times.
// We can use loops to run a block of code multiple times.
// We can use the for loop to run a block of code a certain number of times.
// We can use the while loop to run a block of code while a condition is true.
//****************************
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// Arrays have a .map() method that allows us to run a function on each item in the array.
names.map((name) => {
  console.log(name);
});
//****************************
