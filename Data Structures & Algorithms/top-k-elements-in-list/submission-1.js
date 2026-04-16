class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqs = {};
        for(const n of nums) {
            freqs[n] = (freqs[n] || 0) + 1;
        }

        let buckets = new Array(nums.length + 1).fill(0).map(() => []);

        for(const [num,freq] of Object.entries(freqs)) {
            buckets[freq].push(Number(num));
        }

        let res = []

        for(let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
            for(const num of buckets[i]) {
                res.push(num);
                if(res.length == k) break;
            }
        }

        return res;
    }
}
