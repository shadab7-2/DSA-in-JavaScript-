function hcf(a,b){
    let result = Math.min(a,b);
    while(result > 0){
        if(a%result == 0 && b%result == 0){
            break;
        }
        result--;
    }
return result;
}
const res = hcf(5,)
console.log(res)