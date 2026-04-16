class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counts = {};
        for(let n of nums) {
            counts[n] = (counts[n] || 0) + 1;
        }
        let buckets = Array.from({length: nums.length + 1}, () => []);

        for(let [num, cnt] of Object.entries(counts)) {
            buckets[cnt].push(num);
        }
        let res = [];

        for(let i = buckets.length - 1; i >= 0; i--) {
            if(res.length == k) break;
            for(const num of buckets[i]) {
                res.push(num);
                if(res.length == k) break;
            }
        }

        return res;
    }
}
