class MinStack {
    constructor() {
        this.stack = []; // Main stack to store elements
    }

    push(val) {
        // If the stack is empty, the minimum value is the value itself
        const min = this.stack.length === 0 ? val : Math.min(val, this.getMin());
        // Push the value and the minimum value onto the stack
        this.stack.push({ value: val, min });
    }

    pop() {
        // If the stack is empty, return null
        if (this.stack.length === 0) {
            return null;
        }
        // Pop the top element from the stack and return its value
        return this.stack.pop().value;
    }

    top() {
        // If the stack is empty, return null
        if (this.stack.length === 0) {
            return null;
        }
        // Return the value of the top element of the stack
        return this.stack[this.stack.length - 1].value;
    }

    getMin() {
        // If the stack is empty, return null
        if (this.stack.length === 0) {
            return null;
        }
        // Return the minimum value of the top element of the stack
        return this.stack[this.stack.length - 1].min;
    }
}

// Example usage:
const stack1 = new MinStack();
stack1.push(3);
stack1.push(5);
stack1.push(2);
console.log(stack1.getMin()); // Output: 2
stack1.push(1);
console.log(stack1.getMin()); // Output: 1
stack1.pop();
console.log(stack1.getMin()); // Output: 2


//////Design a stack with getMin() in O(1) space
class MinStack {
    constructor() {
        this.stack = []; // Main stack to store elements
        this.minValue = null; // Variable to store the current minimum value
    }

    push(val) {
        // If the stack is empty or the new value is smaller than the current minimum value,
        // update the minimum value to be the new value
        if (this.stack.length === 0 || val < this.minValue) {
            this.minValue = val;
        }
        // Push the difference between the current value and the previous minimum value onto the stack
        this.stack.push(val - this.minValue);
    }

    pop() {
        // If the stack is empty, return null
        if (this.stack.length === 0) {
            return null;
        }
        // Pop the top element from the stack
        const diff = this.stack.pop();
        // If the popped element is negative, it means it represents a change in the minimum value,
        // so we need to update the minimum value accordingly
        if (diff < 0) {
            const prevMin = this.minValue;
            this.minValue = prevMin - diff;
            return prevMin; // Return the previous minimum value
        }
        // Otherwise, return null as the element doesn't represent the minimum value
        return null;
    }

    top() {
        // If the stack is empty, return null
        if (this.stack.length === 0) {
            return null;
        }
        // If the top element of the stack is negative, it represents the difference between the current value and the previous minimum value,
        // so we return the previous minimum value as the top value
        const diff = this.stack[this.stack.length - 1];
        return diff < 0 ? this.minValue : this.minValue + diff;
    }

    getMin() {
        // If the stack is empty, return null
        if (this.stack.length === 0) {
            return null;
        }
        // Return the current minimum value
        return this.minValue;
    }
}

// Example usage:
const stack2 = new MinStack2();
stack2.push(3);
stack2.push(5);
stack2.push(2);
console.log(stack2.getMin()); // Output: 2
stack2.push(1);
console.log(stack2.getMin()); // Output: 1
stack2.pop();
console.log(stack2.getMin()); // Output: 2
