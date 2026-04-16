class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(!s.length) return true;
        if(s.length % 2 !== 0) return false;

        let map = {
            '{':'}',
            '[':']',
            '(':')',
        };
        let stack = [];

        for(let char of s) {
            if(char in map) stack.push(map[char]);
            else if(stack.pop() !== char) return false;
        }

        return stack.length === 0;
    }
}
