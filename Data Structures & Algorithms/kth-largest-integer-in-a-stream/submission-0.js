class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinPriorityQueue();

        for(let num of nums) {
            this.minHeap.enqueue(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        const k = this.k;

        this.minHeap.enqueue(val);

        while(this.minHeap.size() > k) {
            this.minHeap.dequeue();
        }

        return this.minHeap.front();
    }
}
