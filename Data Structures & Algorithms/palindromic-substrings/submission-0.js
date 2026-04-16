class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;

        for(let i=0; i < s.length; i++) {
            count += this.checkPalindrome(s, i, i);
            count += this.checkPalindrome(s, i, i + 1);
        }

        return count;
    }

    checkPalindrome(s, l, r) {
        let res = 0;
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            res++;
            l--;
            r++;
        }

        return res;
    }
}
