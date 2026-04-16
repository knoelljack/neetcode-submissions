class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const seen = new Set(nums);

        for(let n of nums) {
            let streak = 0;
            while(seen.has(n + streak)) streak++;
            longest = Math.max(longest, streak);
        }

        return longest;
    }
}
