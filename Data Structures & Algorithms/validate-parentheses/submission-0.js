class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = {
            '[' : ']',
            '{' : '}',
            '(' : ')'
        };
        let stack = [];

        for(let c of s) {
            if(c in map) {
                stack.push(map[c]);
            } else {
                if(stack.pop() !== c) return false;
            }
        }

        return stack.length === 0;
    }
}
