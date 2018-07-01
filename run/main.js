/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    console.log(nums.length)
    let map = {},
    res = [],
    repeat = {}
    time = new Date()
    function deal(m, n) {
        for (let i = 0; i < m.length; i++) {
            if (m[i][0] !== n && m[i][1] !== n) {
                let newRes = [nums[n], nums[m[i][0]], nums[m[i][1]]].sort()
                let key = newRes.join('_')
                if (!repeat[key]) {
                    repeat[key] = true
                    res.push(newRes)
                }
            }
        }
    }
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let num = nums[i] + nums[j]
            if (map[num]) {
                map[num].push([i, j])
            } else {
                map[num] = [
                        [i, j]
                ]
            }
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (map[0 - nums[i]]) {
            deal(map[0 - nums[i]], i)
        }
    }
    console.log(new Date() - time)
    return res
};