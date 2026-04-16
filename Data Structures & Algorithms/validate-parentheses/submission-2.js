class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            '{':'}',
            '[':']',
            '(':')'
        };
        const stack = [];

        for(let char of s) {
            if(char in map) stack.push(map[char]);
            else if (stack.pop() !== char) return false;
        }

        return stack.length === 0;
    }
}
