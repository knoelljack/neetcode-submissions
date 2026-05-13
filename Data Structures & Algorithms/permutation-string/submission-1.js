class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const needed = {};

        for(let char of s1) {
            needed[char] = (needed[char] || 0) + 1;
        }

        const window = {};
        const need = Object.entries(needed).length;
        let have = 0;

        let l = 0;

        for(let r = 0; r < s2.length; r++) {
            const rightChar = s2[r];

            window[rightChar] = (window[rightChar] || 0) + 1;

            if(rightChar in needed && window[rightChar] === needed[rightChar]) have++;

            if((r - l + 1) > s1.length) {
                const leftChar = s2[l];
                if(leftChar in needed && window[leftChar] === needed[leftChar]) have--;
                window[leftChar]--;
                l++;
            }

            if(have === need) return true;
        }

        return false;
    }
}
