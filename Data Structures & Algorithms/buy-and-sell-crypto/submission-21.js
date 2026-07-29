class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0];
        let max = 0;

        for(let i=1; i < prices.length; i++) {
            const sell = prices[i];
            if(sell < buy) buy = sell;
            else {
                max = Math.max(max, sell - buy);
            }
        }

        return max;
    }
}
