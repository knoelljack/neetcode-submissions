class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let chars = {};
        for(let c of s) {
            chars[c] = (chars[c] || 0) + 1
        }
        for(let c of t) {
            if(!chars[c] || chars[c] === 0) return false;
            else chars[c]--;
        }
        return true;
    }
}
