const maximumOfSubarray = (arr, k) => {
    let i = 0;
    let j = 0;
    let n = arr.length;
    let res = [];
    let max = 0;
    let windowarr = [];
    while(j < n){
         windowarr.push(arr[j]);
        if(j-i+1  === k){
         max = Math.max(...windowarr);
         res.push(max);
         windowarr.shift()
         i++;
        }
        j++;
    }
return res;
};
console.log(maximumOfSubarray([ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ],2))