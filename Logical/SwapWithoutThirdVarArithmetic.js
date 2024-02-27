let a = 3;
let b = 5;

console.log("Before swap:");
console.log("a: " + a + " b: " + b);

// Swapping without a third variable using addition and subtraction
a = a + b; // a = 3 + 5 = 8
b = a - b; // b = 8 - 5 = 3
a = a - b; // a = 8 - 3 = 5

console.log("After swap:");
console.log("a: " + a + " b: " + b);

/* 
Before swap:
a: 3 b: 5
After swap:
a: 5 b: 3
*/
