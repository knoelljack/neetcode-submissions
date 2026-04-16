class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];

        const backtrack = (curr, sum, idx) => {
            if(sum > target) return;
            if(sum === target) {
                res.push(curr.slice());
                return;
            }
            for(let i=idx; i<nums.length; i++) {
                curr.push(nums[i]);
                backtrack(curr, sum + nums[i], i);
                curr.pop();
            }
        }

        backtrack([], 0, 0);

        return res;
    }
}
