/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true
    function isSameTree(p, q) {
        if (!p && !q) return true
        if ((p && !q) || (!p && q)) return false
        if (p.val !== q.val) return false
        if (isSameTree(p.left,q.right) && isSameTree(p.right,q.left)) {
            return true
        } else {
            return false
        }
    }
   return  isSameTree(root.left,root.right) 
};