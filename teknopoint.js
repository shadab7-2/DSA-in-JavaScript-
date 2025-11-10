// Write a function to reverse a string.
function revStr(str){
 let res = '';
 for(let i = str.length-1; i >=0; i--){
     res  +=  str[i]
 }
 return res;
}
console.log(revStr("hello"));
// Implement a function to check if a given string is a palindrome.
   function palindrom(str){
      let res = ''
      let revStr = str.split("").reverse().join();
      if(str === revStr){
        res = true;
      }else{
        res = false;
      }
      return res;
   }
   console.log(palindrom("rarr"))

// Write a function to find the factorial of a number.
function factorial(n){
    if(n <= 1) return 1;

    return n*factorial(n - 1);
}
console.log(factorial(5))
 
// Implement a function to check if a number is prime.
function primeNum(num){
  for(let i = 2; i < num/2; i++){
    if(num%i === 0) return false
  }
  return true;
}
console.log(primeNum(20))
// Write a function to remove duplicate elements from an array.
function removeDuplicate(arr){
let res = [];
for (let i = 0; i < arr.length-1; i++) {
    if(!res.includes(arr[i])){
        res.push(arr[i]);
    }
}
return res;
}
console.log(removeDuplicate([1,3,4,2,3,5,3,6,3,6,2,6,2,45,3,2,2453,24]).sort((a,b)=> a-b))

// Implement a function to find the largest element in an array.
function largestElement(arr){
    let large = -Infinity;
    for(let  i = 0; i < arr.length-1; i++){
        if(arr[i] > large){
            large = arr[i]
        }
    }
    return large;
}
console.log(largestElement([1,3,4,5,6,6,7,4,7,4,4,4]))
// Write a function to sort an array of integers in ascending order.
function sortArr(arr){
    return arr.sort((a,b)=>(a-b)) // asending order
}
console.log(sortArr([2,6,2,6,3,21,5242,24,1,54]))
// Implement a function to merge two sorted arrays into a single sorted array.
// Write a function to check if two strings are anagrams of each other.
// Implement a function to find the nth Fibonacci number.
// Write a function to check if a given year is a leap year.
// Implement a function to calculate the sum of all digits in a number.
// Write a function to find the longest word in a sentence.
// Implement a function to reverse words in a sentence.
// Write a function to find the maximum sum of contiguous subarray in a given array.
// Implement a function to rotate an array to the right by k steps.
// Write a function to convert a binary number to decimal.
// Implement a function to find the second largest element in an array.
// Write a function to check if a given number is Armstrong number.
// Implement a function to calculate the power of a number.
// Write a function to find the missing number in an array of integers.
// Implement a function to check if a given string contains only digits.
// Write a function to count the number of vowels in a string.
// Implement a function to find the intersection of two arrays.
// Write a function to check if a given string is a valid palindrome ignoring spaces and punctuation.
// Implement a function to find the median of two sorted arrays.
// Write a function to check if a given string is a valid email address.
// Implement a function to remove all occurrences of a specified element from an array.
// Write a function to find the factorial of a large number using BigInt.
// Implement a function to check if a given number is perfect square.
// Write a function to generate a random alphanumeric string of a given length.
// Implement a function to reverse a linked list.
// Write a function to find the longest common prefix among an array of strings.
// Implement a function to convert a decimal number to binary.
// Write a function to check if a given string is a valid URL.
// Implement a function to find the first non-repeating character in a string.
// Write a function to remove all duplicates from a sorted linked list.
// Implement a function to perform a binary search on a sorted array.
// Write a function to find the maximum depth of a binary tree.
// Implement a function to find the sum of all left leaves in a binary tree.
// Write a function to check if a given binary tree is a binary search tree.
// Implement a function to find the diameter of a binary tree.
// Write a function to serialize and deserialize a binary tree.
// Implement a function to perform a depth-first search (DFS) on a graph.
// Write a function to perform a breadth-first search (BFS) on a graph.
// Implement a function to find the shortest path between two nodes in a graph.
// Write a function to detect a cycle in a directed graph.
// Implement a function to find the topological sorting of a directed graph.
// Write a function to find the maximum flow in a flow network.
// Implement a function to perform Dijkstra's algorithm to find the shortest path in a graph with non-negative edge weights.
// Write a function to find the longest increasing subsequence in an array of integers.
// Implement a function to sort an array of objects based on a specific property value.
// Write a function to find all possible permutations of a given string.
// Implement a function to generate all subsets of a given set.
// Write a function to check if a given string is a valid parentheses sequence.
// Implement a function to find the maximum product subarray in a given array.
// Write a function to implement a stack using arrays.
// Implement a function to implement a queue using two stacks.
// Write a function to implement a priority queue.
// Implement a function to perform binary search on a rotated sorted array.
// Write a function to implement a debounce function.
// Implement a function to implement a throttle function.
// Write a function to find the intersection of two linked lists.
// Implement a function to find the minimum spanning tree of a graph using Kruskal's algorithm.
// Write a function to find the longest common subsequence of two strings.
// Implement a function to find the edit distance between two strings.
// Write a function to implement a LRU (Least Recently Used) cache.
// Implement a function to find the kth smallest element in a binary search tree.
// Write a function to find all possible paths from the root to leaf nodes in a binary tree.
// Implement a function to flatten a nested array.
// Write a function to implement a binary search tree and its basic operations (insert, delete, search).
// Implement a function to find the number of islands in a 2D grid.
// Write a function to implement memoization to optimize recursive functions.
// Implement a function to generate all valid combinations of n pairs of parentheses.
// Write a function to implement a BigInt library for arbitrary precision arithmetic.
// Implement a function to calculate the square root of a number without using the built-in Math.sqrt().
// Write a function to implement the Fisher-Yates shuffle algorithm for shuffling an array.
// Implement a function to find the longest substring without repeating characters.
// Write a function to implement a Promise.allSettled() function.
// Implement a function to implement a custom EventEmitter class.