class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = -Infinity;
        let max = 1;
        let min = 1;

        for(let n of nums) {
            let temp = max * n;
            max = Math.max(n, temp, min * n);
            min = Math.min(n, temp, min * n);
            res = Math.max(res, max);
        }

        return res;
    }
}
