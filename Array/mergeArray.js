function mergeTwoArray(arr1, arr2) {
  let i = 0,
    j = 0;
  k = 0;
  let n1 = arr1.length;
  let n2 = arr2.length;
  let res = [];
  while(i < n1){
    res[k++] = arr1[i++];
  }
  while (j < n2){
    res[k++] = arr2[j++]
  }
  res.sort();
  return res;
}
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
 const result = mergeTwoArray(arr1, arr2);
 console.log(result)

//Methos 2
const ar1 = [1,2,4]
const ar2 = [3,5,6]
console.log([...ar1, ...ar2].sort())