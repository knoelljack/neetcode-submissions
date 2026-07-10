class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const set = new Set(nums);

        for(let num of nums) {
            let streak = 0;
            while(set.has(num + streak)) streak++;
            longest = Math.max(longest, streak);
        }

        return longest;
    }
}
