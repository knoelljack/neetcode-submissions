class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b) => a[0] - b[0]);
        let res = [];
        let curr = intervals[0];

        for(let i=1; i < intervals.length; i++) {
            let [start, end] = intervals[i];

            if(start <= curr[1]) {
                curr[1] = Math.max(end, curr[1]);
            } else {
                res.push(curr);
                curr = intervals[i];
            }
        }

        res.push(curr);

        return res;
    }
}
