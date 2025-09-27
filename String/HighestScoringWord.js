/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
function high(x){
    let words = x.split(" ");
    let highestScore = 0;
    let highestScoreWord = '';
    for(const word of words){
      let wordScore = 0;
      for(let i = 0; i < word.length; i++){
        wordScore += word.charCodeAt(i) - "a".charCodeAt(0) + 1;
      }
      if(wordScore > highestScore || 
         (wordScore === highestScore && words.indexOf(word) < words.indexOf(highestScoreWord)) ){
        highestScore = wordScore;
        highestScoreWord = word;
      }
    }
  
    return highestScoreWord;
  }