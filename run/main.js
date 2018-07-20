/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let l = -1,
        r = nums.length,
        p = 0
    while (p < r) {
        if (nums[p] === 0) {
            if (p - l === 1) {
                l++
                p++
            } else {
                l++
                tmp = nums[l]
                nums[l] = nums[p]
                nums[p] = tmp
            }
        } else if (nums[p] === 2) {
            if (r - l === 1) {
                p++
            } else {
                r--
                tmp = nums[r]
                nums[r] = nums[p]
                nums[p] = tmp
            }
        } else {
            p++
        }
    }

};