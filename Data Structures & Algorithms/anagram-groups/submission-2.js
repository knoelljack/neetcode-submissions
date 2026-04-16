class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for(let s of strs) {
            let counts = new Array(26).fill(0);
            for(let c of s) {
                counts[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            const key = counts.toString();
            if(res[key]) {
                res[key].push(s);
            } else {
                res[key] = [s];
            }
        }

        return Object.values(res);
    }
}
