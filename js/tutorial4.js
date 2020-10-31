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

let name = "Randomname";
console.log("My name is " + name);
console.log("And datatype is " + (typeof name));

let marks = 48.7;
console.log("My marks is " + marks);
console.log("And datatype is " + (typeof marks));

let isDriver = true;
console.log("Do I Drive " + isDriver);
console.log("And Data type is ", (typeof isDriver)) //a space is automatically added when a comma is used, not added on "+""

let nullValue = null;
console.log("Value of null", nullValue)
console.log("Type of null is", (typeof nullValue))
/**
 * Null returns a object type
 * object type is for reference data
 * but null is a primitive data type
 * so return of null is bogus
 */

 let undef = undefined;
 console.log("Value of undefined is " + undef);
 console.log("Return type of undefined is", typeof undef)

 // Reference Data Types

 // Arrays
 let myArray = [4, 5, true, "football"]
 console.log("Array Defined is " + myArray);
 console.log("And datatype is " + (typeof myArray));

 myArray2 = [8, 9, false, "olympics"]
 console.log("Array undefined is " + myArray2);
 console.log("And datatype is " + (typeof myArray2));
 // No change??

 //Object Literals
 let subjectMarks = {
     Isle: 80,
     Roland: 72,
     "Locked Tower": 88 // if no quotation, SyntaxError: Unexpected Identifier
 };
 console.log("Object literal is "+ subjectMarks); // Why the Difference?
 console.log("Object literal is ", subjectMarks);
 console.log("And datatype is " + (typeof subjectMarks));

 function functionname() {
     
 }
 console.log("Function is ", functionname);
 console.log("And datatype is " + (typeof functionname));

 let date = new Date();
 console.log("Date is ", date);
 console.log("And datatype is " + (typeof date));