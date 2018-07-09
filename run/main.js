/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let dp = new Array()
    for (let i = 0; i < s.length; i++) {
        dp[i] = new Array()
    }
    dp[-1][-1] = true
    for (let i = -1; i < s.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if (p[j] === '*') {
                dp[i][j] = dp[i][j-1]
            }
        }
    }
};