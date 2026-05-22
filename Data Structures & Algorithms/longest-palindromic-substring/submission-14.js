class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resIdx = [-1, -1];
        let resLen = 0;

        function check(l, r) {
            while(s[r] && s[l] === s[r]) {
                if(r - l + 1 > resLen) {
                    resIdx = [l, r];
                    resLen = r - l + 1;
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
