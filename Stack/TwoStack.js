//Two stacks in an array
class TwoStacks {
    constructor(size) {
        this.size = size;
        this.array = new Array(size);
        this.top1 = -1; // Top of stack 1
        this.top2 = size; // Top of stack 2
    }

    push(stackNum, value) {
        if (this.top1 + 1 === this.top2) {
            console.log("Stack Overflow");
            return;
        }

        if (stackNum === 1) {
            this.array[++this.top1] = value;
        } else if (stackNum === 2) {
            this.array[--this.top2] = value;
        } else {
            console.log("Invalid stack number");
        }
    }

    pop(stackNum) {
        if (stackNum === 1) {
            if (this.top1 === -1) {
                console.log("Stack Underflow");
                return;
            }
            return this.array[this.top1--];
        } else if (stackNum === 2) {
            if (this.top2 === this.size) {
                console.log("Stack Underflow");
                return;
            }
            return this.array[this.top2++];
        } else {
            console.log("Invalid stack number");
        }
    }

    peek(stackNum) {
        if (stackNum === 1) {
            if (this.top1 === -1) {
                console.log("Stack is empty");
                return;
            }
            return this.array[this.top1];
        } else if (stackNum === 2) {
            if (this.top2 === this.size) {
                console.log("Stack is empty");
                return;
            }
            return this.array[this.top2];
        } else {
            console.log("Invalid stack number");
        }
    }

    isEmpty(stackNum) {
        if (stackNum === 1) {
            return this.top1 === -1;
        } else if (stackNum === 2) {
            return this.top2 === this.size;
        } else {
            console.log("Invalid stack number");
            return null;
        }
    }
}

// Example usage:
const twoStacks = new TwoStacks(5);
twoStacks.push(1, 10);
twoStacks.push(2, 20);
twoStacks.push(1, 30);
twoStacks.push(2, 40);
twoStacks.push(1, 50);
console.log(twoStacks.pop(1)); // Output: 50
console.log(twoStacks.pop(2)); // Output: 40
console.log(twoStacks.peek(1)); // Output: 30
console.log(twoStacks.peek(2)); // Output: 20
console.log(twoStacks.isEmpty(1)); // Output: false
console.log(twoStacks.isEmpty(2)); // Output: false
