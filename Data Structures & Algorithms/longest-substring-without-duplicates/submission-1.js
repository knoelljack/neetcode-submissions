class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        let used = new Set();
        let longest = 0;

        while(r < s.length) {
            if(used.has(s[r])) {
                used.delete(s[l]);
                l++;
            } else {
                used.add(s[r]);
                r++;
            }
            longest = Math.max(r-l, longest);
        }

        return longest;
    }
}
