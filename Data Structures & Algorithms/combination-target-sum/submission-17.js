class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        function combine(curr, sum, i) {
            if(sum > target || i === nums.length) return;
            if(sum === target) {
                res.push(curr.slice());
                return;
            }

            curr.push(nums[i]);
            combine(curr, sum + nums[i], i);
            curr.pop();
            combine(curr, sum, i + 1);
        }

        combine([], 0, 0);
        return res;
    }
}
