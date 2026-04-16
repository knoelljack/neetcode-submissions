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
        let res = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while(str[j] !== "$") {
                j++;
            }
            const length = parseInt(str.substring(i,j));
            const s = str.slice(j + 1, j + 1 + length);
            res.push(s);
            i = j + 1 + length;
        }
        return res;
    }
}
