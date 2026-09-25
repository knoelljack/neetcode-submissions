class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        function dfs(open, close, curr) {
            if(curr.length === n * 2) {
                res.push(curr);
                return;
            }

            if(open < n) dfs(open + 1, close, curr + "(");
            if(close < open) dfs(open, close + 1, curr + ")");
        }

        dfs(0, 0, "");
        return res;
    }
}
