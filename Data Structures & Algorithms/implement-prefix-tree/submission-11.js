class TrieNode {
    constructor() {
        this.children = {};
        this.word = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;

        for(let char of word) {
            if(!(char in curr.children)) curr.children[char] = new TrieNode();
            curr = curr.children[char];
        }

        curr.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;

        for(let char of word) {
            if(!(char in curr.children)) return false;
            curr = curr.children[char];
        }

        return curr.word;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;

        for(let char of prefix) {
            if(!(char in curr.children)) return false;
            curr = curr.children[char];
        }

        return true;
    }
}
