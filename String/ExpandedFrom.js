/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedFrom(num){
    let numStr = num.toString();
    let len = numStr.length;
    let res = "";
    for(let i = 0; i < len; i++){
        let digit = Number(numStr[i]);
        if(digit !== 0){
            let palceValue = Math.pow(10, len- i - 1);
            res += (i === 0?"" : " + ") + digit * palceValue;
        }
    }
    return res;
}
console.log(expandedFrom(70304))