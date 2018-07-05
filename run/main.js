/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let i = 0,
        j = nums.length - 1,
        mid
    if (nums[i] >= target) return i
    if (nums[j] === target) return j
    if (nums[j] < target) return j + 1
    while (i < j) {
        mid = parseInt((i + j) / 2)
        if (i === mid || j === mid) {
            return j
        }
        if (nums[mid] === target) return mid
        if (target <= nums[mid]) {
            j = mid
        } else {
            i = mid
        }
    }
};