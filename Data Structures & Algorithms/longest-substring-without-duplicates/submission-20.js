class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set();
        let l = 0;
        let r = 0;
        let longest = 0;

        while(r < s.length) {
            const rightChar = s[r];

            while(seen.has(rightChar)) {
                seen.delete(s[l]);
                l++;
            }

            seen.add(rightChar);
            longest = Math.max(longest, r - l + 1);
            r++;
        }

        return longest;
    }
}
