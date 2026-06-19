class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for(let token of tokens) {
            if(!isNaN(token)) {
                stack.push(Number(token));
                continue;
            }

            const b = stack.pop();
            const a = stack.pop();

            if(token === "+") stack.push(a + b);
            else if (token === "-") stack.push(a - b);
            else if (token === "/") stack.push(Math.trunc(a / b));
            else if (token === "*") stack.push(a * b);
        }

        return stack[0];
    }
}
