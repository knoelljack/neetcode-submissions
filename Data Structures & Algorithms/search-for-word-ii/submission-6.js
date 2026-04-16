class TrieNode {
    constructor() {
        this.children = {};
        this.word = null;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const root = new TrieNode();

        for(let w of words) {
            let node = root;
            for(let c of w) {
                if(!(c in node.children)) {
                    node.children[c] = new TrieNode();
                }
                node = node.children[c];
            }
            node.word = w;
        }

        const res = [];

        const dfs = (r, c, node) => {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS) return;
            const letter = board[r][c];
            const currNode = node.children[letter];
            if(!currNode) return;
            if(currNode.word) {
                res.push(currNode.word);
                currNode.word = null;
            }
            board[r][c] = '#';
            dfs(r+1, c, currNode);
            dfs(r-1, c, currNode);
            dfs(r, c+1, currNode);
            dfs(r, c-1, currNode);
            board[r][c] = letter;
        }

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                if(root.children[board[r][c]]) {
                    dfs(r, c, root);
                }
            }
        }

        return res;
    }
}
