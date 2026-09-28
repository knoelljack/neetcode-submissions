class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b) => a[0] - b[0]);

        let removed = 0;
        let curr = intervals[0];

        for(let i=1; i < intervals.length; i++) {
            const [start, end] = intervals[i];

            if(start >= curr[1]) {
                curr = intervals[i];
            } else {
                removed++;
                curr[1] = Math.min(curr[1], end);
            }
        }

        return removed;
    }
}
