class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let seen = new Set();
        let l = 0, r = 0;
        while(r < s.length) {
            while(seen.has(s[r])) {
                seen.delete(s[l]);
                l++;
            }
            seen.add(s[r]);
            longest = Math.max(r - l + 1, longest);
            r++;
        }

        return longest;
    }
}
