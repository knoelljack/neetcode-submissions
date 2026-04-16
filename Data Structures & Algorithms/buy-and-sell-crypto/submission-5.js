class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let prof = 0;
        let buy = 0;
        for(let sell = 1; sell < prices.length; sell++) {
            if(prices[sell] < prices[buy]) buy = sell;
            else {
                prof = Math.max(prof, prices[sell] - prices[buy]);
            }
        }

        return prof;
    }
}
