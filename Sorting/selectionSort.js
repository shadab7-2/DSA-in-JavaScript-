function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i+1 ; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
            
        }
        if(minIndex !== i){
            [arr[i], arr[minIndex] ] = [arr[minIndex], arr[i]]
        }
        
    }
    return arr;
}
console.log(selectionSort([1,4,3,6,3,6,73,894,6,53]));