class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {

        const res = [];
        const used = new Array(nums.length).fill(false);

        function dfs(curr) {
            if(curr.length === nums.length) {
                res.push([...curr]);
                return;
            }

            for(let i=0; i < nums.length; i++) {
                if(used[i]) continue;
                used[i] = true;

                curr.push(nums[i]);
                dfs(curr);

                curr.pop();
                used[i] = false;
            }
        }

        dfs([]);

        return res;

    }
}
