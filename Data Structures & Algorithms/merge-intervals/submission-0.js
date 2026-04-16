class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if(intervals.length === 0) return [];
        intervals.sort((a,b) => a[0] - b[0]);
        let merged = [];

        let current = intervals[0];
        for(let i=1; i < intervals.length; i++) {
            let [start, end] = intervals[i];
            if(start <= current[1]) {
                current[1] = Math.max(current[1], end);
            } else {
                merged.push(current);
                current = intervals[i];
            }
        }

        merged.push(current);

        return merged;
    }
}
