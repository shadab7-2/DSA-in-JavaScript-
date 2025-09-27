function largestElement(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const arr1 = [2, 5, 6, 7, 46, 46, 35, 35, 66, 353, 24, 2];
const res = largestElement(arr1);
console.log(res);
