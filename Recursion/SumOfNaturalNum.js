function sumOfNaturalNum(n) {
  if (n < 1) {
    return 0;
  } else {
    let res = n + sumOfNaturalNum(n - 1);
    return res;
  }
}
console.log(sumOfNaturalNum(2564));
