class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let res = 0;
        let lo = 0, hi = Math.max(...piles);

        while(lo <= hi) {
            const k = Math.floor((lo + hi) / 2);

            let hours = 0;

            for(let pile of piles) {
                hours += Math.ceil(pile / k);
            }

            if(hours <= h) {
                res = k;
                hi = k - 1;
            } else {
                lo = k + 1;
            }
        }

        return res;
    }
}
