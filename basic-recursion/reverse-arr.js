// reverse an array

// function reverse(i, arr) {
//   let n = arr.length;
//   if (i >= n / 2) return;
//   let temp = arr[i];
//   arr[i] = arr[n - i - 1];
//   arr[n - i - 1] = temp;
//   reverse(i + 1, arr);
// }

// let arr = [10, 1, 4, 5, 6, 8];

// reverse(0, arr);

// console.log(arr);

// check if the string is palindrome

function palindrome_check(i, str) {
  let n = str.length;
  if (i >= n / 2) return true;
  if (str[i] != str[n - i - 1]) return false;
  return palindrome_check(i + 1, str);
}
let str = "MADAM";
console.log(str.length);
