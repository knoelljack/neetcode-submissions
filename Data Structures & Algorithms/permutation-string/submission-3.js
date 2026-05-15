class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const needed = {};
        const window = {};

        for(let char of s1) {
            needed[char] = (needed[char] || 0) + 1;
        }

        let l = 0, r = 0;
        let have = 0, need = Object.entries(needed).length;

        while(r < s2.length) {
            window[s2[r]] = (window[s2[r]] || 0) + 1;
            if(s2[r] in needed && window[s2[r]] === needed[s2[r]]) have++;

            if((r - l + 1) > s1.length) {
                if(s2[l] in needed && window[s2[l]] === needed[s2[l]]) have--;
                window[s2[l]]--;
                l++;
            }

            if(have === need) return true;
            r++;
        }

        return false;
    }
}
