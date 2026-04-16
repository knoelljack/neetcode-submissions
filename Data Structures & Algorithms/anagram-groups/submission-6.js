class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for(let str of strs) {
            let counts = new Array(26).fill(0);
            for(let c of str) {
                counts[c.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }
            if(!groups[counts]) groups[counts] = [];
            groups[counts].push(str);
        }
        return [...Object.values(groups)]
    }
}
