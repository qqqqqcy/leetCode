/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let str = '123456789',
        res = new Array(),
        sum = 0

    function run(str) {
        if (!str) {
            sum++
            return
        }
        for (let i = 0; i < str.length; i++) {
            res.push(str[i])
            run(str.replace(str[i], ''))
            if (sum === k) {
                return
            }
            res.pop()
        }
    }
    run(str.substr(0, n))
    return res.join('')
};