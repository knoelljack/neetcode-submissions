class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0;
        const freqs = {};
        let maxF = 0, l = 0, r = 0;

        while(r < s.length) {
            freqs[s[r]] = (freqs[s[r]] || 0) + 1;
            maxF = Math.max(maxF, freqs[s[r]]);
            if(r - l + 1 - maxF > k) {
                freqs[s[l]]--;
                l++;
            }
            longest = Math.max(longest, r - l + 1);
            r++;
        }


        return longest;
    }
}
