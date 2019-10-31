function inOrderArray(root, array = []) {
    if (!root) return [];
    inOrderArray(root.left, array)
    array.push(root.val);
    inOrderArray(root.right, array)
    return array
}

function postOrderArray(root, array = []) {
    if (!root) return [];
    postOrderArray(root.left, array)
    postOrderArray(root.right, array)
    array.push(root.val);
    return array
}


module.exports = {
    inOrderArray,
    postOrderArray
};