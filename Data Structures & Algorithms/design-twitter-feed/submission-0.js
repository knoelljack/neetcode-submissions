class Twitter {
    constructor() {
        this.time = 0;

        this.followMap = new Map();
        this.tweetMap = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if(!this.tweetMap.has(userId)) {
            this.tweetMap.set(userId, []);
        }

        this.tweetMap.get(userId).push([this.time, tweetId]);
        this.time++;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const res = [];

        const maxHeap = new MaxPriorityQueue((item) => item[0]);

        const followees = new Set(this.followMap.get(userId) || []);

        followees.add(userId);

        for(const followeeId of followees) {
            const tweets = this.tweetMap.get(followeeId);

            if(tweets && tweets.length > 0) {
                const index = tweets.length - 1;
                const [time, tweetId] = tweets[index];

                maxHeap.enqueue([time, tweetId, followeeId, index - 1]);
            }
        }

        while(!maxHeap.isEmpty() && res.length < 10) {
            const [
                time,
                tweetId,
                followeeId,
                nextIndex
            ] = maxHeap.dequeue();

            res.push(tweetId);

            if(nextIndex >= 0) {
                const tweets = this.tweetMap.get(followeeId);
                const [nextTime, nextTweetId] = tweets[nextIndex];

                maxHeap.enqueue([
                    nextTime,
                    nextTweetId,
                    followeeId,
                    nextIndex - 1
                ]);
            }
        }

        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(!this.followMap.has(followerId)) {
            this.followMap.set(followerId, new Set());
        }

        this.followMap.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }
}
