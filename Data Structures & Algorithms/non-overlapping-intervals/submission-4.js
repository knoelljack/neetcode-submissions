class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b) => a[0] - b[0]);
        let removed = 0;
        let prevEnd = intervals[0][1];

        for(let i=1; i < intervals.length; i++) {
            let [start, end] = intervals[i];

            if(start < prevEnd) {
                prevEnd = Math.min(end, prevEnd);
                removed++;
            } else {
                prevEnd = end;
            }
        }

        return removed;
    }
}
