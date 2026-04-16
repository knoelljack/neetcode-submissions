class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqs = {};
        for(const n of nums) {
            n in freqs ? freqs[n]++ : freqs[n] = 1;
        }

        const sorted = Object.entries(freqs)
            .sort((a,b) => b[1] - a[1])
            .map((entry) => entry[0])
            .slice(0,k)
        
        return sorted;
    }
}
