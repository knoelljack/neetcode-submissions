class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let max = 1, min = 1, maxSub = -Infinity;

        for(let num of nums) {
            const tempMax = max * num;
            max = Math.max(num, num * max, min * num);
            min = Math.min(num, num * min, tempMax);
            maxSub = Math.max(maxSub, max, min);
        }

        return maxSub;
    }
}
