class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0;

        let l = 0, r = 0;
        const counts = {};
        let maxF = 0;

        while(r < s.length) {
            const rightChar = s[r];
            counts[rightChar] =  (counts[rightChar] || 0) + 1;
            maxF = Math.max(maxF, counts[rightChar]);

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
