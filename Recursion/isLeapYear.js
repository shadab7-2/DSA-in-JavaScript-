// Leap years are divisible by 4, and  they are not divisible by 100
// Except if they are divisible by 400, then they are leap years
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

console.log(isLeapYear(2024)); // output: true
console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(2021)); // Output: false
console.log(isLeapYear(1900)); // Output: false
console.log(isLeapYear(2000)); // Output: true
