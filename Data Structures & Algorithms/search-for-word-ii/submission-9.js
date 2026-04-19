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
        const res = [];

        // build prefix trie
        for(let word of words) {
            let curr = root;
            for(let char of word) {
                if(!(char in curr.children)) curr.children[char] = new TrieNode();
                curr = curr.children[char];
            }
            curr.word = word;
        }

        function search(x, y, node) {
            if(x < 0 || y < 0 || x >= ROWS || y >= COLS) return;
            const letter = board[x][y];
            const currNode = node.children[letter];
            if(!currNode) return;
            if(currNode.word) {
                res.push(currNode.word);
                currNode.word = null;
            }
            board[x][y] = "#";
            search(x+1, y, currNode);
            search(x-1, y, currNode);
            search(x, y+1, currNode);
            search(x, y-1, currNode);
            board[x][y] = letter;
        }

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                if(board[r][c] in root.children) search(r, c, root);
            }
        }

        return res;
    }
}
