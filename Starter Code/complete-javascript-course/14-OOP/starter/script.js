'use strict';

/*
    What is Object-Oriented Programming (OOP)? 
    - OOP is a programming paradigm based on the concept of objects; 
    - We use objects to model (describe) real-world or abstract features;
    - Objects may contain data (properties) and code (methods). By using objects, we pack data and the corresponding behaviour into one block;
    - In OOP, objects are self-contained pieces/blocks of code;
    - Objects are building blocks of applications, and interact with one another;
    - Interactions happen through a public interface (API): methods that the code outside of the object can access and use to communicate with the object;
    - OOP was developed with the goal of organizing code, to make it more flexible and easier to maintain (avoid "spaghetti code")

    Classes and Instances (Traditional OOP)
    - Class is a blueprint which can then be used to create new objects based on the rules described in the class. 
    - An instance is a real object that we can use in our code, which was created from a class and a class itself is not an object. 

    Four Fundamental Principles of OOP
    - Abstraction
      - Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation;
    - Encapsulation
      - Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API);
      - Why?
        - Prevents external code from accidentally manipulating internal properties / state
        - Allows to change internal implementation without the risk of breaking external code
    - Inheritance
      - Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allow us to reuse common logic and to model real-world relationships. 
    - Polymorphism
      - A child class can overwrite a method it inherited from a parent class [it's more complex than that, but enough for our purposes].
*/

// OOP in JavaScript 
/*
  - Objects (instances) are instantiated from a class, which functions like a blueprint;
  - The process of creating actual objects (instances) from theoretical class is called instantiation.
  
  - In JavaScript, we have something called prototypes and all objects in JS are linked to a certain prototype;
  - Each object has a prototype;
  - The prototype object contains methods and properties that all the objects that are linked to that prototype can access and use. This behaviour is usually called prototypal inheritance.
  - Prototypal inheritance: The prototype contains methods (behaviour) that are accessible to all objects linked to that prototype;
  - Objects inherit methods and properties from the prototype which is the reason why this mechanism is called prototypal inheritance;
  - Behaviour is delegated to the linked prototype object;

  3 Ways of Implementing Prototypal Inheritance in JavaScript
  - Constructor Functions
    - Technique to create objects from a function;
    - This is how built-in objects like Arrays, Maps or Sets are actually implemented.
  - ES6 Classes
    - Modern alternative to constructor function syntax;
    - "Syntactic sugar": behind the scenes, ES6 classes work exactly like constructor functions;
    - ES6 classes do NOT behave like classes in "classical OOP" (last lecture)
  - Object.create()
    - The easiest and most straightforward way of linking an object to a prototype object;
*/

// Constructor Functions and the new Operator

// The only difference between a regular function and constructor function is that we call the constructor function with the new operator

// In OOP, there is this convention that constructor function always start with a capital letter.
// NOTE: Arrow function would not work as a function constructor and that's because it does not have its own this keyword, so only function declarations and function expressions. 
const Person = function (firstName, birthYear) {
  // console.log(this); // We get an empty object as mentioned in point 2

  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this - Because let's say we create thousands or tens of thousands of objects from this constructor function. Then what would happen is that each of those objects would carry around this calcAge function and it would be terrible for the performance of our code. But in order to solve this problem we would make use of prototypes and prototypal inheritance.

  // this.calcAge = function(){
  //   console.log(2037 - birthYear);
  // }
}

/*
  The new operator is a very special operator and the following happen when we call a function with the new operator like this:
  1. New {} is created
  2. function is called, this = {}
  3. {} linked to prototype
  4. function automatically returns {}
*/
const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person); // true
console.log(jay instanceof Person); // false