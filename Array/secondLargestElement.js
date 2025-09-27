function secondLargestElement(arr){
 let largest = arr[0];
 let secondLargest = arr[1]
 if(arr.length < 2){
    return "Array should have atlest two element for compare"
 }
 if(secondLargest > largest){
    [largest, secondLargest] = [secondLargest,largest];
 }
 for(let i = 2; i < arr.length; i++){
    if(arr[i] > largest){
        secondLargest = largest;
        largest = arr[i];
    }else if(arr[i] > secondLargest && arr[i] !== largest){
           secondLargest = arr[i]
    }
 }
 return secondLargest;
}

const arr = [2, 5, 6, 7, 46, 46, 35, 35, 66, 353, 24, 2];
const res = secondLargestElement(arr);
console.log(res);