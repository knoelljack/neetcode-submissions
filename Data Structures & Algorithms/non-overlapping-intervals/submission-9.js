class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b) => a[0] - b[0]);

        let count = 0;
        let curr = intervals[0];

        for(let i=1; i < intervals.length; i++) {
            const [start, end] = intervals[i];

            if(start < curr[1]) {
                count++;
                curr[1] = Math.min(curr[1], end);
            } else {
                curr = intervals[i];
            }
        }

        return count;
    }
}
