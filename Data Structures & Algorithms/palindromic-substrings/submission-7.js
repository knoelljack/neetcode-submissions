class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;

        for(let i=0; i < s.length; i++) {
            res += this.checkPali(s, i, i);
            res += this.checkPali(s, i, i+1);
        }

        return res;
    }

    checkPali(s, l, r) {
        let count = 0;

        while(l >= 0 && r < s.length && s[l] === s[r]) {
            count++;
            l--;
            r++;
        }

        return count;
    }
}
