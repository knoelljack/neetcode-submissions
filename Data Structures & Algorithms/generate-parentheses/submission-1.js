class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        function generate(open, close, s) {
            if(s.length === 2 * n) {
                res.push(s);
                return;
            }

            if(open < n) {
                generate(open + 1, close, s + "(");
            }

            if(close < open) {
                generate(open, close + 1, s + ")");
            }
        }

        generate(0, 0, "");
        return res;
    }
}
