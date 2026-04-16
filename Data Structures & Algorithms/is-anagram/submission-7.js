class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let chars = {};
        for(let char of s) {
            chars[char] = (chars[char] || 0) + 1;
        }
        for(let char of t) {
            if(!chars[char] || chars[char] === 0) return false;
            chars[char]--;
        }
        return true;
    }
}
