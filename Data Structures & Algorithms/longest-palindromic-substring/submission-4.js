class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resLen = 0;
        let resIdx = [-1,-1];

        for(let i=0; i < s.length; i++) {
            //odd
            let l = i, r = i;
            while(l >= 0 && s[l] === s[r]) {
                if(r - l + 1 > resLen) {
                    resLen = r - l + 1;
                    resIdx = [l, r];
                }
                l--;
                r++;
            }

            //even
            l = i, r = i + 1;
            while(l >= 0 && s[l] === s[r]) {
                if(r - l + 1 > resLen) {
                    resLen = r - l + 1;
                    resIdx = [l, r];
                }
                l--;
                r++;
            }
        }

        return s.substring(resIdx[0], resIdx[1] + 1);
    }
}
