function anagram(str1, str2){
 if(str1.length !== str2.length){
    return false;
 }
 
 const sortedStr1 = str1.split('').sort().join('')
 const sortedStr2 = str2.split('').sort().join('')
 
 return sortedStr1 === sortedStr2;
}
const res = anagram("listen", "silent");
console.log(res);
if(res){
    console.log('These two string are anagram')
}else{
    console.log("these two string are not anagram")
}