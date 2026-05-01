class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let max = 1, min = 1;
        let maxSub = -Infinity;

        for(let num of nums) {
            let tempMax = max * num;
            max = Math.max(num, max * num, min * num);
            min = Math.min(num, min * num, tempMax);
            maxSub = Math.max(maxSub, max);
        }

        return maxSub;
    }
}
