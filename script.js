// ===== PART 1: Variables and Constants =====

// Declare and initialize a variable for user's age
let age = 30;
// Declare and initialize a constant for user's height
const heightCM = 169;

// ===== PART 2: Arrays =====

// Declare an array with 3 elements representing pet names 
let petNames = ["Snoopy", "Mickey", "Bugs"]; // From cartoon characters Snoopy, Mickey Mouse and Bugs Bunny
// Add a new element to the array using push() and remove the last element using pop()
petNames.pop(); // Last element "Bugs" removed
petNames.push("Sylvester") // Added Sylvester the cat
// Reverse the array and display the elements in the console
let petNamesReversed = petNames.reverse();
console.log(petNamesReversed);

// ===== PART 3: Objects ===== 

// Declare an object representing a car with properties like make, model, and year

let myCar = {
    year: 2018,
    make: "Honda", 
    model: "Accord"
};

// Update one of the object's properties
myCar.model = "Civic";

// Add a new property to the object and log the updated object to the console

myCar.colour = "silver";

console.log(myCar);


