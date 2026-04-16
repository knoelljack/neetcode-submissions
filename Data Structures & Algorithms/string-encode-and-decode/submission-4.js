class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(const s of strs) {
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
        let i = 0;
        while(i < str.length) {
            let j = i;
            while(str[j] !== "$") j++;
            const length = parseInt(str.substring(i, j));
            res.push(str.substring(j+1, j + length + 1));
            i = j + length + 1;
        }
        return res;
    }
}
