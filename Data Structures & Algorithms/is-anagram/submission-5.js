class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        
        let counts = {};
        for(let char of s) {
            counts[char] = (counts[char] || 0) + 1;
        }
        for(let char of t) {
            if(!counts[char] || counts[char] == 0) return false;
            counts[char]--;
        }
        return true;
    }
}
