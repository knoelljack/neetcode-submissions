class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {

        const memo = {};

        function dfs(prev, i) {
            if(i === nums.length) {
                return 0;
            }

            const key = `${prev},${i}`;
            if(key in memo) return memo[key];

            let skip = dfs(prev, i+1);

            let take = 0;

            if(nums[i] > prev) {
                take = 1 + dfs(nums[i], i+1);
            }

            let most = Math.max(skip, take);
            memo[key] = most;
            return most;
        }

        return dfs(-Infinity, 0);
    }
}
