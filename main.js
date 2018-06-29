/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0,
        i = 0,
        j = height.length - 1
    while (i < j) {
        maxArea = Math.max(Math.min(height[i], height[j]) * (j - i), maxArea)
        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }
    return maxArea
};