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
        let i = 0;

        while(i < str.length) {
            let j = i;
            while(str[j] !== "$") j++;
            const length = parseInt(str.substring(i, j));
            const decoded = str.slice(j+1, j + length + 1);
            res.push(decoded);
            i = j + length + 1;
        }

        return res;
    }
}
