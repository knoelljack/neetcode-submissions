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
        for(let c of word) {
            if(!(c in curr.children)) curr.children[c] = new TrieNode();
            curr = curr.children[c];
        }
        curr.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (word, idx, root) => {
            let curr = root;
            for(let i=idx; i < word.length; i++) {
                const c = word[i];
                if(c === ".") {
                    for(let child of [...Object.values(curr.children)]) {
                        if(child && dfs(word, i + 1, child)) return true;
                    }
                    return false;
                } else {
                    if(!(c in curr.children)) return false;
                    curr = curr.children[c];
                }
            }

            return curr.word;
        }

        return dfs(word, 0, this.root);
    }
}
