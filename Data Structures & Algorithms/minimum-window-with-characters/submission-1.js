class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let needed = {};
        for(let char of t) {
            needed[char] = (needed[char] || 0) + 1;
        }

        let have = 0;
        let need = Object.keys(needed).length;
        let resLen = Infinity;
        let resIdx = [-1,-1];
        let l = 0;
        let window = {};

        for(let r = 0; r < s.length; r++) {
            let c = s[r];
            window[s[r]] = (window[s[r]] || 0) + 1;
            if(c in needed && window[c] === needed[c]) have++;
            while(have === need) {
                if((r - l + 1) < resLen) {
                    resLen = r - l + 1;
                    resIdx = [l, r];
                }
                window[s[l]]--;
                if(needed[s[l]] && window[s[l]] < needed[s[l]]) have--;
                l++;
            }
        }

        return resLen === Infinity ? "" : s.substring(resIdx[0], resIdx[1] + 1)
    }
}
