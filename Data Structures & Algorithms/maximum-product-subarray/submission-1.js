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
            const temp = max * n;
            max = Math.max(n, max * n, min * n);
            min = Math.min(n, min * n, temp);
            res = Math.max(max, res);
        }
        return res;
    }
}
