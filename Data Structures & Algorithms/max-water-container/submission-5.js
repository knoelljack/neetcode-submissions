class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let l = 0, r = heights.length - 1;

        while(l < r) {
            const area = (r - l) * Math.min(heights[l], heights[r]);
            max = Math.max(max, area);
            if(heights[l] <= heights[r]) l++;
            else r--;
        }

        return max;
    }
}
