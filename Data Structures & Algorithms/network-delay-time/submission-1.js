class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const graph = {};

        for(let i=1; i <= n; i++) {
            graph[i] = [];
        }

        for(let [u, v, w] of times) {
            graph[u].push([v, w]);
        }

        const minHeap = new MinPriorityQueue((item) => item[0]);

        minHeap.enqueue([0, k]);
        
        const visited = new Set();
        let maxTime = 0;

        while(!minHeap.isEmpty()) {
            const [time, node] = minHeap.dequeue();

            if(visited.has(node)) continue;

            visited.add(node);
            maxTime = Math.max(maxTime, time);

            for(let [nei, weight] of graph[node]) {
                if(!visited.has(nei)) {
                    minHeap.enqueue([time + weight, nei]);
                }
            }
        }

        return visited.size === n ? maxTime : -1;
    }
}
