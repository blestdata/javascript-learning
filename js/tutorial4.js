/**
 * Data types in Javascript
 * 
 * Two types of data types exists in Javascript:-
 * 1. Primitive Data type.
 * 2. Reference data type.
 * 
 * Primitive Data type stores data in form of Stack
 * Reference data type stores data in form of Heap [Dynamic]
 */

/**
 * Javascript is a dynamically typed language
 * i.e. while assigning a variable using var, let, const
 * we can specify anything as a value and JavaScript 
 * will automatically detect its data type
 * 
 * Primitive data types are as follows:-
 * 1. String                 
 * [collection of characters]"RandomName"
 * 2. Numbers
 * 962--------------"962" is a string
 * 3. Boolean
 * true and false
 * 4. Null
 * [An intentional empty value]
 * 5. undefined
 * [default value undefined]eg. var timing; ---> timing is undefined
 * 6. Symbol
 * [From ES6]
 * 
 * Reference data types are as follows:-
 * 1. Arrays
 * 2. Object Literals
 * 3. Functions
 * 4. Dates
 */

var name = "Randomname"
console.log("My name is " + name)
console.log("And datatype is " + (typeof name))