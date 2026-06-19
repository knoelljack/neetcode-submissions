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

        let l = 0 , r = 0;
        let have = 0, need = Object.entries(needed).length;

        while(r < s2.length) {
            const rightChar = s2[r];

            window[rightChar] = (window[rightChar] || 0) + 1;

            if(rightChar in needed && window[rightChar] === needed[rightChar]) have++;

            if(r - l + 1 > s1.length) {
                const leftChar = s2[l];
                if(leftChar in needed && window[leftChar] === needed[leftChar]) have--;
                window[leftChar]--;
                l++;
            }

            if(have === need) return true;
            r++;
        }

        return false;
    }
}
