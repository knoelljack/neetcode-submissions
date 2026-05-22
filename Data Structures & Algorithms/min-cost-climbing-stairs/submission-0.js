class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let one = cost[0];
        let two = cost[1];

        for(let i=2; i < cost.length; i++) {
            const current = cost[i] + Math.min(one, two);
            one = two;
            two = current;
        }

        return Math.min(one, two);
    }
}
