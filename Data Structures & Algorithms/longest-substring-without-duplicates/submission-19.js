class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set();

        let longest = 0;

        let l = 0, r = 0;

        while(r < s.length) {
            const rightChar = s[r];

            while(seen.has(rightChar)) {
                seen.delete(s[l]);
                l++;
            }

            longest = Math.max(longest, r - l + 1);
            seen.add(rightChar);
            r++;
        }

        return longest;
    }
}
