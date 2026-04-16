class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const dict = {
            "[" : "]",
            "{" : "}",
            "(" : ")"
        };
        const stack = [];
        for(let char of s) {
            if(char in dict) stack.push(dict[char]);
            else if(stack.pop() !== char) return false;
        }
        return stack.length === 0;
    }
}
