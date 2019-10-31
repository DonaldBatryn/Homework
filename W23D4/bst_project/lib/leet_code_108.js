// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;
    if (nums.length === 1) return new TreeNode(nums[0]);

    let midIdx = Math.floor(nums.length / 2);
    let rootNode = new TreeNode(nums[midIdx]);
    rootNode.left = sortedArrayToBST(nums.slice(0, midIdx));
    rootNode.right = sortedArrayToBST(nums.slice(midIdx + 1));
    return rootNode;
}