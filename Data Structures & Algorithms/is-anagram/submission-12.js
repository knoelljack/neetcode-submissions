class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        s = s.toLowerCase();
        t = t.toLowerCase();
        let chars = {};

        for(let char of s) {
            chars[char] = (chars[char] || 0) + 1;
        }
        for(let char of t) {
            if(!chars[char] || chars[char] === 0) return false;
            chars[char]--;
        }

        for(let val of Object.values(chars)) {
            if(val > 0) return false;
        }

        return true;
    }
}
