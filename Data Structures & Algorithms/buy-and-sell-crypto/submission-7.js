class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let buy = prices[0];

        for(let i=1; i < prices.length; i++) {
            const sell = prices[i];
            if(sell < buy) buy = sell;
            profit = Math.max(profit, sell - buy);
        }

        return profit;
    }
}
