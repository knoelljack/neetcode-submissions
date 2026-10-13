class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for(let str of strs) {
            const counts = new Array(26).fill(0);

            for(let char of str) {
                const bucket = char.charCodeAt(0) - "a".charCodeAt(0);
                counts[bucket]++;
            }

            if(!groups[counts]) groups[counts] = [];
            groups[counts].push(str);
        }

        return Object.values(groups);
    }
}
