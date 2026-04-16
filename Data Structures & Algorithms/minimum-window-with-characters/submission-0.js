class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let counts = {};
        let window = {};
        for(let char of t) {
            counts[char] = (counts[char] || 0) + 1;
        }

        let have = 0;
        let need = Object.keys(counts).length;
        let resLength = Infinity;
        let res = [-1,-1];
        let l = 0;

        for(let r = 0; r < s.length; r++) {
            let c = s[r];
            window[c] = (window[c] || 0) + 1;

            if(c in counts && window[c] === counts[c]) {
                have++;
            }

            while(have === need) {
                if((r - l + 1) < resLength) {
                    resLength = r - l + 1;
                    res = [l, r];
                }

                window[s[l]]--;
                if(counts[s[l]] && window[s[l]] < counts[s[l]]) have--;
                l++;
            }
        }

        return resLength === Infinity ? "" : s.slice(res[0],res[1] + 1);
    }
}
