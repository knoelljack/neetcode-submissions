class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const counts = {};

        for(let task of tasks) {
            counts[task] = (counts[task] || 0) + 1;
        }

        const maxHeap = new MaxPriorityQueue()

        for(const count of Object.values(counts)) {
            maxHeap.enqueue(count);
        }

        const cooldown = [];
        let time = 0;

        while(!maxHeap.isEmpty() || cooldown.length) {
            time++;

            if(!maxHeap.isEmpty()) {
                let count = maxHeap.dequeue();
                count--;

                if(count > 0) {
                    cooldown.push([count, time + n]);
                }
            }

            if(cooldown.length && cooldown[0][1] === time) maxHeap.enqueue(cooldown.shift()[0]);
        }

        return time;
    }
}
