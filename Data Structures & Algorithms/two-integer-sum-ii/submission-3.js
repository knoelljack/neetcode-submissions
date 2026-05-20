class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let lo = 0, hi = numbers.length - 1;

        while(lo < hi) {
            const sum = numbers[lo] + numbers[hi];

            if(sum === target) return [lo+1, hi+1];
            else if(sum > target) hi--;
            else lo ++;
        }

        return [-1,-1];
    }
}
