function isSortedAscending(arr){
 for(let i = 0 ; i < arr.length; i++){
    if(arr[i] > arr[i+1]){
        return false;
    }
 }
 return true;
}
// the difference only is < and > sign of both code

const ascendingArray = [1, 2, 3, 5, 7, 10];
const isAscending = isSortedAscending(ascendingArray);
console.log(isAscending);
function isSortedDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  
  const descendingArray = [4,10, 7, 5, 3, 2, 1];
  const isDescending = isSortedDescending(descendingArray);
  console.log(isDescending); // Output: true
  