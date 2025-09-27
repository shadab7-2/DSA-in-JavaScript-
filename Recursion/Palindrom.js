// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. For example, "radar" and "level" are palindromic words, and "12321" and "racecar" are palindromic numbers and phrases respectively.

// The condition of a palindrome is that when the characters of the word or phrase are reversed, they form the same sequence as the original word or phrase.

function palindromfNum(x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}


///////////Method 2 usig recursion
function palindromRec(num){
   if(num < 0) return false;

   let strNum = num.toString();
   if(strNum.length < 1){
    return true
   }

   if(strNum[0] === strNum[strNum.length - 1]){
    return palindromRec(strNum.slice(1,-1))
   }else{
    return false;
   }
}

const res = palindromRec(12112);
console.log(res);