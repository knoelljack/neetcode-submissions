class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = {};
        const maxHeap = new MaxPriorityQueue((item) => item[1]);
        const res = [];

        for(let num of nums) {
            counts[num] = (counts[num] || 0) + 1;
        }

        for(let [num,cnt] of Object.entries(counts)) {
            maxHeap.enqueue([num, cnt]);
        }

        for(let i=0; i < k; i++) {
            res.push(maxHeap.dequeue()[0]);
        }
        
        return res;
    }
}
