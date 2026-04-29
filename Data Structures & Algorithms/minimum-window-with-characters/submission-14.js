class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let resIdx = [-1, -1];
        let resLen = Infinity;

        const needed = {};
        const window = {};

        for(let char of t) {
            needed[char] = (needed[char] || 0) + 1;
        }

        const need = Object.entries(needed).length;
        let have = 0;

        let l = 0, r = 0;

        while(r < s.length) {
            const rightChar = s[r];
            window[rightChar] = (window[rightChar] || 0) + 1;
            if(rightChar in needed && window[rightChar] === needed[rightChar]) have++;

            while(have === need) {
                if(r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    resIdx = [l, r];
                }
                const leftChar = s[l];
                window[leftChar]--;
                if(leftChar in needed && window[leftChar] < needed[leftChar]) have--;
                l++;
            }

            r++;
        }

        return resLen === Infinity ? "" : s.substring(resIdx[0], resIdx[1] + 1);
    }
}
