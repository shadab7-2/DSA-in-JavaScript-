function reverseArray(arr) {
  let revArr = arr.reverse();
  return revArr;
}

const arr = [10, 7, 5, 3, 2, 1];
const isReversed = reverseArray(arr);
console.log(isReversed);

function reverseArray2(arr) {
  let res = [];
 
  for (let i = arr.length-1; i >= 0 ; i--) {
    res.push(arr[i]);
  }
  return res;
}

const arr2 = [10, 7, 5, 3, 2, 1];
const isReversed2 = reverseArray2(arr2);
console.log(isReversed2);