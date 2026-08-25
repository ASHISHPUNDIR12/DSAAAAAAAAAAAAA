// Given a number n, return the count of digits in this number.

let n = 1567;
let count = Math.floor(Math.log10(n)) + 1;
// while (n != 0) {
//   n = Math.floor(n / 10);
//   count++;
// }
console.log(count);


// recursive approach -- 

// function countDigit(n) {
//     // Base case: if 'n' is a single-digit number
//     if (parseInt(n / 10) === 0)
//         return 1;

//     // Recursive case: strip one digit and count
//     return 1 + countDigit(parseInt(n / 10));
// }

// var n = 58964;
// console.log(countDigit(n));