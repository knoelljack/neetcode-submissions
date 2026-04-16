class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        const counts = {};
        let maxF = 0;
        let longest = 0;

        for(let r=0; r < s.length; r++) {
            counts[s[r]] = (counts[s[r]] || 0) + 1;
            maxF = Math.max(counts[s[r]], maxF);
            while(r - l + 1 - maxF > k) {
                counts[s[l]]--;
                l++;
            }
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
