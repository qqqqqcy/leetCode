/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0,
        j = 0,
        nums = []
    while (i < nums1.length || j < nums2.length) {
        if (j === nums2.length || nums1[i] < nums2[j]) {
            nums.push(nums1[i++])
        } else {
            nums.push(nums2[j++])
        }
    }
    if (nums.length % 2) {
        return parseFloat(nums[((nums.length - 1) / 2.0)].toFixed(1))
    } else {
        return parseFloat(((nums[(nums.length / 2)] + nums[(nums.length / 2) - 1]) / 2).toFixed(1))
    }
};

findMedianSortedArrays([2],[1,3])