class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = [];

        for(let i=0; i < temperatures.length; i++) {
            let j = i;

            while(j < temperatures.length) {
                if(temperatures[j] > temperatures[i]) {
                    res.push(j - i);
                    break;
                }
                else j++;
            }

            if(j === temperatures.length) res.push(0);
        }

        return res;
    }
}
