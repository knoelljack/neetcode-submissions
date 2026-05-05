class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b) => a[0] - b[0]);
        const res = [];
        let [currStart, currEnd] = intervals[0];

        for(let i=1; i < intervals.length; i++) {
            const [start,end] = intervals[i];
            if(start > currEnd) {
                res.push([currStart, currEnd]);
                [currStart,currEnd] = intervals[i];
            } else {
                currEnd = Math.max(currEnd, end);
            }
        }

        res.push([currStart,currEnd]);

        return res;
        
    }
}
