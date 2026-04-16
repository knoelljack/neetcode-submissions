class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = Array(nums.length).fill(1);
        let pre = 1;
        let suff = 1;

        for(let i=0; i < nums.length; i++) {
            res[i] *= pre;
            pre *= nums[i];
        }
        for(let i=nums.length - 1; i >= 0; i--) {
            res[i] *= suff;
            suff *= nums[i];
        }
        return res;
    }
}
