class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;

        function check(l, r) {
            let res = 0;

            while(l >= 0 && s[l] === s[r]) {
                res++;
                l--;
                r++;
            }

            return res;
        }

        for(let i=0; i < s.length; i++) {
            count += check(i, i);
            count += check(i, i+1);
        }

        return count;
    }
}
