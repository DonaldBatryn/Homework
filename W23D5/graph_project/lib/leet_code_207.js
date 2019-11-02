// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

// Example 1:

// Input: 2, [[1, 0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
//     Example 2:

// Input: 2, [[1, 0], [0, 1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should
// also have finished course 1. So it is impossible.

// 3, [[1, 0], [2, 1], [3, 2]]
// [0, 1]

function canFinish(numCourses, prerequisites) {
    if (numCourses <= 1) return false;
    // let graph = {};
    // let visited = new Set()

    // prerequisites.forEach(preReq => {
    //     graph[preReq[0]] = [preReq[1]];

    // })

    // for (let key in graph){
    //     if (!visited.has(key)) visited.add(key);
        
        
    // }
    for (let i = 0; i < prerequisites.length; i++){
        let temp = prerequisites[i].reverse();
        if (prerequisites.includes(temp)) return false;
    }
   
    return true;
  
}
