class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res = [];
        const counts = {};
        const buckets = Array.from({length: nums.length + 1}, () => []);

        for(const n of nums) {
            counts[n] = (counts[n] || 0) + 1;
        }
        for(const [num,cnt] of Object.entries(counts)) {
            buckets[cnt].push(num);
        }
        for(let i=buckets.length - 1; i >= 0; i--) {
            res.push(...buckets[i]);
            if(res.length === k) return res;
        }
    }
}
