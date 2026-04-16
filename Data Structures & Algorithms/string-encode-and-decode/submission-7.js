class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for(let s of strs) {
            encoded += s.length + "$" + s;
        }
        return encoded;
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
            const len = parseInt(str.substring(i, j+1));
            res.push(str.substring(j+1, j + len + 1));
            i = j + len + 1;
        }

        return res;
    }
}
