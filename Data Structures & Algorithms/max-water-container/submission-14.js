class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length - 1;
        let max = 0;

        while(l < r) {
            const area = Math.min(heights[l], heights[r]) * (r - l);
            max = Math.max(area, max);
            if(heights[r] < heights[l]) r--;
            else l++;
        }

        return max;
    }
}
