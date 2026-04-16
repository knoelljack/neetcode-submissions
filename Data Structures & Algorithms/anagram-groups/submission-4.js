class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};

        for(const s of strs) {
            const counts = Array(26).fill(0);
            for(const c of s) {
                counts[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            res[counts] ? res[counts].push(s) : res[counts] = [s];
        }

        return Object.values(res);
    }
}
