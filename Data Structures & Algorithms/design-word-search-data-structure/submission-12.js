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

        function dfs(idx, node) {
            let curr = node;

            for(let i=idx; i < word.length; i++) {
                const char = word[i];
                if(char === ".") {
                    for(let child of Object.values(curr.children)) {
                        if(dfs(i + 1, child)) return true; 
                    }
                    return false;
                } else {
                    if(!(char in curr.children)) return false;
                    curr = curr.children[char];
                }
            }

            return curr.word;
        }

        return dfs(0, this.root);
    }
}
