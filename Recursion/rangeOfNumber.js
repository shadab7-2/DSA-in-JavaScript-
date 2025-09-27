function rangeOfNumber(start, end) {
  if ( start > end) {
    return [];
  } else {
    const numbers = rangeOfNumber(start, end - 1);
    numbers.push(end);
    return numbers;
  }
}
console.log(rangeOfNumber(1,5))

//Brute force Methos 
function rangeOfNumbers(start, end) {
  if (start > end) {
      return [];
  } else {
      const result = [];
      for (let i = start; i <= end; i++) {
          result.push(i);
      }
      return result;
  }
}

// Example usage:
console.log(rangeOfNumbers(1, 5)); // Output: [1, 2, 3, 4, 5]
console.log(rangeOfNumbers(5, 10)); // Output: [5, 6, 7, 8, 9, 10]
console.log(rangeOfNumbers(10, 5)); // Output: []
