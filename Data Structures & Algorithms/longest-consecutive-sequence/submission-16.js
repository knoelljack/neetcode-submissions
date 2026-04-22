class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;

        for(let num of nums) {
            let streak = 0;
            while(set.has(streak + num)) streak++;
            longest = Math.max(longest, streak);
        }

        return longest;

    }
}
