class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.get(key)) this.keyStore.set(key, []);
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.get(key)) return "";

        const values = this.keyStore.get(key);

        let lo = 0, hi = this.keyStore.get(key).length - 1;

        while(lo <= hi) {
            const mid = Math.floor((lo + hi) / 2);

            if(values[mid][1] === timestamp) return values[mid][0];
            else if(values[mid][1] > timestamp) hi = mid - 1;
            else lo = mid + 1;
        }

        return hi >= 0 ? values[hi][0] : "";
    }
}
