class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let l = 0;
        for(let r = 1; r < prices.length; r++) {
            if(prices[r] > prices[l]) {
                let profit = prices[r] - prices[l];
                max = Math.max(max, profit);
            } else {
                l = r;
            }
        }
        return max;
    }
}
