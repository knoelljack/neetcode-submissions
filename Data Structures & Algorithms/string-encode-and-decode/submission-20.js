class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

        for(let str of strs) {
            res += str.length + "$" + str;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i=0;

        while(i < str.length) {
            let j = i;

            while(str[j] !== "$") j++;

            const len = parseInt(str.substring(i, j));
            const s = str.substring(j+1, j + len + 1);

            i = j + len + 1;

            res.push(s);
        }

        return res;
    }
}
