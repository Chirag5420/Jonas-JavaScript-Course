'use strict';

/* 
    What is JavaScript : Revisited
    JavaScript is a high-level prototype-based object-oriented multi-paradigm interpreted or just-in-time compiled dynamic single threaded garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model 

    Destructuring the monster definition 
    - High-level
    - Garbage-collected
    - Interpreted or just-in-time compiled
    - Multi-paradigm 
    - Prototype-based object-oriented
    - First-class functions 
    - Dynamic
    - Single-threaded
    - Non-blocking event loop 

    High Level - JavaScript is a high level language where the developer does NOT have to worry about the resource allocation, as these languages have abstractions that automate everything. It makes the language easier to learn and use but the downside is that programs will never be as fast or as optimized for example, C programs. 

    Garbage Collected - One of the powerful tools that takes memory management away from developers is garbage-collection. It is basically an algorithm inside the JavaScript engine which automatically removes old, unused objects from the computer memory in order to not clog it up with unnecessary stuff. 

    Interpreted or Just-In-Time Compiled - In brief, computer's processors only understand 0s and 1s. Ultimately, every single program needs to be written in 0s and 1s, which is also called machine code. Convert to machine code --> compiling (happens inside the JavaScript engine)

    Multi-paradigm - There are three types of paradigms :
    - Procedural programming
    - Object-oriented programming (OOP)
    - Functional programming (FP)

    First-class functions - Functions are simply treated as variables. We can pass them into other functions, and return them from functions. 

    Dyanamic - Means dynamically-typed. No data type defintions. Types becomes known at runtime. Data type of variable is automatically changed. 

    Single-threaded and Non-blocking event loop 
    - Concurrency model : how the JavaScript engine handles multiple tasks happening at the same time.
    - JavaScript runs in one single thread, so it can only do one thing at a time. The thread is where our code is actually executed in a machine's processor. 
    - Non-blocking behaviour : By using an event loop - takes long running tasks, executes them in the "background", and puts them back in the main thread once they are finished 
*/

/*
    The JavaScript Engine and Runtime 

    JS Engine : A program that executes JavaScript code. 

    Every browser has its own JavaScript Engine but probably the most well known engine is Google's V-Eight (V8). V8 Engine powers Google Chrome but also Node.js which is that JavaScript runtime which is used to build server side applications with JavaScript, outside of any browser. 

    So any JS Engine always contains : 
    - Call Stack
      - The call stack is where our code is actually executed using something called "Execution Contexts". 
    - Heap
      - The heap is an unstructured memory pool which stores all the objects that our application needs. 
    
    Compilation vs Interpretation 
    Compilation 
    - Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer. 
    - Two steps : 
      - Step 1 (Compilation)
        - Machine code is built into a portable binary file
      - Step 2 (Execution)
        - Executed in the CPU so in the processor (can happen way after compilation)
    
    Interpretation 
    - Interpreter runs through the source code and executes it line by line. 
    - We do not have two steps. Instead the code is read and executed all the same time. Code still needs to be converted to machine code but it happens right before its executed. 

    JavaScript used to be purely interpreted language but the problem with interpreted languages is that they are much, much slower than compiled languages. 

    In Modern JavaScript, its no longer an interpreted language. So instead of simple interpretation, modern JavaScript engine now use a mix between compilation and interpretation which is called JUST-IN-TIME (JIT) compilation. 

    Just-in-time (JIT) compilation - Entire code is converted into machine code at once, then executed immediately. So we still have the two steps of regular compilation, but we no longer have a portable file to execute. The execution happens immediately after compilation. 

    JIT Compilation Workflow
    - First step, is to parse the code which essentially means to read the code. During the parsing process, the code is parsed into a data structure called AST (Abstract Syntax Tree). 
      - This works by first splitting up each line of code into pieces that are meaningful to the language like const or function keywords and then saving all these pieces into the tree in a structured way. 
      - This steps also checks if there are any syntax errors 
      - The resulting tree is later used to generate the machine code. 
    - Next step, is compilation which takes the generated AST and compiles it to machine code. 
    - This machine code then gets executed right away because remember modern JavaScript engine use Just-In-Time compilation. Remember, the execution happens inside JavaScript Engine's call stack. 
    
    JavaScript engine at first starts executing the unoptimized version at first. Then in the background this code is being optimized are recompiled during program execution. After each optimization, the unoptimized code is simply swept for the new more optimized code without ever stopping execution. And this process, makes modern engines such as V-Eight (V8) so fast. 

    All the three steps, parsing, compilation and execution happen in special threads that we cannot access from the code. So completely separate from the main thread, that is basically running into call stack executing our own code. 

    JavaScript Runtime in the browser
    - JS Engine
      - Call Stack
      - Heap
    - Web APIs
      - Web APIs are functionalities provided to the engine but which are not a part of the JavaScript language itself and accesses them through the global window object. 
    - Callback Queue
      - This is a data structure that contains all the callback functions that are ready to be executed. For example, we attach event handler functions to DOM elements like a button to react to certain events. These event handler functions are also called callback functions. 
      - So the first thing, that happens after the event is that the callback function is put into callback queue. Then, when the call stack is empty, the callback function is passed to the stack so that it can be executed. And this happens by something called the EVENT LOOP. 
      - So EVENT LOOP takes callback functions from the callback queue and puts them in the call stack so they can be executed. 

      JavaScript Runtime in Node JS
      - JS Engine
        - Call Stack
        - Heap
      - C++ Bindings & Thread Pool
      - Callback Queue 
*/

