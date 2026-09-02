function insertion_sort(arr){
    let n = arr.length
    for(let i=0; i<n; i++){
        let j = i;
        while(j>0 && arr[j-1]>arr[j]){
            let temp = arr[j]
            arr[j] = arr[j-1];
            arr[j-1] = temp; 
            j--;
        }
    }
}


let arr = [13, 46, 24, 52, 20, 9];
insertion_sort(arr);
console.log(arr);