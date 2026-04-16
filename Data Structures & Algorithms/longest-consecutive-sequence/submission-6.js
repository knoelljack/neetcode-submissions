class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        let numSet = new Set(nums);
        for(let n of numSet) {
            if(!numSet.has(n-1)) {
                let streak = 0;
                while(numSet.has(n + streak)) streak++;
                longest = Math.max(longest, streak);
            }
        }

        return longest;
    }
}
