class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for(let s of strs) {
            let counts = new Array(26).fill(0);
            for(let char of s) {
                counts[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            if(!res[counts]) res[counts] = [];
            res[counts].push(s);
        }
        return [...Object.values(res)];
    }
}
