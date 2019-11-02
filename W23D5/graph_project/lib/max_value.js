function maxValue(node, visited=new Set()) {
    if (!node) return 0;
    let queue = [ node ];
    let maximum = 0;
    while (queue.length) {
        let node = queue.shift();
        
        visited.add(node.val);
        if (node.val > maximum) {
            maximum = node.val
        }
        for (let i = 0; i < node.neighbors.length; i++) {
            if (visited.has(node.neighbors[i].val)) {
                continue;
            }
            queue.push(node.neighbors[i])
        }
    }
    return maximum;
}

module.exports = {
    maxValue
};