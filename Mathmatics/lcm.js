function lcm(a,b){
  let larg = Math.max(a,b);
  let small = Math.min(a,b);
  for(let i = larg; ; i += larg){
    if(i % small === 0){
        return i;
    }
  }
  
}
const res = lcm(5,7);
console.log(res);