class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for(let str of strs) {
            encoded += str.length + "$" + str;
        }

        return encoded;
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
