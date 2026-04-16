class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        let res = [];

        for(let i=0; i < nums.length - 2; i++) {
            if(i > 0 && nums[i] === nums[i-1]) continue;
            let j = i+1;
            let k = nums.length - 1;
            while(j < k) {
                let sum = nums[i] + nums[j] + nums[k];
                if(sum > 0) k--;
                else if(sum < 0) j++;
                else {
                    res.push([nums[i], nums[j], nums[k]]);
                    while(j < k && nums[j + 1] === nums[j]) j++;
                    while(j < k && nums[k - 1] === nums[k]) k--;
                    j++;
                    k--;
                }
            }
        }

        return res;
    }
}
