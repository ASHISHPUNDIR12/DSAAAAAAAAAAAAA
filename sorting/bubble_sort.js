function bubble_sort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

let arr = [13, 46, 24, 52, 20, 9];

bubble_sort(arr);

console.log(arr);