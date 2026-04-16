class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for(let num of nums) {
            let streak = 0;
            while(numSet.has(streak + num)) streak++;
            longest = Math.max(longest, streak);
        }

        return longest;
    }
}
