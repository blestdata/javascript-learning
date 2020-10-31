console.log("Tutorial 3.");

// Variables in Javascript
// Declearing the variable
// We tell the interpreter that a variable exists in local scope
// We still havent assigned a value to a variable

// var, let, const
var name1 = "RandomName";
var name2 = `Ra"n'dom"n'ame`
var name3;;
var name4 = 783494883;
name4 = 42
console.log(name1, name2, name3, name4)

/**
 * Rules for creating a variable name
 * 1. Cannot start with number
 * 2. Can start with letter, number, _ or $
 * 3. Are Case sensetive
 */

 /*
  Don't use _ or $ in genral as genrally _ is used in
  object oriented Javascript as a private variable and 
  $ is used in JQuery 
  */

  const ownersName = "Phoenix";
  /*
  ownersName = "123"
  wont work as the decleration is done by const. 
  TypeError: Assignment to constant variable.
  */
  console.log(ownersName);
  /*
  const truthordare;
  Wont work. As we have to define a const at its decleration
  SyntaxError: Missing initializer in const declaration
  */

  /**
   * let is used for bloced scoped variables only
   */
  var city = "Mumbai";
  console.log(city,"Decleration");
  {
      let city = "Delhi";
      console.log(city,"Inside block Scope")
      /**
       * If we hadn't used let, we would have found ourselves
       * a reassignment of global variable city. as we have defined city using let, we could assign city again after this but still the global city would be unchanged. As the cityis defined in this scope as a let variable
       */
      city = "Hyderabad"
  }
  {
      console.log(city);
      city = "Kolkata"
      console.log(city);
  }

  console.log(city,"Outside Block Scope")

/**
 * A const array would not mean that elements in the array\
 *  could not be changed. it menas that the array could not be 
 * redecleared.
 */

 console.log("const array example.")
 const arrayExample1 = [43, 654, 87, 22, 43, 5]
 console.log(arrayExample1)
 arrayExample1.push(232)
 console.log("Now element is pushed", arrayExample1)
 let arrayExampleTempElement = arrayExample1.pop(5)
 console.log("Now elements are pop 'ed",arrayExample1, arrayExampleTempElement," pop will only remove last element")
/**
 * redecleration of arrayExample1 will give
 * TypeError: Assignment to constant variable.
 * eg, after above assignment,
 * arrayExample1 = [346, 5, 7687, 2]
 */
// Same behaviour for both array and objects in const

 console.log("Document get element by tag name example",document.getElementsByTagName("p")[0].innerText);

 document.getElementsByTagName("p")[0].innerText = "Now this says My name !!!!!!!!!!!!!!!!!!!!!!!!!!!!"

 /**
  * Common Writing Cases
  * 1. camelCase
  * 2. kebab-case
  * 3. snake_case
  * 4. PascalCase
  */