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