class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let counts = {};
        for(const char of s) {
            counts[char] = (counts[char] || 0) + 1;
        }
        for(const char of t) {
            if(!counts[char] || counts[char] === 0) return false;
            else counts[char]--;
        }
        return true;
    }
}
