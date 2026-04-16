class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        s = s.toLowerCase();
        t = t.toLowerCase();
        const counts = {};

        for(let char of s) {
            counts[char] = (counts[char] || 0) + 1;
        }

        for(let char of t) {
            if(!(char in counts) || counts[char] === 0) return false;
            counts[char]--;
        }

        return Object.values(counts).filter((num) => num !== 0).length === 0;
    }
}
