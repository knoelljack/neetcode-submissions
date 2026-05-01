class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resIdx = [-1,-1];
        let longest = 0;

        function check(l,r) {
            while(l >= 0 && s[l] === s[r]) {
                if(r - l + 1 > longest) {
                    longest = r - l + 1;
                    resIdx = [l,r];
                }
                l--;
                r++;
            }
        }

        for(let i=0; i < s.length; i++) {
            check(i, i);
            check(i, i+1);
        }

        return s.substring(resIdx[0], resIdx[1] + 1);
    }
}
