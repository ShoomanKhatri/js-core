let a = 3;
let b = 5;

console.log("Before swap:");
console.log("a: " + a + " b: " + b);

// Swapping without a third variable using bitwise XOR (^)
a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("After swap:");
console.log("a: " + a + " b: " + b);

//output

/* Before swap:
a: 3 b: 5
After swap:
a: 5 b: 3    */
