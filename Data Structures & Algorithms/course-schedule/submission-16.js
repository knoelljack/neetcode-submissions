class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const visited = new Set();
        const crsMap = {};

        for(let i=0; i < numCourses; i++) {
            crsMap[i] = [];
        }

        for(let [crs, pre] of prerequisites) {
            crsMap[crs].push(pre);
        }

        function dfs(crs) {
            if(visited.has(crs)) return false;
            if(crsMap[crs] === []) return true;
            visited.add(crs);

            for(let pre of crsMap[crs]) {
                if(!dfs(pre)) return false;
            }

            visited.delete(crs);
            crsMap[crs] = [];
            return true;
        }

        for(let i=0; i < numCourses; i++) {
            if(!dfs(i)) return false;
        }

        return true;
    }
}
