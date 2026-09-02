function selection_sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let mini = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[mini]) {
        mini = j;
      }
      let temp = arr[mini];
      arr[mini] = arr[i];
      arr[i] = temp;
    }
  }
}

let arr = [13, 46, 24, 52, 20, 9];
selection_sort(arr);
console.log(arr);
