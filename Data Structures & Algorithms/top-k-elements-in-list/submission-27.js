class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res = [];
        const freqs = {};
        const counts = Array.from({length: nums.length + 1}, () => []);

        for(let num of nums) {
            freqs[num] = (freqs[num] || 0) + 1;
        }

        for(let [num,cnt] of Object.entries(freqs)) {
            counts[cnt].push(num);
        }

        for(let i=counts.length - 1; i >= 0 && res.length < k; i--) {
            res.push(...counts[i]);
            if(res.length === k) break;
        }

        return res;
    }
}
