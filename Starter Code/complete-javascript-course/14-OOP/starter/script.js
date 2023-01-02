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