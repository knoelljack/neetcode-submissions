class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};

        for(let s of strs) {
            let count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
            }
            let key = count.toString();
            if(!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }

        return Object.values(res);
    }
}
