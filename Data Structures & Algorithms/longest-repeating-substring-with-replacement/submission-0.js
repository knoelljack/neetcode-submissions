class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let counts = {};
        let res = 0;
        let l = 0;
        for(let r=0; r < s.length; r++) {
            counts[s[r]] = (counts[s[r]] || 0) + 1;
            while(r - l + 1 - Math.max(...Object.values(counts)) > k) {
                counts[s[l]]--;
                l++;
            }
            res = Math.max(res, r - l + 1);
        }

        return res;
        
    }
}
