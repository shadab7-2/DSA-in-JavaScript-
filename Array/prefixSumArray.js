/* 
Prefix Sum Array
Definition

A prefix sum array is an array where each element at index i contains the sum of all elements from the start up to index i.

Formally:

𝑝
𝑟
𝑒
𝑓
𝑖
𝑥
[
𝑖
]
=
𝑎
𝑟
𝑟
[
0
]
+
𝑎
𝑟
𝑟
[
1
]
+
.
.
.
+
𝑎
𝑟
𝑟
[
𝑖
]
prefix[i]=arr[0]+arr[1]+...+arr[i]
Why it’s useful

Normally, to find the sum of a subarray arr[i..j], you’d loop from i to j → O(n).

Using a prefix sum array, you can compute any subarray sum in O(1).

sum(arr[i..j])=prefix[j]−prefix[i−1]

Special case: if i = 0 → sum = prefix[j]
*/
let nums = [1,2,3,4]

var runningSum = function(nums) {
    let prefix = [];
    for(let i =0; i < nums.length; i++){
         if(i === 0){
            prefix[i] = nums[i];
         }else{
            prefix[i] = prefix[i-1] + nums[i];
         }
         
    }
    return prefix;
};

console.log(runningSum(nums))