/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let len = matrix.length - 1,
        tmp
    for (let j = 0; j <= parseInt(len / 2, 10); j++) {
        for (let i = j; i < len - j; i++) {
            tmp = matrix[j][i]
            matrix[j][i] = matrix[len - i][j]
            matrix[len - i][j] = matrix[len - j][len - i]
            matrix[len - j][len - i] = matrix[i][len - j]
            matrix[i][len - j] = tmp
        }
    }
};