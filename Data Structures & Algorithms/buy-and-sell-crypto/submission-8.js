class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let buy = prices[0];

        for(let i=1; i < prices.length; i++) {
            if(prices[i] < buy) buy = prices[i];
            const profit = prices[i] - buy;
            max = Math.max(max, profit);
        }

        return max;
    }
}
