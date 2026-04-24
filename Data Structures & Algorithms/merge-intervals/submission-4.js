class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b) => a[0] - b[0]);
        const res = [];

        let curr = intervals[0];

        for(let i=1; i < intervals.length; i++) {
            if(intervals[i][0] > curr[1]) {
                res.push(curr);
                curr = intervals[i];
            } else {
                curr[0] = Math.min(curr[0], intervals[i][0]);
                curr[1] = Math.max(curr[1], intervals[i][1]);
            }
        }

        res.push(curr);

        return res;
    }
}
