 // Missing Number 
 const missingNumber = (arr) =>{
   let n = arr.length + 1;
   const expSum = (n*(n+1))/2;
   const accSum = arr.reduce((sum, num )=>sum+num,0);
   const missNumber = expSum - accSum;
   return missNumber;
 }
  console.log(missingNumber([1, 2, 4, 6, 3, 7, 8]))