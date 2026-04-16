class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0;
        let buy = prices[0];

        for(let i = 1; i < prices.length; i++) {
            const sell = prices[i];
            if(sell > buy) maxP = Math.max(maxP, sell - buy);
            else buy = sell;
        }

        return maxP;
    }
}
