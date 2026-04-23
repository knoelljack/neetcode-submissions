class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let maxSub = -Infinity;
        let min = 1;
        let max = 1;

        for(let n of nums) {
            let temp = max * n;
            max = Math.max(n, max * n, min * n);
            min = Math.min(n, temp, min * n);
            maxSub = Math.max(maxSub, max);
        }

        return maxSub;
    }
}
