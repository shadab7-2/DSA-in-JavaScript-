function nextGreaterElement(arr) {
    const stack = [];
    const result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            result.unshift(-1);
        } else {
            result.unshift(stack[stack.length - 1]);
        }

        stack.push(arr[i]);
    }

    return result;
}

// Example usage:
const arr = [4, 5, 2, 10, 8];
console.log(nextGreaterElement(arr)); // Output: [5, 10, 10, -1, -1]
