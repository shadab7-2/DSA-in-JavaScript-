function prime(n){
  for(let i = 2; i < n-1;i++){
    if(n % i === 0){
        return " Not a Prime Number"
    }
  }
  return "Prime Number"
}
const res = prime(7)
console.log(res)