function sumOfDigit(n){
    if(n < 10){
        return n;
    }else{
        return (n%10) + sumOfDigit(Math.floor(n/10))
    }
}
console.log(sumOfDigit(10))