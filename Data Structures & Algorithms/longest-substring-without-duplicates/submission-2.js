class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        let used = new Set();
        let max = 0;
        while(r < s.length) {
            if(used.has(s[r])) {
                used.delete(s[l]);
                l++;
            } else {
                used.add(s[r]);
                r++;
            }
            max = Math.max(max, r - l);
        }

        return max;
    }
}
