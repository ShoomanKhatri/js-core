console.log(null>0);   //   > operator consider null as 0.  0 is not greater than 0 so it returns false.
console.log(null==0);
console.log(null===0);
console.log(null>=0);

//Main logic:  ">" operator consider null as 0 for comparison.

//output
/*
false
false
false
true
*/
