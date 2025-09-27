function occuranceOfAnagram(str, pattern) {
  let i = 0;
  let j = 0;
  let count = 0;
  let k = pattern.length;
  let n = str.length;
  let patternFreq = {};
  let windowFreq = {};
  
  for (let char of pattern) {
      patternFreq[char] = (patternFreq[char] || 0) + 1;
  }
  if (k === 0 || k > n) return 0;
  
  const areMapsEqual = (map1, map2) => {
      for (let key in map1) {
          if (map1[key] !== map2[key]) {
              return false;
          }
      }
      return true;
  }
  
  while (j < n) {
      // Expand the window
      windowFreq[str[j]] = (windowFreq[str[j]] || 0) + 1;
      
      // If the window size is equal to the pattern size
      if (j - i + 1 === k) {
          // Check if the window frequency map matches the pattern frequency map
          if (areMapsEqual(windowFreq, patternFreq)) {
              count++; // If so, increment the count
          }
          
          // Shrink the window
          windowFreq[str[i]]--;
          if (windowFreq[str[i]] === 0) {
              delete windowFreq[str[i]];
          }
          i++;
      }
      
      j++; // Move the right pointer
  }

  return count;
}

// Example usage:
const str = "forxxorfxdofr";
const pattern = "for";
console.log(occuranceOfAnagram(str, pattern)); // Output: 3
