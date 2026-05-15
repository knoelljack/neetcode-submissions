class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let lo = 0;
        let hi = numbers.length - 1;

        while(lo < hi) {
            const sum = numbers[lo] + numbers[hi];
            if(sum === target) return [lo+1, hi+1];
            if(sum > target) hi--;
            if(sum < target) lo++;
        }

        return [-1,-1];
    }
}
