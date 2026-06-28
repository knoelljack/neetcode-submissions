class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        function dfs(open, close, s) {
            if(s.length === 2 * n) {
                res.push(s);
                return;
            }

            if(open < n) {
                dfs(open + 1, close, s + "(");
            }

            if(close < open) {
                dfs(open, close + 1, s + ")");
            }
        }

        dfs(0, 0, "");

        return res;
    }
}
