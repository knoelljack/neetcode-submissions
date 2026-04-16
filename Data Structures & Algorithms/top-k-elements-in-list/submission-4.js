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

        for(let n of nums) {
            counts[n] = (counts[n] || 0) + 1;
        }
        for(let [num,cnt] of Object.entries(counts)) {
            buckets[cnt].push(num);
        }

        for(let i = buckets.length - 1; i >= 0; i--) {
            if(res.length === k) break;
            for(let n of buckets[i]) res.push(n);
        }

        return res;
    }
}
