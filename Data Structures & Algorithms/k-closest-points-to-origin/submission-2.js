class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const dist = (p) => p[0] * p[0] + p[1] * p[1];
        const minHeap = new MinPriorityQueue(p => dist(p));

        for(let point of points) {
            minHeap.enqueue(point);
        }

        const res = [];

        for(let i=0; i < k; i++) {
            res.push(minHeap.dequeue());
        }

        return res;
    }
}
