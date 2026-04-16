class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        return nums.length === 1 ? nums[0] : Math.max(this.dfs(nums.slice(1)), this.dfs(nums.slice(0, nums.length - 1)))
    }

    dfs(nums) {
        let rob1 = 0;
        let rob2 = 0;

        for(let i=0; i < nums.length; i++) {
            const temp = Math.max(rob1 + nums[i], rob2);
            rob1 = rob2;
            rob2 = temp;
        }

        return rob2;
    }
}
