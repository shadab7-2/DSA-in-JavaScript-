
//Given a number N, the task is to return the count of digits in this number.
function countDigit(n){
    let count = 0;
    while(n != 0){
        n = Math.floor(n/10);
        count++;
    }
 return count;
}
 let n = 84589357
const res = countDigit(n);
console.log(res)
console.log(res)
// Method 2 

function CountDigit2 (n){
    const str = n.toString()
    const len = str.length;
    return len
    
}
const res2 = CountDigit2(n)
console.log(res2)