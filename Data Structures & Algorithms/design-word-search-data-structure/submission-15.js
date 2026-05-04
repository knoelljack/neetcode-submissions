class TrieNode {
    constructor() {
        this.children = {};
        this.word = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;

        for(let char of word) {
            if(!curr.children[char]) curr.children[char] = new TrieNode();
            curr = curr.children[char];
        }

        curr.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(node, idx) {
            let curr = node;

            for(let i=idx; i < word.length; i++) {
                if(word[i] === ".") {
                    for(let child of Object.values(curr.children)) {
                        if(dfs(child, i+1)) return true;
                    }
                    return false;
                } else {
                    if(!curr.children[word[i]]) return false;
                    curr = curr.children[word[i]];
                }
            }
            return curr.word;
        }

        return dfs(this.root, 0);
    }
}
