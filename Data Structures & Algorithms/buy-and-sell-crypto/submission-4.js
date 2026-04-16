class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
        let buy = 0;

        for(let sell = 1; sell < prices.length; sell++) {
            if(prices[sell] > prices[buy]) {
                res = Math.max(res, prices[sell] - prices[buy]);
            } else {
                buy = sell;
            }
        }
        return res;
    }
}
