// Find the maximum sum of any contiguous subarray in a given array.
// The Smart Intuition (Kadane’s Idea)
/*
You’re moving left to right through the array and trying to build the maximum subarray sum ending at each index.
Let’s say:
You’re at index i
The element is arr[i]
You already know the maximum subarray sum till previous index (i−1), call it currentSum
Now two possibilities:
Continue the previous subarray → currentSum + arr[i]
Start new subarray from current index → just arr[i]
So,
👉 currentSum = max(arr[i], currentSum + arr[i])
That’s the core theorem of Kadane’s Algorithm.
And to track the answer:
👉 maxSum = max(maxSum, currentSum) */

var maxSubArray = function(nums) {
   let currentSum = nums[0]
   let maxSum = nums[0]
   for(let i =1;i< nums.length; i++){
     currentSum = Math.max(nums[i], currentSum + nums[i]); //This is the 
     maxSum = Math.max(maxSum, currentSum);
   }
   return maxSum;
};

//Maximum Product Subarray (LeetCode #152)
var maxProduct = function(nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    if (n < 0) [curMax, curMin] = [curMin, curMax]; // swap when negative

    curMax = Math.max(n, curMax * n);
    curMin = Math.min(n, curMin * n);

    result = Math.max(result, curMax);
  }

  return result;
};

//Best Time to Buy and Sell Stock (LeetCode #121)
var maxProfit = function(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return maxProfit;
};


//Best Time to Buy and Sell Stock (LeetCode #121)