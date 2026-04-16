class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let res = 0;

        while(l < r) {
            const area = (r - l) * Math.min(heights[l],heights[r]);
            res = Math.max(res, area);
            if(heights[r] <= heights[l]) r--;
            else l++;
        }
        return res;
    }
}
