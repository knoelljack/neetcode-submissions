class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        return nums.length === 1 ? nums[0] : Math.max(this.choose(nums.slice(0, nums.length - 1)), this.choose(nums.slice(1)));
    }

    choose(nums) {
        let rob1 = 0, rob2 = 0;

        for(let num of nums) {
            let temp = Math.max(rob1 + num, rob2);
            rob1 = rob2;
            rob2 = temp;
        }

        return rob2;
    }
}
