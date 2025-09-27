function truncateText(str,len){
   if(str.length > len){
       return str.slice(0,len)+ "..."
   }else{
    return str;
   }
}
console.log(truncateText("sahdabansari",6))