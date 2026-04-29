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
            while(seen.has(s[r])) {
                seen.delete(s[l]);
                l++;
            }

            seen.add(s[r]);
            longest = Math.max(longest, r - l + 1);
            r++;
        }

        return longest;
    }
}
