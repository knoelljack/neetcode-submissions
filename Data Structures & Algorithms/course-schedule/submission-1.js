class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let courseMap = {};
        let visited = new Set();
        for(let i=0; i < numCourses; i++) {
            courseMap[i] = [];
        }
        for(let [crs, pre] of prerequisites) {
            courseMap[crs].push(pre);
        }

        const check = (crs) => {
            if(visited.has(crs)) return false;
            if(courseMap[crs] == []) return true;
            visited.add(crs);
            for(let pre of courseMap[crs]) {
                if(!check(pre)) return false;
            }
            visited.delete(crs);
            courseMap[crs] = [];
            return true;
        }

        for(let [crs, _] of prerequisites) {
            if(!check(crs)) return false;
        }
        return true;
    }
}
