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

        let res = [-1,-1];
        let resLen = Infinity;
        let need = Object.keys(needed).length;
        let have = 0;
        let l = 0;
        let window = {};

        for(let r = 0; r < s.length; r++) {
            let c = s[r];
            window[c] = (window[c] || 0) + 1;
            if(c in needed && window[c] === needed[c]) have++;
            while(have === need) {
                if((r - l + 1) < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }
                let leftChar = s[l];
                window[leftChar]--;
                if(leftChar in needed && window[leftChar] < needed[leftChar]) have--;
                l++;
            }
        }

        return resLen === Infinity ? "" : s.substring(res[0], res[1] + 1);

    }
}
