class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;
        for(let i=0; i < s.length; i++) {
            res += this.checkPali(i, i, s);
            res += this.checkPali(i, i+1, s);
        }
        return res;
    }

    checkPali(l, r, s){
        let res = 0;
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            res++;
            r++;
            l--;
        }
        return res;
    }

}
