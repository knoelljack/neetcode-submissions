class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const needed = {};
        for(let char of t) {
            needed[char] = (needed[char] || 0) + 1;
        }
        let have = 0;
        let need = Object.keys(needed).length;
        let res = [-1,-1];
        let resLen = Infinity;
        const window = {};
        let l = 0;

        for(let r = 0; r < s.length; r++) {
            const char = s[r];
            window[char] = (window[char] || 0) + 1;
            if(char in needed && window[char] === needed[char]) have++;
            while(have === need) {
                if(r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }
                const leftChar = s[l];
                window[leftChar]--;
                if(leftChar in needed && window[leftChar] < needed[leftChar]) have--;
                l++;
            }
        }

        return resLen === Infinity ? "" : s.substring(res[0], res[1] + 1);

    }
}
