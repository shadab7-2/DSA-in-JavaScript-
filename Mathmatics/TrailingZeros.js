function traillingZeros(n){
 let count = 0;
 while(n >= 5)
 {
   n = Math.floor(n/5);
    count += n;
 }
 return count;
}

const res = traillingZeros(35);
console.log(res)