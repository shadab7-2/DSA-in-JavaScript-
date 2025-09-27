// Ques 1: Implement Bubble Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14] ----->>>>>  Output: [10,14,14,29,37]


function bubbleSort(arr){
    let n = arr.length;
    for(let i = 0; i < n; i++){
       for(let j = 0 ; j < n-i-1;j++){
          if(arr[j] > arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
          }
       }
    }
    return arr;
}

console.log(bubbleSort([1,4,3,6,3,6,73,894,6,53]));