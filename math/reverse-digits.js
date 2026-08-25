class Solution {
  reverseDigits(n) {
    let originalNum = n;
    let reversedNum = 0;
    while (n != 0) {
      let lastDigit = n % 10;
      reversedNum = reversedNum * 10 + lastDigit;
      n = Math.floor(n / 10);
    }
    return reversedNum;
  }
}
