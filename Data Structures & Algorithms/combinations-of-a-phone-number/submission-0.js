class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(!digits.length) return [];
        
        const map = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz",
        };

        const res = [];

        function dfs(index, curr) {
            if(index === digits.length) {
                res.push(curr);
                return;
            }

            const options = map[digits[index]];

            for(const letter of options) {
                dfs(index + 1, curr + letter);
            }
        }

        dfs(0, "");

        return res;
    }
}
