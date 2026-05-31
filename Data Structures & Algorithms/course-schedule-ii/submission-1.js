class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const crsMap = {};
        const visited = new Set();
        const visiting = new Set();
        const res = [];

        for(let i=0; i < numCourses; i++) {
            crsMap[i] = [];
        }

        for(let [crs, pre] of prerequisites) {
            crsMap[crs].push(pre);
        }

        function dfs(crs) {
            if(visiting.has(crs)) return false;
            if(visited.has(crs)) return true;

            visiting.add(crs);

            for(let pre of crsMap[crs]) {
                if(!dfs(pre)) return false;
            }

            visited.add(crs);
            visiting.delete(crs);
            res.push(crs);

            return true
        }

        for(let i=0; i < numCourses; i++) {
            if(!dfs(i)) return [];
        }

        return res;
    }
}
