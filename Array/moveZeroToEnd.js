function moveZeroToEnd(arr){
  let nonZeroIndex = 0;
  
  for(let i =0; i < arr.length;i++){
    if(arr[i] !== 0){
        arr[nonZeroIndex] = arr[i];
        nonZeroIndex++;
    }
  }
  for(let i = nonZeroIndex; i < arr.length;i++){
    arr[i] = 0;
  }
  return arr;
}

const arrayToMoveZeros = [0, 2, 0, 8, 4, 0, 1, 0];
const resultArray = moveZeroToEnd(arrayToMoveZeros);
console.log(resultArray);