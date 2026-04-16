class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let l = 0;
        let counts = {};
        let maxF = 0;

        for(let r=0; r < s.length; r++) {
            const char = s[r];
            counts[char] = (counts[char] || 0) + 1;
            maxF = Math.max(maxF, counts[char]);
            while(r - l + 1 - maxF > k) {
                counts[s[l]]--;
                l++;
            }
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
