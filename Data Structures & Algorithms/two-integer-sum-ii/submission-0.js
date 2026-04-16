class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let low = 0;
        let hi = numbers.length - 1;

        while(low < hi) {
            const sum = numbers[low] + numbers[hi];
            if(sum === target) return [low+1, hi+1];
            else if(sum < target) low++;
            else if(sum > target) hi--;
        }
    }
}
