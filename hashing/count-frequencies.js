// Counting Frequencies of Array Elements

// function countFreq(arr) {
//   let n = arr.length;
//   let hash = new Map();
//   for (let i = 0; i < n; i++) {
//     hash.set(arr[i], (hash.get(arr[i]) || 0) + 1);
//   }
//   //   console.log(Array.from(hash));
//   hash.forEach((value, key) => {
//     console.log([key, value]);
//   });
// }

// let arr = [10, 19, 10, 5, 4, 5];
// countFreq(arr);

// without map

function countFreq(arr) {
  let freq = {};

  for (let num of arr) {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }
  let result = [];
  for (let key in freq) {
    result.push([Number(key), freq[key]]);
  }
  console.log(result);
}
let arrr = [10, 12, 14, 10, 12, 8];
countFreq(arrr);
