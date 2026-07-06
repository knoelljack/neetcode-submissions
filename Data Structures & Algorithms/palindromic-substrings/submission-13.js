class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;

        function check(l, r) {
            while(l >= 0 && s[l] === s[r]) {
                count++;
                l--;
                r++;
            }
        }

        for(let i=0; i < s.length; i++) {
            check(i, i);
            check(i, i+1);
        }

        return count;
    }
}
