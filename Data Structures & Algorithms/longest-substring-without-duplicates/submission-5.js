class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let l = 0;
        let r = 0;
        const seen = new Set();
        for(let r = 0; r < s.length; r++) {
            while(seen.has(s[r])) {
                seen.delete(s[l]);
                l++;
            }
            seen.add(s[r]);
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
