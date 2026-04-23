class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resLen = 0;
        let resIdx = [-1, -1];

        function check(l, r) {
            while (l >= 0 && s[l] === s[r]) {
                if (r - l + 1 > resLen) {
                    resLen = r - l + 1;
                    resIdx = [l, r];
                }
                l--;
                r++;
            }
        }

        for (let i = 0; i < s.length; i++) {
            let l = i,
                r = i;

                check(l, r);

            l = i, r = i + 1;

                check(l, r);
        }

        return s.substring(resIdx[0], resIdx[1] + 1);
    }
}
