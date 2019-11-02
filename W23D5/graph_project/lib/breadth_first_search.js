function breadthFirstSearch(startingNode, targetVal) {
    if (!startingNode) return null;
    
    let visited = new Set();
    let queue = [ startingNode ];

    while (queue.length){
        let node = queue.shift();

        visited.add(node.val);
        
        if (node.val === targetVal) return node;
        
        let length = node.neighbors.length;
        for (let i = 0; i < length; i++){
            if (visited.has(node.neighbors[i].val)) continue;

            queue.push(node.neighbors[i]);
        }
       
    }

    

    return null;
}

module.exports = {
    breadthFirstSearch
};