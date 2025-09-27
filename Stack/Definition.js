/*
Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).
LIFO implies that the element that is inserted last, comes out first and FILO implies that the element that is inserted first, comes out last.

Key operations performed on a stack include:
Push: Adding an item onto the stack.
Pop: Removing the top item from the stack.
Peek (or Top): Viewing the top item without removing it.
isEmpty: Checking if the stack is empty.
size(): Checking the size of the stack.
Stacks are extensively used in programming for tasks such as expression evaluation, function calls and returns, backtracking in algorithms, memory management, and parsing. They are also utilized in implementing undo functionalities in text editors, managing function calls in compilers, and more.
*/
class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
    }
    
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
}
