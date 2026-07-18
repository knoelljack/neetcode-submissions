class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();

        for(let stone of stones) {
            maxHeap.enqueue(stone);
        }

        while(maxHeap.size() > 1) {
            const stone1 = maxHeap.dequeue();
            const stone2 = maxHeap.dequeue();

            if(stone1 === stone2) continue;
            const newStone = Math.abs(stone1 - stone2);
            maxHeap.enqueue(newStone);
        }

        return maxHeap.size() ? maxHeap.front() : 0;
    }
}
