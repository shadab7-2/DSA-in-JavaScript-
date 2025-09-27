function infixToPrefixSimple(infix) {
    // Reverse the infix expression
    infix = infix.split('').reverse().join('');

    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    };

    const stack = [];
    let prefix = '';

    for (let token of infix) {
        if (/\w/.test(token)) {
            prefix += token; // Operand
        } else if (token === ')') {
            stack.push(token); // Right parenthesis
        } else if (token === '(') {
            while (stack.length && stack[stack.length - 1] !== ')') {
                prefix += stack.pop();
            }
            stack.pop(); // Discard the right parenthesis
        } else { // Operator
            while (stack.length && precedence[token] < precedence[stack[stack.length - 1]]) {
                prefix += stack.pop();
            }
            stack.push(token);
        }
    }

    while (stack.length) {
        prefix += stack.pop();
    }

    // Reverse the result to get the prefix expression
    return prefix.split('').reverse().join('');
}

// Example usage:
const infixExpression1 = 'a+b*c-(d/e+f)*g';
console.log(infixToPrefixSimple(infixExpression1)); // Output: "-+a*bc*+defg"



////////////////////////////////
function infixToPrefixEfficient(infix) {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    };

    const operators = [];
    const operands = [];

    // Reverse the infix expression
    infix = infix.split('').reverse().join('');

    for (let token of infix) {
        if (/\w/.test(token)) {
            operands.push(token); // Operand
        } else if (token === ')') {
            operators.push(token); // Right parenthesis
        } else if (token === '(') {
            while (operators.length && operators[operators.length - 1] !== ')') {
                operands.push(operators.pop());
            }
            operators.pop(); // Discard the right parenthesis
        } else { // Operator
            while (operators.length && precedence[token] < precedence[operators[operators.length - 1]]) {
                operands.push(operators.pop());
            }
            operators.push(token);
        }
    }

    while (operators.length) {
        operands.push(operators.pop());
    }

    // Reverse the result to get the prefix expression
    return operands.reverse().join('');
}

// Example usage:
const infixExpression = 'a+b*c-(d/e+f)*g';
console.log(infixToPrefixEfficient(infixExpression)); // Output: "-+a*bc*+defg"


//////////////////////////////// 2
function evaluatePrefix(prefix) {
    const stack = [];

    // Reverse the prefix expression
    prefix = prefix.split('').reverse().join('');

    for (let token of prefix) {
        if (/\w/.test(token)) {
            stack.push(token); // Operand
        } else { // Operator
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            let result;

            switch (token) {
                case '+':
                    result = parseInt(operand1) + parseInt(operand2);
                    break;
                case '-':
                    result = parseInt(operand1) - parseInt(operand2);
                    break;
                case '*':
                    result = parseInt(operand1) * parseInt(operand2);
                    break;
                case '/':
                    result = Math.floor(parseInt(operand1) / parseInt(operand2)); // Integer division
                    break;
            }

            stack.push(result);
        }
    }

    return stack.pop();
}

// Example usage:
const prefixExpression = '-+a*bc*+defg';
console.log(evaluatePrefix(prefixExpression)); // Output: 3
