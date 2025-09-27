function reversString(str) {
  let arrayStr = str.split("");
  let left = 0;
  let right = arrayStr.length - 1;
  while (left < right) {
    const temp = arrayStr[left];  
    // temp is just like a empty pot to store the value,need to change tow pot value eachother.
    arrayStr[left] = arrayStr[right];
    arrayStr[right] = temp;

    left++;
    right--;
  }
  return arrayStr.join("");
}
//Method2
function ReverseString(str) {
  return str.split("").reverse().join("");
}
const reversed = ReverseString("India");
console.log(reversed);

//3 reversed string using for loop
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Example usage:
const original = "hello";
console.log(reverseString(original)); // Output: 'olleh'
