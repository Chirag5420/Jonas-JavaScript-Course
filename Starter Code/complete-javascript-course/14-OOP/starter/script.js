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

// Static methods
Person.hey = function(){
  console.log('Hey there 👋🏻');
  console.log(this); // Would be the entire Person constructor because that is the rule, whatever object is calling the method will be the this keyword inside of that function. So here this keyword, is simply that entire constructor function.
}

Person.hey();
// jonas.hey(); // TypeError jonas.hey is not a function (This occurs because it is simply not there in the prototype of the Jonas object. So there is no way, the Jonas object could inherit it) 

// Prototypes
/*
  First each and every function in JavaScript automatically has a property called prototype. And that includes of course, constructor functions. Now every object that is created by a certain constructor function will get access to all the methods and properties that we define on the constructors prototype property. 
*/

Person.prototype.calcAge = function(){
  console.log(2037 - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();

// The Step Number 3 of linking object to prototype is what creates this property __proto__ and sets it to the Prototype property of the constructor function that is being called 
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// Setting properties on the Prototype 
Person.prototype.species = 'Homo Sapiens';

// NOTE: The species property would not be directly visible but instead visible inside the __proto__ property
console.log(jonas);
console.log(matilda);

// So own properties are only the ones that are directly declared on the object 
console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false (since it only has access to this attribute because of Person.prototype)

// Prototypal Inheritance and The Prototype Chain 
/*
  Everything starts with the Person constructor function. The constructor function has a prototype property which is an object and inside that object we defined the calcAge method. 

  So Person.prototype.constructor is going to point back to the original Person Constructor Function itself.

  NOTE: Person.prototype is not the prototype of Person, but the prototype of all the objects created by Person. 

  When we call a function with the new operator, 
  1. A new empty object is created instantly
  2. this keyword in construtor function call is set to the new object 
  3. The new object is linked (__proto__ property) to the constructor function's prototype property 
  4. The new object is automatically returned from the constructor function call

  Why is this so powerful?
  - The reason why prototypal inheritance / delegation is very useful in this example is because, now the calcAge function would be inherited by all the Person objects without the method being directly attached to all the objects themselves. This is essential for code performance. Because imagine, if we had a 1000 objects and all of them carried the calcAge function with them around it would certainly impact performance. So instead they all can simply use the calcAge function from their common prototype. 

  Prototype chain - Now the fact that Jonas object is connected to a prototype and the ability of looking up methods and properties in a prototype is what we call the prototype chain. So the jonas object and its prototype basically form a prototype chain. 

  But the prototype chain doesn't end here! Every object in JavaScript has a prototype. So Person.prototype itself must also have a prototype.
  And the prototype of Person.prototype is Object.prototype 

  Person.prototype is just a simple object which means that it has been built by the built-in object constructor function. And this is the function which is automatically called when we write an object literal.

  Now this entire series of links between the objects is what is called the prototype chain and object.prototype is usually the top which means its prototype (__proto__) is null, which then marks the end of the prototype chain. 
*/

// Prototypal Inheritance on Built-In Objects 
console.log(jonas.__proto__); // Person.prototype
console.log(jonas.__proto__.__proto__); // Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor); // Person Constructor Function

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__); 
console.log(arr.__proto__ === Array.prototype); // true

// Since we know that all arrays inherit the methods from Array.prototype; We can use this knowledge to further extend the functionality of arrays.

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

// NOTE: We should not include methods on built-in objects for two reasons:
// - Probably JS might add a function with the same name but a different functionality in its next release and then its going to break our code
// - Secondly, if we are working with a team of developers then multiple developers might create the same functionality with different names and its going to cause a lot of bugs. 

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);

// ES6 Classes 
// class expression
// const PersonCl = class {}


