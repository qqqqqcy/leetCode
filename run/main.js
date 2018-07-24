/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length < 2) return nums
    let t = 2
    for (let h = 2; h < nums.length; h++) {
        if (nums[h] !== nums[t - 2]) {
            nums[t] = nums[h]
            t++
        }
    }
    nums.length = t
};