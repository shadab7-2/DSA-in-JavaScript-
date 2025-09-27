function reverseWords(str){
   const wordsArr = str.split(" ");
   const  reversedWordsArr = wordsArr.reverse();
   const reversedString = reversedWordsArr.join(' ');
   return reversedString;
}

const str = "Hello World";
const reversedString = reverseWords(str);
console.log(reversedString);

// Methods Second
function reverseWords1(str){
   let arrayStr = str.split(' ');
   let left = 0;
   let right = arrayStr.length - 1;
   while(left < right){
       const temp= arrayStr[left];
       arrayStr[left] = arrayStr[right];
       arrayStr[right] = temp;
       
       left++;
       right--;   
   }
   return arrayStr.join(' ');
  }
  let res = reverseWords1(" jo gujari na ja saki hum se , hum ne vo gindagi gujari hai ")
  console.log(reverseWords(res))