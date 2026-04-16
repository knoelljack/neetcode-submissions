class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let front = 0;
        let back = s.length - 1;

        while(front < back) {
            if(!(s[front] == s[back])) return false;
            front++;
            back--;
        }

        return true;
    }
}
