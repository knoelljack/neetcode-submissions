class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res = [];
        const counts = {};
        const buckets = Array.from({ length: nums.length + 1}, () => []);

        for(let num of nums) {
            counts[num] = (counts[num] || 0) + 1;
        }

        for(let [num, count] of Object.entries(counts)) {
            buckets[count].push(num);
        }

        for(let i=buckets.length - 1; i >= 0; i--) {
            res.push(...buckets[i]);
        }

        return res.slice(0, k);
    }
}
