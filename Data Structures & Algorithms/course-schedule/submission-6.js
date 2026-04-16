class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const crsMap = {};
        const visited = new Set();

        for(let crs=0; crs < numCourses; crs++) {
            crsMap[crs] = [];
        }
        for(let [crs,pre] of prerequisites) {
            crsMap[crs].push(pre);
        }

        const check = (crs) => {
            if(visited.has(crs)) return false;
            if(crsMap[crs] === []) return true;
            visited.add(crs);
            for(let pre of crsMap[crs]) {
                if(!check(pre)) return false;
            }
            visited.delete(crs);
            crsMap[crs] = [];
            return true;
        }

        for(let i=0; i < numCourses; i++) {
            if(!check(i)) return false;
        }
        return true;
    }
}
