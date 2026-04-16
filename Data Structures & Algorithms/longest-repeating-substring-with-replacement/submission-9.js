class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxF = 0;
        let longest = 0;
        const map = new Map();

        let l = 0, r = 0;

        while(r < s.length) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            maxF = Math.max(maxF, map.get(s[r]));
            while(r - l + 1 - maxF > k) {
                map.set(s[l], map.get(s[l]) - 1);
                l++;
            }
            longest = Math.max(longest, r - l + 1);
            r++;
        }

        return longest;
    }
}
