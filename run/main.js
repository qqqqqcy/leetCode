/**
 * @param {number[]} nums
 * @return {number}
 */
<<<<<<< HEAD
var firstMissingPositive = function (nums) {
    let i = 0,
        tmp
    while (i < nums.length) {
        if (nums[nums[i] - 1] != nums[i] && nums[i] - 1 != i && nums[i] > 0 && nums[i] <= nums.length) {
            tmp = nums[nums[i] - 1]
            nums[nums[i] - 1] = nums[i]
            nums[i] = tmp
        } else {
            i++
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) return i + 1
    }
    return nums.length + 1
=======
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
>>>>>>> d37825de2e3385475e58a9e1232ccde020356d97
};