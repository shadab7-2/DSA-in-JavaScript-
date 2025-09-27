class Stack{
    constructor(){
        this.items = [];
    }
    push(ele){
      return this.items.push(ele)
    }
    isEmpty(){
       return this.items.length === 0;
    }
    pop(ele){
        if(this.isEmpty()){
            return "underflow";
        }
      return this.items.pop()
    }
}


function reverseString(str){
  let stack = new Stack();

  let reverseStr = '';
  for(let i = 0; i < str.length; i++){
     stack.push(str[i]);
  }

  while (!stack.isEmpty()) {
      reverseStr += stack.pop();
  }

  return reverseStr;
}

console.log(reverseString("hello"));