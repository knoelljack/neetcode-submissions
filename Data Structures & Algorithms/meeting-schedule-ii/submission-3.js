/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        intervals.sort((a,b) => a.start - b.start);
        let minHeap = new MinPriorityQueue();

        for(let interval of intervals) {
            if(!minHeap.isEmpty() && interval.start >= minHeap.front()) minHeap.pop();
            minHeap.push(interval.end);
        }

        return minHeap.size();
    }
}
