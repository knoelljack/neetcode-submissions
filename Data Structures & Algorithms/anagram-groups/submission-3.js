class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};

        for(const s of strs) {
            const counts = new Array(26).fill(0);
            for(const char of s) {
                counts[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            if(res[counts]) {
                res[counts].push(s);
            } else {
                res[counts] = [s];
            }
        }

        return Object.values(res);
    }
}
