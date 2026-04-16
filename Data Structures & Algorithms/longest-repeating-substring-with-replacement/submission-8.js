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
        let l = 0;

        for(let r=0; r < s.length; r++) {
            const char = s[r];
            counts[char] = (counts[char] || 0) + 1;
            maxF = Math.max(counts[char], maxF);
            while(r - l + 1 - maxF > k) {
                counts[s[l]]--;
                l++;
            }
            longest = Math.max(longest, r - l + 1);
        }



        return longest;
    } 
}
