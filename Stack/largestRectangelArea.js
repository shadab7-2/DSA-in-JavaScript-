function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            const top = stack.pop();
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            const area = heights[top] * width;
            maxArea = Math.max(maxArea, area);
        }
        stack.push(i);
    }

    return maxArea;
}

// Example usage:
const heights1 = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights1)); // Output: 10


//Methods Part 2 
function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
        while (stack.length > 0 && (i === heights.length || heights[stack[stack.length - 1]] >= heights[i])) {
            const top = stack.pop();
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            const area = heights[top] * width;
            maxArea = Math.max(maxArea, area);
        }
        stack.push(i);
    }

    return maxArea;
}

// Example usage:
const heights2 = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights2)); // Output: 10

// Third3 Largest Rectangle with all 1's

function largestRectangleArea(heights) {
    const n = heights.length;
    let maxArea = 0;
    
    for (let i = 0; i < n; i++) {
        let width = 1; // Width of the rectangle
        let minHeight = heights[i]; // Height of the rectangle
        
        // Extend the rectangle to the right until we encounter a height less than the current one
        for (let j = i + 1; j < n && heights[j] === 1; j++) {
            width++;
            minHeight = Math.min(minHeight, heights[j]);
            maxArea = Math.max(maxArea, width * minHeight);
        }
    }
    
    return maxArea;
}

// Example usage:
const heights3 = [1, 1, 1, 1, 1, 1];
console.log(largestRectangleArea(heights3)); // Output: 6 (since all elements are 1's, the maximum area is the total number of elements)
