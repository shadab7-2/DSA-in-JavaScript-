function diversersOfNumber(n){
    let result = []
     for(let i = 1; i <= n/2; i++){
        if(n% i === 0)
        result.push(i)
     }
   return result;
}
let num = 52
const result = diversersOfNumber(num);
console.log(result)