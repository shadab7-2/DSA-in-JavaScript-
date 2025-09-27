function ropecuttingMax(n){
    if(n === 1){
        return 0;
    }

    let maxProduct = 0
    for(let i = 0 ; i < n ; i++){
        maxProduct = Math.max((maxProduct, i * (n - i)), i * ropecuttingMax(n-1))
    }
   return maxProduct;
}

console.log(ropecuttingMax(5));