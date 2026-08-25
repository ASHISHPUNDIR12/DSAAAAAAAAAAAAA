/// You are given an integer n. Your task is to find if it is a palindrome.
class Solution {
  isPalindrome(n) {
    let reversedNum = 0;
    let orginalNum = Math.abs(n);
    while (orginalNum != 0) {
      let lastDigit = orginalNum % 10;
      reversedNum = reversedNum * 10 + lastDigit;
      orginalNum = Math.floor(orginalNum / 10);
    }
    return Math.abs(n) === reversedNum;
  }
}
