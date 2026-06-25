class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxHeap = new MaxPriorityQueue();

        for(let num of nums) {
            maxHeap.enqueue(num);
        }

        for(let i=0; i < k - 1; i++) {
            maxHeap.dequeue();
        }

        return maxHeap.front();
    }
}
