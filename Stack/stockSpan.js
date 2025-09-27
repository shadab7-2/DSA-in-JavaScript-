function stockSpan(prices) {
    const stack = [];
    const spans = [];

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
            stack.pop();
        }

        spans[i] = (stack.length === 0) ? (i + 1) : (i - stack[stack.length - 1]);
        stack.push(i);
    }

    return spans;
}

// Example usage:
const prices = [100, 80, 60, 70, 60, 75, 85];
console.log(stockSpan(prices)); // Output: [1, 1, 1, 2, 1, 4, 6]
