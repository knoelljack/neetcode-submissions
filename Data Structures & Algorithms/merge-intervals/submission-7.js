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
            const [start, end] = intervals[i];

            if(start <= curr[1]) {
                curr[1] = Math.max(curr[1], end);
            } else {
                res.push(curr);
                curr = intervals[i];
            }
        }

        res.push(curr);

        return res;
    }
}
