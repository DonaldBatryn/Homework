class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insertRecur(word, root=this.root) {
        let letter = word[0];
        if (!(letter in root.children)) {
            root.children[letter] = new Node();
        }

        if (word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {
            this.insertRecur(word.slice(1), root.children[letter])
        }
    }
    
    insertIter(word) {
        let root = this.root;
        let letter;
        for (let i = 0; i < word.length; i++) {
            letter = word[i]
            if (!(letter in root.children)) {
                root.children[letter] = new Node()
                
            }
            if (i === word.length - 1) {
                root.children[letter].isTerminal = true;
            }
            root = root.children[letter]
        }
    }

    searchRecur(word, root=this.root) {
        if (word.length === 0) {
            if (root.isTerminal) {
                return true;
            } else {
                return false;
            }
        }

        let letter = word[0];

        if (letter in root.children) {
            return this.searchRecur(word.slice(1), root.children[letter]);
        } else {
            return false
        }
    }

    searchIter(word) {
        let root = this.root;
        for (let i = 0; i < word.length; i++) {
            let letter = word[i]
            if (!(letter in root.children)) {
                return false;
            } 
            if (i === word.length - 1 && root.children[letter].isTerminal) {
                return true;
            }
            root = root.children[letter]
        }
        return false;
    }

    wordsWithPrefix(prefix, node=this.root) { 
        let words = [];  
        let topNode = node;
        if (node === this.root) {
            for (let i=0; i < prefix.length; i++){
                if (!topNode.children[prefix[i]]) return false;
                if (topNode.children[prefix[i]]) topNode = topNode.children[prefix[i]];
            }
        }
        if (topNode.isTerminal) words.push(prefix);

        for (let key in topNode.children){
            let newPrefix = prefix + key;
            words = words.concat(this.wordsWithPrefix(newPrefix, topNode.children[key], words));
        }

        return words;
    }
}

module.exports = {
    Node,
    Trie
};