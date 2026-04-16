class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let needed = {};
        for(const char of t) {
            needed[char] = (needed[char] || 0) + 1;
        }
        const need = Object.entries(needed).length;
        let have = 0;
        let resIdx = [-1, -1];
        let resLen = Infinity;
        let l = 0;
        const window = {};

        for(let r=0; r < s.length; r++)  {
            const rightChar = s[r];
            window[rightChar] = (window[rightChar] || 0) + 1;
            if(rightChar in needed && window[rightChar] === needed[rightChar]) have++;
            while(have === need) {
                const len = r - l + 1;
                if(len < resLen) {
                    resIdx = [l, r];
                    resLen = len;
                }
                const leftChar = s[l];
                window[leftChar]--;
                if(leftChar in needed && window[leftChar] < needed[leftChar]) have--;
                l++;
            }
        }

        return resLen === Infinity ? "" : s.substring(resIdx[0], resIdx[1] + 1);
    }
}
