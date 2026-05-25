class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];

        function dfs(start) {
            if(start === nums.length) {
                res.push([...nums]);
                return;
            }

            for(let i=start; i < nums.length; i++) {
                [nums[start], nums[i]] = [nums[i], nums[start]];

                dfs(start+1);

                [nums[i], nums[start]] = [nums[start], nums[i]];
            }
        }

        dfs(0);

        return res;
    }
}
