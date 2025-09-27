function infixToPostfixSimple(infix) {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    };

    const stack = [];
    let postfix = '';

    for (let token of infix) {
        if (/\w/.test(token)) {
            postfix += token; // Operand
        } else if (token === '(') {
            stack.push(token); // Left parenthesis
        } else if (token === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                postfix += stack.pop();
            }
            stack.pop(); // Discard the left parenthesis
        } else { // Operator
            while (stack.length && precedence[token] <= precedence[stack[stack.length - 1]]) {
                postfix += stack.pop();
            }
            stack.push(token);
        }
    }

    while (stack.length) {
        postfix += stack.pop();
    }

    return postfix;
}

// Example usage:
const infixExpression1 = 'a+b*c-(d/e+f)*g';
console.log(infixToPostfixSimple(infixExpression1)); // Output: "abc*+de/f+g*-"


//Secons Question 
function infixToPostfixEfficient(infix) {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    };

    const operators = [];
    const operands = [];

    for (let token of infix) {
        if (/\w/.test(token)) {
            operands.push(token); // Operand
        } else if (token === '(') {
            operators.push(token); // Left parenthesis
        } else if (token === ')') {
            while (operators.length && operators[operators.length - 1] !== '(') {
                operands.push(operators.pop());
            }
            operators.pop(); // Discard the left parenthesis
        } else { // Operator
            while (operators.length && precedence[token] <= precedence[operators[operators.length - 1]]) {
                operands.push(operators.pop());
            }
            operators.push(token);
        }
    }

    while (operators.length) {
        operands.push(operators.pop());
    }

    return operands.join('');
}

// Example usage:
const infixExpression2 = 'a+b*c-(d/e+f)*g';
console.log(infixToPostfixEfficient(infixExpression2)); // Output: "abc*+de/f+g*-"

//////
function evaluatePostfix(postfix) {
    const stack = [];

    for (let token of postfix) {
        if (/\d/.test(token)) {
            stack.push(parseInt(token)); // Operand
        } else { // Operator
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            let result;

            switch (token) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = Math.floor(operand1 / operand2); // Integer division
                    break;
            }

            stack.push(result);
        }
    }

    return stack.pop();
}

// Example usage:
const postfixExpression = '234*+82/-';
console.log(evaluatePostfix(postfixExpression)); // Output: 3
 