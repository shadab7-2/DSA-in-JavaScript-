// Ques 4: Maximum Count of Positive Integer and Negative Integer
// Given an array nums sorted in non-decreasing order, return the maximum between
// the number of positive integers and the number of negative integers.

// Input: nums = [-2,-1,-1,1,2,3]  ----->>>>>  Output: 3
// Explanation: There are 3 positive integers and 3 negative integers.
//              The maximum count among them is 3.

//Linear Search
function maxCount(arr) {
  let negInt = 0;
  let posInt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      continue;
    } else if (arr[i] < 0) {
      negInt++;
    } else {
      posInt++;
    }
  }
  return Math.max(negInt, posInt)
}

console.log(maxCount([-2,-1,-1,1,2,3,5]));

// Binary Search 
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            result = mid;
            break;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

function maxCount(nums) {
    const firstPositiveIndex = binarySearch(nums, 0);
    const positiveCount = firstPositiveIndex === -1 ? nums.length : firstPositiveIndex;
    const negativeCount = nums.length - positiveCount;

    return Math.max(positiveCount, negativeCount);
}

// Example usage:
const nums = [-2, -1, -1, 1, 2, 3];
console.log(maxCount(nums),2); // Output: 3


// ///////////////Two Pointer Methods
// function maxCount(nums) {
//     let positiveCount = 0;
//     let negativeCount = 0;
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         if (nums[left] < 0) {
//             negativeCount = right - left + 1;
//             break;
//         }
//         left++;
//     }

//     if (left === nums.length) {
//         return left; // All numbers are positive
//     }

//     while (right >= 0) {
//         if (nums[right] > 0) {
//             positiveCount = right + 1;
//             break;
//         }
//         right--;
//     }

//     return Math.max(positiveCount, negativeCount);
// }

// // Example usage:
// const nums2 = [-2, -1, -1, 1, 2, 3];
// console.log(maxCount(nums2)); // Output: 3
