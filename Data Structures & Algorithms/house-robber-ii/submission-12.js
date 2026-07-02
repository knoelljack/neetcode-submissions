class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        return nums.length === 1 ? nums[0] : Math.max(this.choose(nums.slice(1)), this.choose(nums.slice(0, nums.length - 1)));
    }

    choose(houses) {
        let rob1 = 0, rob2 = 0;

        for(let house of houses) {
            const temp = Math.max(rob1 + house, rob2);
            rob1 = rob2;
            rob2 = temp;
        }

        return rob2;
    }
}
