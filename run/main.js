/**
 * @param {number[]} nums
 * @return {number}
 */
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
};