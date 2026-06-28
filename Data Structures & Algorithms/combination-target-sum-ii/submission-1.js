class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a,b) => a - b);

        const res = [];

        function combine(sum, curr, start) {
            if(sum > target) return;
            if(sum === target) {
                res.push(curr.slice());
                return;
            }

            for(let i=start; i < candidates.length; i++) {
                if(i > start && candidates[i] === candidates[i-1]) continue;

                curr.push(candidates[i]);
                combine(sum + candidates[i], curr, i + 1);
                curr.pop();
            }
        }

        combine(0, [], 0);

        return res;
    }
}
