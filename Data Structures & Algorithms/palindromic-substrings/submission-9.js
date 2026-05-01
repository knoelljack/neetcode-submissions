class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;

        for(let i=0; i < s.length; i++) {
            count += this.check(i, i, s);
            count += this.check(i, i+1, s);
        }

        return count;
    }

    check(l, r, s) {
        let count = 0;

        while(l >= 0 && s[l] === s[r]) {
            count++;
            l--;
            r++;
        }

        return count;
    }
}
