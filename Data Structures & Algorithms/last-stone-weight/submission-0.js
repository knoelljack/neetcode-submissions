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
            else if(stone1 > stone2) maxHeap.enqueue(stone1 - stone2);
            else if(stone2 > stone1) maxHeap.enqueue(stone2 - stone1);
        }

        return maxHeap.front() ?? 0;
    }
}