/*
    Execution Contexts and The Call Stack 
    
    How is JavaScript code executed? 
    - We already know its executed in a Call Stack in the JS Engine. But let's dig a bit deeper now. 

    JavaScript Code Execution
    - Creation of global execution context (for top-level code)
      - Top-level code is basically code that is not inside any function. So in the beginning, only the code outside of functions will be executed. This makes sense because functions should only be executed when they are called. 
      - Execution Context : Environment in which a piece of JavaScript is executed. Stores all the necessary information for some code to be executed. 
      - There is only ONE global execution context (EC) : Default context created for code that is not inside any function (top-level)
    - Execution of top-level code (inside global EC)
      - The computer CPU processes the machine code that it received. 
    - Execution of functions and waiting for callbacks
      - One execution context PER FUNCTION : For each function call, a new execution context is created. It contains all the information (arguments and parameters) that is necessary to run exactly that function. 
      - When all the functions are done executing, the engine will basically keep waiting for callback functions to arrive so that it can execute these. 
  
    All these execution contexts make up the call stack. 

    What's inside Execution Context? 
    1. Variable Environment 
       - let, const, and var declarations
       - Functions 
       - arguments object 
    2. Scope Chain : It consists of references to variables that are located outside of the current function. And to keep track of the scope chain, it is stored in each execution context. 
    3. this keyword 

    IMPORTANT : Execution contexts belonging to Arrow Functions, do not get their own arguments keyword nor do they get the this keyword. 

    The Call Stack 
    - It is the place, where execution contexts get stacked on top of each other to keep track of where we are in the execution. 
    - Call Stack ensures that the order of execution never gets lost 
*/

/*
    Scope and The Scope Chain 

    Execution Context 
    - Variable environment
    - Scope chain
    - this keyword

    Scoping : It controls how our program's variables are organized and accessed by the JavaScript engine. "Where do variables live?" or "Where can we access a certain variable, and where not?"

    Lexical Scoping : Scoping is controlled by placement of functions and blocks in the code. For example, a function that is written inside another function has access to the variables of the parent function. 

    Scope : Space or environment in which a certain variable is declared (variable environment in case of functions). There is global scope, function scope, and block scope. 

    Scope of a variable : Region of our code where a certain variable can be accessed 

    The 3 Types of Scope
    - Global Scope
      - It is for top-level code. So this for variables that are declared outside of any function or block. 
      - Variables declared in global scope are accessible everywhere
    
    EXAMPLE : 
    const me = 'Jonas';
    const job = 'teacher';
    const year = 1989;

    - Function Scope
      - Each and every function creates a scope
      - Variables are accessible only inside function, NOT outside
      - Also called local scope
    
    EXAMPLE : 
    function calcAge(birthYear) {
      const now = 2037;
      const age = now - birthYear;
      return age;
    }

    console.log(now); //Reference Error

    - Block Scope (ES6)
      - With block, we mean everything that is between curly braces (such as the block of an if statement or a for loop)
      - Variables are accessible only inside block (block scoped)
      - However, this only applies to let and const variables!
      - Functions are also block scoped (only in strict mode)
      - So for a variable declared with var, block scopes don't apply! They are function-scoped not block-scoped. 
    
    EXAMPLE :
    if (year >= 1981 && year <= 1996) {
      const millenial = true;
      const food = 'Avocado Toast';
    }

    console.log(millenial); //Reference Error

    IMPORTANT : Variable Lookup in Scope Chain 

    SUMMARY 
    - Scoping asks the question "Where do variables live?" or "Where can we access a certain variable, and where not?";
    - There are 3 types of scope in JavaScript: the global scope, scopes defined by functions, and scopes defined by blocks;
    - Only let and const variables are block-scoped. Variables declared with var end up in the closest function scope;
    - In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written;
    - Every scope always has access to all the variables from all its outer scopes. This is the scope chain!
    - When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. This is called variable lookup;
    - The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope;
    - The scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes
    - The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all!
*/