// class declaration
class PersonCl {
  constructor(fullName, birthYear){
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // NOTE: All of these methods that we are writing in the class, outside of the constructor will be on the prototype of the objects and not on the objects themselves. So just like before, ts Prototypal Inheritance. 
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists (Make use of _ behind the variable name)
  set fullName(name) {
    console.log(name);
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`)
  }

  get fullName(){
    return this._fullName;
  }

  // Static Methods
  static hey(){
    console.log('Hey there 👋🏻');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function(){
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();
console.log(jessica.age);

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();
// NOTE: Static methods are not available on the instances and sometimes they are still useful to implement some kind of helper function about a class or about a constructor function 

// 1. Classes are NOT hoisted. So even if they are class declartions. So function declartions are hoisted, which means we can use them before they are declared in the code. But with classes that doesn't work. 
// 2. Classes are first-class citizens. So it means we can pass them into functions and also return them from functions. 
// 3. Classes are executed in strict mode.

// Setters and Getters
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300], 

  get latest(){
    return this.movements.slice(-1).pop();
  },

  set latest(mov){
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// Object.create 
const PersonProto = {
  calcAge(){
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ == PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

console.log(sarah);

// Inheritance Between "Classes": Constructor Functions 
const Student = function(firstName, birthYear, course){
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Inheritance Between "Classes": ES6 Classes
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course){
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce () {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // Since this function comes first in the Prototype chain, it basically overrides the one declared in the PersonCl class 
  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
  }
};

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();

// Inheritance Between "Classes": Object.create
const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

StudentProto.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jennifer = Object.create(StudentProto);
jennifer.init('Jennifer', 2010, 'Computer Science');
jennifer.introduce();
jennifer.calcAge();
console.log(jennifer);
/*
// Another Class Example
class Account {
  constructor(owner, currency, pin){
    this.owner = owner;
    this.currency = currency; 
    this._pin = pin;

    //protected property (we add the _ as a convention, to let the other developers and yourself know that these must not be modified externally)
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // these methods are the interface to our objects (Public Interface)
  getMovements(){
    return this._movements;
  }

  deposit(val){
    this._movements.push(val);
  }

  withdraw(val){
    this.deposit(-val);
  }

  _approveLoan(val){
    return true;
  }

  requestLoan(val){
    if(this._approveLoan(val)){
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
};

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// Instead of manually creating these, we should instead create methods which would interact with these properties
// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000); // We should not be allowed to access this method. So this kind of an interal method that only the requestLoan method should be able to use. 

console.log(acc1._movements);

console.log(acc1);
// console.log(acc1.pin);
*/
// Encapsulation: Protected Properties and Methods
/*
  Two reasons why we need Data Encapsulation and Data Privacy:
  - First, it is to prevent code from outside of a class to accidentally manipulate our data inside the class
  - Secondly, this also the reason we implement a public interface. So we are not supposed to manually mess with a property and therefore we should encapsulate it. Besides, when we expose only a small interface, so a small API consisting only of a few public methods then we change all the other interal methods with more confidence. 
*/

// Encapsulation: Private Class Fields and Methods
// Class Fields : In traditional OOP languages like Java and C++, properties are usually called fields. 
// In the proposal, there are four different kinds of fields and methods 
// 1) Public Fields
// 2) Private Fields
// 3) Public Methods
// 4) Private Methods
// (there is also a static version)
class Account {
  // Public Fields (these fields are not added to the prototype, they are on the instances)
  locale = navigator.language;

  // Private Fields (are declared by adding a hash # and these are available on the instances and not on the prototype)
  #movements = [];
  #pin;

  constructor(owner, currency, pin){
    this.owner = owner;
    this.currency = currency; 
    this.#pin = pin;

    //protected property (we add the _ as a convention, to let the other developers and yourself know that these must not be modified externally)
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //3) Public methods 
  // these methods are the interface to our objects (Public Interface)
  getMovements(){
    return this.#movements;
  }

  deposit(val){
    this.#movements.push(val);

    // return the object invoking the function so that chaining of methods can be implemented
    return this;
  }

  withdraw(val){
    this.deposit(-val);
    return this;
  }

  requestLoan(val){
    if(this._approveLoan(val)){
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // 4) Private Methods (these methods are being added a private class field to the instance and not the prototype and therefore we would use protected for now with _)
  // #approveLoan(val){
  _approveLoan(val){
    return true;
  }

  // these static functions are not available on the instances but only on the class itself
  static helper(){
    console.log('Helper');
  }
};

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
console.log(acc1.getMovements());
acc1.requestLoan(1000);
// console.log(acc1.#approveLoan(1000));
// console.log(acc1.#pin); // cannot be accessed as its a truly private class field 

Account.helper();

// Chaining Methods 
acc1.deposit(300)
    .deposit(500)
    .withdraw(35)
    .requestLoan(25000)
    .withdraw(4000);
console.log(acc1.getMovements());

// ES6 Classes Summary 
// Inheritance between classes, automatically sets prototype
class StudentOverview extends Person {
  // Public field (similar to property, available on created object)
  university = 'University of Lisbon';

  // Private fields (not accessible outside of class)
  #studyHours = 0;
  #course;

  // Static Public field (available only on class)
  static numSubjects = 10;

  // Constructor method, called by new operator. Mandatory in regular class, might be omitted in a child class
  constructor(fullName, birthYear, startYear, course){
    // Call to parent (super) class (necessary with extends). Needs to happen before accessing this
    super(fullName, birthYear);

    // Instance property (available on created object)
    this.startYear = startYear;

    // Redefining private field
    this.#course = course;
  }

  // Public method
  introduce(){
    console.log(`I study ${this.#course} at ${this.university}`);
  }

  study(h){
    // Referencing private field and method 
    this.#makeCoffee();
    this.#studyHours += h;
  }

  #makeCoffee(){
    return 'Here is a coffee for you 🤓';
  }

  // Getter method - is used so that we can get a value out of an object by simply writing a property instead of writing a method. So by simply writing student.testScore() and that would then run the getter method
  get testScore() {
    return this._testScore;
  }

  // Setter method - we can simply define the testScore by setting it to some value instead of calling a testScore method 
  // NOTE: use _ to set property with same name as method, and also add getter 
  set testScore(score) {
    this._testScore = score <= 20 ? score : 0;
  }

  // Static method (available only on class. Cannot access instance properties nor methods, only static ones)
  static printCurriculum(){
    console.log(`There are ${this.numSubjects} subjects`);
  }
}

// Create a new object using the new operator 
const student = new Student('Jonas', 2020, 2037, 'Medicine');

// NOTE:
/*
  - Classes are just "syntatic sugar" over constructor functions
  - Classes are not hoisted
  - Classes are first-class citizens
  - Class body is always executed in strict mode
*/