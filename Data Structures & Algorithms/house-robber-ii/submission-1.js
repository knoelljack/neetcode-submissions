class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        return nums.length === 1 ? nums[0] : Math.max(this.helper(nums.slice(1)), this.helper(nums.slice(0, nums.length - 1)))
    }

    helper(nums) {
        let rob1 = 0;
        let rob2 = 0;
        for(let n of nums) {
            let newRob = Math.max(rob1 + n, rob2);
            rob1 = rob2;
            rob2 = newRob;
        }
        return rob2;
    }
}
