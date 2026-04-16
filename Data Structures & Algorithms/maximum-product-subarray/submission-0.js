class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = Math.max(...nums);
        let min = 1;
        let max = 1;

        for(let n of nums) {
            let temp = max * n;
            max = Math.max(min * n, max * n, n);
            min = Math.min(min * n, temp, n);
            res = Math.max(res, max);
        }

        return res;
    }
}
