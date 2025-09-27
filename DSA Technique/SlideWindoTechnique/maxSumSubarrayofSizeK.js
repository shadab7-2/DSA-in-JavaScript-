//find the mex sum subarray of  size k
// to find the min sum subArr follow changes 1 and 2.
function findMaxSumSubarray(arr, k) {
  const n = arr.length;
  if (k < 0 || k > n) {
    return null;
  }
  let i = 0,
    sum = 0,
    j = 0;
    let mx = 0;// 1. change o to positive infinity
  while (j < n) {
    sum += arr[j];
    if (j - i + 1 < k) {
      j++;
    } else {
      
     mx = Math.max(mx, sum);// 2. change max to min find the min sum subArr 
     sum -= arr[i]
      i++;
      j++;
    }
  }
  return mx;
}
console.log("hi")
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const k = 3;
const result = findMaxSumSubarray(array, k);
console.log(result); // Output should be 21 (7 + 8 + 6)