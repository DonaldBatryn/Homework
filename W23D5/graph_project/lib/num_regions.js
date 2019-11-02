// let graph1 = {
//     'a': ['b'],
//     'b': ['a'],
//     'c': ['d'],
//     'd': ['e', 'c'],
//     'e': ['d'],
// };

// node = b
// unvisited [ c, d ,e]
// neighbors = [a]
// counter = 1
function numRegions(graph) {
    // let unvisited = new Set(Object.keys(graph));
    // let counter = 0;
    // let node = Object.keys(graph)[0];
    // let neighbors;
    // while (unvisited.size > 0){
    //     neighbors = graph[node];
    //     unvisited.delete(node)

    //     if (!neighbors.length) {
    //         counter += 1;
    //         node = Array.from(unvisited)[0];
            
    //     } else if (neighbors.every(neighbor => !unvisited.has(neighbor))){
    //         counter += 1; 
    //         if (unvisited.size === 0) {
    //             return counter;
    //         } else {
    //             node = Array.from(unvisited)[0];
    //         }
    //     } else {
    //         for (neighbor of neighbors){
    //             if (unvisited.has(neighbor)){
    //                 node = neighbor;  
    //             }
    //         }
    //     }
    // }  
    // return counter;
    let visited = new Set();
    let count = 0;
    for (let node in graph) {
        if (depthFirst(node, graph, visited)) count++
    }
    return count;
}

function depthFirst(node, graph, visited){
    if (visited.has(node)) return false;
    visited.add(node)
    graph[node].forEach(neighbor => depthFirst(neighbor, graph, visited))
    return true;
}

module.exports = {
    numRegions
};