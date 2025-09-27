function printNto1(n) {
  if (n >= 1) {
    console.log(n);
    printNto1(n - 1);
  }
}


//Buttom Up approach
function printn1toN(n) {
  if (n >= 1) {
    printn1toN(n - 1);
    console.log(n);
  }
  return "Printing number form 1 to N";
}

// 3 Methods
for(let i =0; i < N; i++){
  console.log(i);
}
const res1 = printn1toN(5);
const res2 = printn1toN(5);
console.log(res1);
console.log(res2);
