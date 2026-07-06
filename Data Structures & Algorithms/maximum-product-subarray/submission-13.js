class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let max = 1, min = 1, maxSub = -Infinity;

        for(let num of nums) {
            const tempMax = max * num;
            max = Math.max(num, max * num, min * num);
            min = Math.min(num, tempMax, min * num);
            maxSub = Math.max(maxSub, max, min);
        }

        return maxSub;
    }
}
