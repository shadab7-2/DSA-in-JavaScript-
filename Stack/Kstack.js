class KStacks {
    constructor(k, n) {
        this.k = k; // Number of stacks
        this.n = n; // Total size of the array
        this.arr = new Array(n).fill(0); // Initialize array to store elements
        this.top = new Array(k).fill(-1); // Initialize array to store top indices of stacks
        this.next = Array.from({ length: n }, (_, index) => index + 1); // Initialize array to store next available index
        this.next[n - 1] = -1; // Mark the last index as -1 since it's the end of the array
        this.free = 0; // Initialize index of the first free slot in the array
    }

    push(stackNum, value) {
        if (this.free === -1) {
            console.log("Stack Overflow");
            return;
        }

        let i = this.free; // Get the index of the next free slot
        this.free = this.next[i]; // Update the index of the next free slot

        this.arr[i] = value; // Store the value in the array
        this.next[i] = this.top[stackNum]; // Link to the previous top element
        this.top[stackNum] = i; // Update the top index of the stack
    }

    pop(stackNum) {
        if (this.top[stackNum] === -1) {
            console.log("Stack Underflow");
            return;
        }

        let i = this.top[stackNum]; // Get the index of the top element of the stack
        let value = this.arr[i]; // Get the value at that index

        this.top[stackNum] = this.next[i]; // Update the top index of the stack
        this.next[i] = this.free; // Mark the current index as the next free slot
        this.free = i; // Update the index of the first free slot

        return value; // Return the popped value
    }

    peek(stackNum) {
        if (this.top[stackNum] === -1) {
            console.log("Stack is empty");
            return;
        }

        return this.arr[this.top[stackNum]]; // Return the value at the top index of the stack
    }

    isEmpty(stackNum) {
        return this.top[stackNum] === -1; // Check if the stack is empty
    }
}

// Example usage:
const kStacks = new KStacks(3, 6);
kStacks.push(0, 1);
kStacks.push(1, 2);
kStacks.push(2, 3);
kStacks.push(0, 4);
kStacks.push(1, 5);
kStacks.push(2, 6);

console.log(kStacks.pop(0)); // Output: 4
console.log(kStacks.pop(1)); // Output: 5
console.log(kStacks.pop(2)); // Output: 6

console.log(kStacks.peek(0)); // Output: 1
console.log(kStacks.peek(1)); // Output: 2
console.log(kStacks.peek(2)); // Output: 3

console.log(kStacks.isEmpty(0)); // Output: false
console.log(kStacks.isEmpty(1)); // Output: false
console.log(kStacks.isEmpty(2)); // Output: false
