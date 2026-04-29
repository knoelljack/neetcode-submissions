class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

        for(let s of strs) {
            res += s.length + "$" + s;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];

        let l = 0;

        while(l < str.length) {
            let r = l;
            while(str[r] !== "$") r++;
            const len = parseInt(str.substring(l, r));
            const s = str.substring(r + 1, r + len + 1);
            res.push(s);
            l = r + len + 1;
        }

        return res;
    }
}
