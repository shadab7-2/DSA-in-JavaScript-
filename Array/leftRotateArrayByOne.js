function leftRotateByOne(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const firstElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = firstElement;

  return arr;
}

const arr = [1, 2, 3, 4, 5];
const rotatedArray = leftRotateByOne(arr);
console.log(rotatedArray);
