//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function towSum(arr, tar) {
  let indexs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === tar) {
        indexs.push(i);
        indexs.push(j);
      }
    }
  }
  return indexs;
}
const results = towSum([1, 3, 10, 11, 14], 5);
console.log(results);
