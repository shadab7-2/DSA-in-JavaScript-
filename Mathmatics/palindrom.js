function palindrom(str) {
  let res = false;
  let revStr = str.split("").reverse().join("");
  if (str === revStr) {
    res = true;
  } 
  return res;
}
console.log(palindrom("rar"));
