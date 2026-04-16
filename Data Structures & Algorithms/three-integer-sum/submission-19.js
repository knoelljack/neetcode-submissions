class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        const triplets = [];

        for(let i=0; i < nums.length - 2; i++) {
            if(nums[i] === nums[i-1]) continue;
            let j = i+1;
            let k = nums.length - 1;

            while(j < k) {
                const sum = nums[i] + nums[j] + nums[k];
                if(sum < 0) j++;
                else if(sum > 0) k--;
                else {
                    triplets.push([nums[i], nums[j], nums[k]]);
                    j++;
                    while(nums[j] == nums[j-1]) j++;
                    k--;
                    while(nums[k] == nums[k+1]) k--;
                }
            }
        }

        return triplets;
    }
}
