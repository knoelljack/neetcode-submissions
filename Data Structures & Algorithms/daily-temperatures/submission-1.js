class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = [];

        for(let i=0; i < temperatures.length; i++) {
            while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const prevIdx = stack.pop();
                res[prevIdx] = i - prevIdx;
            }
            stack.push(i);
        }

        return res;
    }
}
