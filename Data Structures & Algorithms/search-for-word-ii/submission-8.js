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

        // build prefix trie
        const root = new TrieNode();
        const res = [];
        
        for(let word of words) {
            let curr = root;
            for(let char of word) {
                if(!(char in curr.children)) curr.children[char] = new TrieNode();
                curr = curr.children[char];
            }
            curr.word = word;
        }

        //search function

        function search(r, c, node) {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS) return;
            const letter = board[r][c];
            const currNode = node.children[letter];
            if(!currNode) return;
            if(currNode.word) {
                res.push(currNode.word);
                currNode.word = null;
            }
            board[r][c] = "#";
            search(r+1, c, currNode);
            search(r-1, c, currNode);
            search(r, c+1, currNode);
            search(r, c-1, currNode);
            board[r][c] = letter;
        }

        for(let r=0; r < ROWS; r++) {
            for(let c=0; c < COLS; c++) {
                if(root.children[board[r][c]]) search(r, c, root);
            }
        }

        return res;
    }
}
