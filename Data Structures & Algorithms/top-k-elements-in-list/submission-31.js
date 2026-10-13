class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res = [];
        const counts = Array.from({length: nums.length + 1}, () => []);
        const freqs = {};

        for(const num of nums) {
            freqs[num] = (freqs[num] || 0) + 1;
        }

        for(const [num, cnt] of Object.entries(freqs)) {
            counts[cnt].push(num);
        }

        for(let i=counts.length-1; i >= 0; i--) {
            res.push(...counts[i]);
            if(res.length === k) break;
        }

        return res;
    }
}
