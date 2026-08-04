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
        let node = this.root;

        for(let char of word) {
            if(!(char in node.children)) node.children[char] = new TrieNode();
            node = node.children[char];
        }

        node.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root;

        for(let char of word) {
            if(!(char in node.children)) return false;
            node = node.children[char];
        }

        return node.word;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;

        for(let char of prefix) {
            if(!(char in node.children)) return false;
            node = node.children[char];
        }

        return true;
    }
}
