class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
        return s === s.split("").reverse().join("");
    }
}
