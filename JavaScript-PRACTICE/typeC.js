// Type Coercion Ex with DataTypes

// EX 1: Addition with Type Coercion
var num1 = 42; // Number DataType
var str1 = "3"; // String DataType

var result1 = num1 + str1;

console.log(result1);

// EX2: Subtraction with Type Coercion
var num2 = 69; // Number DataType
var str2 = "8"; // String DataType

var result2 = num2 - str2;

console.log(result2);

// EX3: Comparison with Type Coercion
var num3 = 4;
var str3 = "7";

console.log(num3 == str3); //Output: true / == operator checks if two values are equal

// EX4: Comparison with Type Coercion with Strict Equality
var num4 = 7;
var str4 = "7";

console.log(num4 === str4); //Output: true / === operator checks for two values that are not equal

// EX5: Concatenation with Type Coercion

var num5 = 08;
var str5 = "WasGoodGang";

var result5 = str5 + num5; //Output: WasGoodGang08

console.log(result5);

// EX6: Boolean Conversion with Type Coercion
var num6 = -10;
var bool6 = Boolean(num6);

console.log(bool6);

// EX7: String Conversion with Type Coercion
var bool7 = true;
var str7 = String(bool7);

console.log(str7);