// Understand the Constructor Property

// There is a special constructor property located on the object instances duck and beagle that were created in the previous challenges:

// let duck = new Bird();
// let beagle = new Dog();

// console.log(duck.constructor === Bird); 
// console.log(beagle.constructor === Dog);

// Both of these console.log calls would display true in the console.

// Note that the constructor property is a reference to the constructor function that created the instance. 
// The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:

// function joinBirdFraternity(candidate) {
//   if (candidate.constructor === Bird) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Note: Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.

// ------------------------------------------ exercise ------------------------------------------------------------------------------------------------------------------------------

// Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.

function Dog(name) {
    this.name = name;
}

  // Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor == Dog){
        return true;
    } else {
        return false;
    }
}

// function Dog(name) {
//     this.name = name;
// }

//   // Only change code below this line
// function joinDogFraternity(candidate) {
// }

// ------------------------------------------ Additional information ----------------------------------------------------------------------------------------------------------------

// We're touching on constructors now. Constructors are a a special method of a class for creating and initializing an object instance of that class.
// instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. Quite simply, it checks
// if a property is part of an object. See below for pseudocode.

// console.log(property instanceof Object);

// or simply:
// property instanceof Object