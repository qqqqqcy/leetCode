/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    function run(n) {
        if (n === 1) {
            return x
        } else if (n === -1) {
            return 1 / x
        } else if (n === 0) return 1
        let tmp
        if (n % 2) {
            tmp = run(parseInt(n / 2, 10))
            return tmp * tmp * run(n % 2, 10)
        } else {
            tmp = run(parseInt(n / 2, 10))
            return tmp * tmp
        }
    }
    return parseFloat(run(n), 5)
};