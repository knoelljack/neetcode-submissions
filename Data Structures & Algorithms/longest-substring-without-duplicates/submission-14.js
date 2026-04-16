class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set();
        let l = 0, r = 0, longest = 0;

        while(r < s.length) {
            while(seen.has(s[r])) {
                seen.delete(s[l]);
                l++;
            }
            longest = Math.max(longest, r - l + 1);
            seen.add(s[r]);
            r++;
        }

        return longest;
    }
}
