class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        s = s.toLowerCase();
        t = t.toLowerCase();
        const chars = {};
        for(let char of s) {
            chars[char] = (chars[char] || 0) + 1;
        }
        for(let char of t) {
            if(!chars[char] || chars[char] === 0) return false;
            chars[char]--;
        }

        for(let count of Object.values(chars)) {
            if(count > 0) return false;
        }

        return true;
    }
}
