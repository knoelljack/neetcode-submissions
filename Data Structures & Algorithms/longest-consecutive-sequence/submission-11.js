class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        let set = new Set(nums);
        
        for(let n of nums) {
            let streak = 0;
            while(set.has(n + streak)) streak++;
            longest = Math.max(longest, streak);
        }

        return longest;
    }
}
