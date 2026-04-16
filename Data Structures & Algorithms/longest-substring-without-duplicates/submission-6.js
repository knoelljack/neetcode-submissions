class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0, r = 0, res = 0;
        const seen = new Set();

        while(r < s.length) {
            if(seen.has(s[r])) {
                seen.delete(s[l]);
                l++;
            } else {
                seen.add(s[r]);
                res = Math.max(r - l + 1, res);
                r++;
            }
        }
        return res;
    }
}
