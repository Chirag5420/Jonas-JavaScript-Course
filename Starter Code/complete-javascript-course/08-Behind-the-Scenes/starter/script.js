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