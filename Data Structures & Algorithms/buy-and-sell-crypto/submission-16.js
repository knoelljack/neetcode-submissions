class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let buy = prices[0];

        for(let i=1; i < prices.length; i++) {
            let sell = prices[i];
            if(sell < buy) buy = sell;
            else max = Math.max(max, sell - buy);
        }

        return max;
    }
}
