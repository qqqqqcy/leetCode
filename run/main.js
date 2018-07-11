/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let res = nums[0],
        tmp = 0
    for (let i = 0; i < nums.length; i++) {
        res = Math.max(tmp + nums[i], nums[i], res)
        if (nums[i] > tmp + nums[i]) {
            tmp = nums[i]
        } else {
            tmp += nums[i]
        }
    }
    return res
};