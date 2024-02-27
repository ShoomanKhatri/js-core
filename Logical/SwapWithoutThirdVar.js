let a = 5;
let b = 10;

console.log("Before swap:");
console.log("a:"+a+" b:", b);

// Swapping without a third variable
[a, b] = [b, a];            // It is a form of array destructuring assignment in JavaScript.

console.log("After swap:");
console.log("a:"+a+" b:", b);


// output
Before swap:
a:5 b: 10
After swap:
a:10 b: 5
