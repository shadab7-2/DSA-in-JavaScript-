//first Negetive Number in every window of size k

function firstNegativeNum(arr, k) {
  let n = arr.length;
  let i = 0,
    j = 0;
  let li = [];
  let res = [];
  while (j < n) {
    if (arr[j] < 0) {
      li.push(arr[j]);
    }
    if (j - i + 1 < k) {
      j++;
    } else {
      if (li.length === 0) {
        res.push(0);
      } else {
        res.push(li[0]);
        if (arr[i] === li[0]) {
          li.shift();
        }
      }

      i++;
      j++;
    }
  }
  return res;
}
const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const arr1 = [12, 1, 7, 8, 15, 30, 16, -28];

console.log(firstNegativeNum(arr1,3));



// Find the first negative number in every window of size k

// function firstNegativeNum(arr, k) {
//     let n = arr.length;
//     let i = 0,
//       j = 0;
//     let li = [];
//     let res = [];
  
//     while (j < n) {
//       if (arr[j] < 0) {
//         li.push(arr[j]); // Push the negative number into the list
//       }
  
//       if (j - i + 1 < k) {
//         j++;
//       } else {
//         if (li.length === 0) {
//           res.push(0); // If no negative number, push 0 (or any other placeholder value)
//         } else {
//           res.push(li[0]); // Push the first negative number in the window
//           if (arr[i] === li[0]) {
//             li.shift(); // Remove the first negative number as the window moves
//           }
//         }
//         i++;
//         j++;
//       }
//     }
  
//     return res;
//   }
  
//   const arr = [12, -1, -7, 8, -15, 30, 16, 28];
//   console.log(firstNegativeNum(arr, 3));
  