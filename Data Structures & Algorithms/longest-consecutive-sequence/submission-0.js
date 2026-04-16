class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        let seen = new Set(nums);

        for(let n of nums) {
            let streak = 0, curr = n;
            while(seen.has(curr)) {
                streak++;
                curr++;
            }
            res = Math.max(res, streak);
        }

        return res;
    }
}
