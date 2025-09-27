function removeDuplicates(sortedArray){
 if(sortedArray.length === 0){
    return [];
 }
 let uniqueArray = [sortedArray[0]];
 
 for(let i =1; i < sortedArray.length; i++){
    if(sortedArray[i] !== sortedArray[i-1]){
        uniqueArray.push(sortedArray[i]);
    }
 }
 return uniqueArray;
}

const sortedArrayWithDuplicates = [1, 1, 2, 2, 3, 4, 4, 5, 5];
const uniqueArray = removeDuplicates(sortedArrayWithDuplicates);
console.log(uniqueArray);