class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for(let str of strs) {
            const buckets = new Array(26).fill(0);
            for(let char of str) {
                const bucket = char.charCodeAt(0) - "a".charCodeAt(0);
                buckets[bucket]++;
            }
            if(!map[buckets]) map[buckets] = [];
            map[buckets].push(str);
        }

        return Object.values(map);
    }
}
