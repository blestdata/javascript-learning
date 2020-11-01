console.log("Welconme to tutorial 5");
console.log("<--------------Type Conversion-------------->")
let myVar;
myVar = String(34);
console.log(myVar, typeof myVar);

let booleanVar = true;
console.log(booleanVar, typeof booleanVar);

booleanVar = String(booleanVar);
console.log(booleanVar, typeof booleanVar);

let date = new Date();
console.log(date, typeof date);
date = String(date);
console.log("String converted", date, typeof date);

let arrayExample = [1, 23, 454, 342531, 2, 4];
console.log(arrayExample, typeof arrayExample, "length of this array is =", arrayExample.length);
arrayExample = String(arrayExample);
console.log("String converted", arrayExample, typeof arrayExample, "length of this string converted array is =", arrayExample.length);

let i = 45;
console.log(i, "number, hence blue colored");
console.log(i.toString(), "String, hence black colored")
console.log(i, "checking after conversion. Number itself")

let stringExample = "88882947";
console.log(stringExample, typeof stringExample)
stringExample = Number(stringExample)
console.log(stringExample, typeof stringExample, "Number converted String")

stringExample2 = Number("45b6");
console.log(stringExample2, typeof stringExample2, "45b6 converted to number, Outputting NaN");

console.log(Number(true), "Number converted true value i.e. --> 1");
console.log(Number(false), "Number converted false value i.e. --> 0");
console.log(Number([3,4,5,7]), "[3,4,5,7] converted to number, Outputting NaN")

/**
 * parseInt --> Convering into int
 * parseFloat --> Converting into float
 */
console.log("parseInt --> Convering into int","parseFloat --> Converting into float")
console.log(parseInt(85.3967), "parseInt(85.3967)", parseFloat(85.3967), "parseFloat(85.3967)")
let number = 85.3967
console.log("number = 85.3967")
console.log(number.toFixed(5), "number.toFixed(5)", number.toFixed(2), "number.toFixed(2)")











// Type Coercion
console.log("<--------------Type Coercion-------------->");
let myStr = "88822047";
let myNum = 5830285;
console.log(myStr + myNum, "Number concatenates into string");

myStr = Number(myStr);
console.log(myStr + myNum, "Normal addition if string is converted using Number() first");

arrayExample = [1, 23, 454, 342531, 2, 4]
console.log(arrayExample)
for (val in arrayExample){
    console.log(`Iterator value is: ${val}`)
}
//Why does it how iterate through the array values?

console.log("Using for(let..of..) instead of for(..in..)");
for (let val of arrayExample){
    console.log(`Iterator value is: ${val}`)
}

arrCopy = [...arrayExample];
console.log(arrCopy);
arrCopy2 = [..."Hello to the World!"]
console.log(arrCopy2)

let buttonNames = new Map();
console.log(buttonNames, typeof buttonNames);
// Map creates an object. --> Reference Data type?

function counter(step = 1) {
    var count = 0;
    return function increaseCount(){
        count = count + step;
        return console.log(count); // Why is this printing?
    };
}

var incBy1 = counter(1);
var incBy3 = counter(3);

incBy1();
incBy1();

incBy3();
incBy3();
incBy3();

incBy1();
incBy1();