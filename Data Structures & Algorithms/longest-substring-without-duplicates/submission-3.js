class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let l = 0;
        let r = 0;
        let seen = new Set();

        while(r < s.length) {
            if(!seen.has(s[r])) {
                seen.add(s[r]);
                r++;
                longest = Math.max(longest, r - l);
            } else {
                seen.delete(s[l]);
                l++;
            }
        }
        return longest;
    }
}
