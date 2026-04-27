class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0;
        let maxF = 0;

        const counts = {};
        let l = 0, r = 0;

        while(r < s.length) {
            counts[s[r]] = (counts[s[r]] || 0) + 1;
            maxF = Math.max(maxF, counts[s[r]]);

            while(r - l + 1 - maxF > k) {
                counts[s[l]]--;
                l++;
            }

            longest = Math.max(longest, r - l + 1);
            r++;
        }

        return longest;
    }
}
