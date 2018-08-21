 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

 function newTree(arr) {
     if (!arr.length) return null
     let trees = [
             [new TreeNode(arr[0])]
         ],
         i = 1,
         row = 0,
         col = 1

     while (i < arr.length) {
         col = col * 2
         row++
         trees[row] = new Array()
         for (let j = 0; j < col; j++) {
             if (arr[i] !== null) {
                 trees[row][j] = new TreeNode(arr[i])
                 if (j % 2) {
                     trees[row - 1][parseInt(j / 2, 10)].right = trees[row][j]
                 } else {
                     trees[row - 1][parseInt(j / 2, 10)].left = trees[row][j]
                 }
             }
             i++
         }
     }
     return trees[0][0]
 }