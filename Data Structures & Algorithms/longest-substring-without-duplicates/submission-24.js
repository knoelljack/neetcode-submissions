class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set();

        let left = 0;
        let right = 0;
        let longest = 0;
        
        while(right < s.length) {
            const rightChar = s[right];
            while(seen.has(rightChar)) {
                seen.delete(s[left]);
                left++;
            }

            seen.add(rightChar);
            longest = Math.max(longest, right - left + 1);
            right++;
        }

        return longest;
    }
}