/* Scoping in Practice */
function calcAge (birthYear) {
  const age = 2037 - birthYear;
  //console.log(firstName);
  //console.log(lastName); //Output : Reference Error

  function printAge () {
    let output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);

    if(birthYear >= 1981 && birthYear <= 1996){
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable 
      const firstName = 'Steven'; // The below str variable would use the value 'Steven' because JavaScript tries to look for the variable name in the current scope. So therefore JavaScript will use that variable and not perform any variable lookup in the scope chain. 

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';
      const str =  `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add (a, b) {
        return a + b;
      }
    }
    
    //console.log(str); // Output : Reference Error (due to block scope of if condition)
    console.log(millenial); // Output : true (variables declared with var keyword are function scoped. So they simply ignore the block, because they are not block-scoped at all. They are just function scoped)
    //console.log(add(2, 3)); // Output : Reference Error (the scope of the add () function is only the block in which it was defined. So this proves that functions are block scoped. IMP : But it is only block scoped until the strict mode is on)
    console.log(output); // Output : NEW OUTPUT! (Since we simply reassigned the value of the output variable without creating a new variable. It is because we manipulated an existing variable inside of a child scope)
  }
  
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
//console.log(age) // Output : Reference Error

/*
  Jonas was printed to the console which is the firstName variable.

  So when the console.log(firstName) line had been executed, JavaScript did not find this variable in the function scope. And so it did a variable lookup in the scope chain to find the variable. 

  Indeed, the parent scope of the calcAge function is the global scope. And since the firstName variable is there, JavaScript could then use that. 
*/

/*
    Variable Environment : Hoisting and the TDZ (Temporal Dead Zone)

    Hoisting : Makes some types of variables accessible / usable in the code before they are actually declared. "Variables lifted to the top of their scope".

    Behind the Scenes
    - Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.

                                          HOISTED?              INITIAL VALUE             SCOPE
      function declarations                YES                 Actual Function            Block
      var variables                        YES                    undefined              Function
      let and const variables              NO                 <uninitialized>, TDZ        Block
      function expressions and arrows               Depends if using var or let/const

    Table Explanation :
    - We can use function declarations before they are declared in the code, because they are stored in the Variable Environment object even before the code starts executing. 
    - So unlike functions, when we try to access a var variable before it's declared in a code, we don't get the declared value but we get undefined. This is one of the common sources of bugs, that is why in modern JavaScript we almost never use var. 
    - let and const variables are not hoisted. Technically, they are hoisted but their value is basically set to uninitialized, so there is no value to work with at all. So in practice, it is as if hoisting was not happening at all. Instead, we say these variables are placed in a so-called Temporal Dead Zone (TDZ) which makes it so that we can't access the variables between the beginning of the scope and to place where the variables are declared. Let and const are block scoped.  
    - As for function expressions and arrow functions it depends if they were created using var or let/const variables because these functions are simply variables and so they behave the exact same way. 

    Temporal Dead Zone - It's basically the region of the scope in which the variable is defined, but can't be used in any way. So it is, as if the variable didn't even exist. 

    Why TDZ?
    - Makes it easier to avoid and catch errors: accessing variables before declarations is bad practice and should be avoided
    - Makes const variables work the way they are supposed to. 

    Why Hoisting?
    - Using functions before actual declaration 
      - Because this is essential for some programming techniques, such as mutual recursion. Some people also think it makes the code a lot more readable. 
    - var hoisting is just a byproduct
*/

// Hoisting and TDZ in Practice

// Variables
console.log(me); // OUTPUT : undefined --> Variables declared with var are hoisted, but they are hoisted to the value of undefined. So therefore when we try to access them, undefined is exactly the result that we get

// console.log(job); //OUTPUT : Cannot access 'job' before initialization. The origin of this error, is because the it is still in the Temporal Dead Zone (TDZ). 
// console.log(year); //OUTPUT : Cannot access 'year' before initialization. 

var me = 'Jonas';
let job = 'teacher';
const year = 1991; 

// Functions
console.log(addDecl(2, 3)); //OUTPUT : 5
// console.log(addExpr(2, 3)); //OUTPUT : Cannot access 'addExpr' before initialization. 
// console.log(addArrow(2, 3));
// console.log(addExprVar(2, 3)); //OUTPUT : addExprVar is not a function. As the function is of type 'var', we get 'undefined' which leads to producing the error not a function. 

function addDecl(a, b){
  return a + b;
}

// const addExpr = function (a, b){
//   return a + b;
// }

// const addArrow = (a, b) => a + b;

var addExprVar = function (a, b) {
  return a + b;
}

// Example to explain pitfall of Hoisting 
console.log(numProducts); // OUTPUT: undefined
if(!numProducts) deleteShoppingCart(); // OUTPUT : All products deleted! - Since we declared numProducts of var type, it got hoisted and assigned the value undefined. Now as undefined is also a falsey value, the function deleteShoppingCart gets invoked 

var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted!');
}

/*
    Some Best Practices
    - Don't use var to declare variables. Use const most of the time to declare variables, and let if you really need to change the variable later.
    - In order to write clean code, you should declare your variables at the top of each scope 
    - Declare all the functions first, and use them only after the declaration.  
*/

var x = 1;
let y = 2;
const z = 3;

// Variables decalred using let or const do not create properties on the window object. 

console.log(x === window.x); // OUTPUT : true
console.log(y === window.y); // OUTPUT : false
console.log(z === window.z); // OUTPUT : false

/*
    The this keyword

    - this keyword / variable: Special variable that is created for every execution context (every function). Takes the value of (points to) the "owner" of the function in which the this keyword is used. 
    - this is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called. 
    
    Four different ways in which functions can be called
    - Method (As a function attached to an object)
      - this = <Object that is calling the method>
      - So when we call a method, the this keyword inside that method will simply point to the object on which the method is called. In other words, it points to the object calling the method. 
    - Simple function call 
      - this = undefined
      - Another way to call functions is by simply calling them as normal functions. So not as a method and so not attached to any object. 
      - In this case, the this keyword will simply be undefined (this is only valid for strict mode!)
      - Otherwise (not in strict mode!) it would point to the global window object and that can be very problematic. Another good reason, to use strict. 
    - Arrow functions 
      - this = <this of surrounding function (lexical this)>
    - Event listener
      - this = <DOM element that the handler is attached to>
    - new, call, apply, bind (other ways to call functions)
  
    - this does NOT point to the function itself, and also NOT to its variable environment!
*/
/*
// The this Keyword in Practice 
// console.log(this); //this keyword in the global scope is simply the window object 

const calcAgeExpr = function(birthYear){
  console.log(2037 - birthYear);
  // console.log(this); // OUTPUT : undefined --> This is because we are in strict mode. In sloppy mode, it would be also the global window object. 
}

calcAgeExpr(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  // console.log(this); // OUTPUT : window object --> This is because arrow function does not get its own this keyword. So instead, arrow function simply uses the lexical this keyword, which means it uses the this keyword of its parent function or its parent scope. 
}

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  }
};
jonas.calcAge(); // OUTPUT : jonas object --> So when we have a method call, the this keyword inside of the object will be the object that is calling the method 

const matilda = {
  year: 2017
}

matilda.calcAge = jonas.calcAge; //this is called method borrowing 
matilda.calcAge();

const f = jonas.calcAge;
f(); // OUTPUT : undefined, typeError : undefined is not an object (evaluating 'this.year')
// This happens because the f() function is now just a regular function call and not attached to any object. Therefore, the this keyword is undefined. 
*/

// Regular Functions vs. Arrow Functions 
//var firstName = 'Matilda'; //If we declare the var variable here it would then add a property named firstName to the global window object. 

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // SOLUTION 1
    // const self = this; // A solution that would be used pre ES6. 
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996); // OUTPUT : TypeError -> Even though we are making a function call inside of a method, but since functions do not have this keyword we get the TypeError. So a regular function call has this keyword set to undefined. 
    // }

    // SOLUTION 2 --> Arrow Function (Since arrow function uses the this keyword from its parent scope. And since in this case, in the parent scope the this keyword is pointing to Jonas object)
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996); // OUTPUT : TypeError -> Even though we are making a function call inside of a method, but since functions do not have this keyword we get the TypeError. So a regular function call has this keyword set to undefined. 
    }

    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet(); // OUTPUT : Hey undefined
// We get the above output because of the fact that arrow function does not get its own this keyword, it will simply use the this keyword from its surroundings. So in other words, parents' this keyword. And the parent scope of this greet method is global scope. 

console.log(this.firstName); // OUTPUT : undefined --> When we try to access a property that does not exist on a certain object, we do not get an error but simply undefined because it tries to fetch the propertyl from the global window object. 

console.log(jonas.calcAge());

//arguments keyword 
const addExpr = function (a, b){
  console.log(arguments);
  return a + b;
}
addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
  //console.log(arguments); // OUTPUT : Reference Error -> arguments is not defined. So arguments keyword is only declared in regular functions (function declarations and function expressions)
  return a + b;
} 
addArrow(2, 5);

// Primitives vs. Objects 
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const myself = {
  name: 'Jonas',
  age: 30,
};

const friend = myself; 
friend.age = 27;
console.log('Friend:', friend); // Age : 27
console.log('Myself:', myself); // Age : 27 (The age gets modified for the myself object as well)

// Primitive Data Types (Primitive Types) --> Number, String, Boolean, Undefined, Null, Symbol, Bigint
// Objects (Reference Types) --> Object literal, Arrays, Functions, Many more 

// So JS Engine has two components : Call Stack and Heap. 
// All of the objects, or in other word reference types are stored in memory heap. In the other hand, primitive or primitive types are stored in the call stack. So primitive types are stored in the execution contexts in which they are declared. 

// In the first example, what Javascript does behind the scenes is that it would first create a so-called unique identifier with the variable name. Then a piece of memory will be allocated with a certain address (for example, 0001). And finally the value would be stored in memory at the specified address. NOTE : It happens in call stack where primitive values are stored. The identifier points to the address and not the value itself. So the age is equal to the memory address 0001 which holds the value 30. 
// Now when we did oldAge = age, it would point to the same memory address 0001 as the age variable. But when we do age = 31, a new piece of memory is allocated and the age identifier simply points to the new address (0002), which is holding the value 31. 

// In the second example, when a new object is created such as the myself object, it is stored in the heap. And such as before, there is a memory address (D30F) and then the value itself. Now in the case of reference values such as the myself object, the myself identifier does not actually point directly to this new created memory address in the heap. Instead, it points to a new piece of memory (0003) that's created in the stack. And this new piece of memory (0003) will then point to the object that's in the heap by using the memory address (D30F) as its value. 

// In other words, the piece of memory in the call stack has a reference to the piece of memory in the heap, which holds the myself object. And that is the reason we call objects reference types in this context. And it works this way, because objects might be too large to be stored in the stack. Instead they are stored in the heap, which is almost like an unlimited memory pool. And the stack just keeps a reference to where the object is actually stored in the heap so it can find it whenever necessary. 

// Now when we create a new object, 'friend' the friend identifier will point to the exact same memory address as the me identifier. And again that address (0003) contains the reference (D30F), which then points to the objects itself. When we execute the line friend.age = 27, so what happens is that the object is found in the heap, and the 30 is changed to 27. 

// All variables declared const are immutable is actually an incorrect statement as it is only valid for primitive types. As for reference types, we are still able to modify the values because we are not changing the value (i.e., heap memory address D30F) to which the call stack memory is pointing. We are changing the value in the heap memory.

// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName); // OUTPUT : Davis Williams

// Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
}

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
}

// Object.assign() function essentially merges two objects and then return a new one. So in the below exmple, we would copy the jessica2 object into an empty object and this will then create a completely new object where all the properties are really copied.
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis'; 

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

// In the above example, a new object was created in the heap and 'jessicaCopy' is pointing to that object. So it has a reference to that new object. However, there is still a problem because using this technique of Object.assign() only works on the first level. So in other words, if we have an object inside an object, the inner object will still be the same so it will still point to the same place in memory. And that's why we say, the Object.assign() only creates a shallow copy and not a deep clone which is what we would like to have. 
// So again, a shallow copy will only copy the properties in the first level, while a deep clone would copy everything. 

// An example to illustrate shallow copy
const jessica3 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
}

const jessicaCopy2 = Object.assign({}, jessica3);
jessicaCopy2.family.push('Mary');
jessicaCopy2.family.push('John');

console.log(jessica3);
console.log(jessicaCopy2);

// So now both the objects are having four family members due to the shallow copy of Object.assign() method. 