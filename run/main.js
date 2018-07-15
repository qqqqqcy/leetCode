/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = new Array()
    dp[0] = new Array()
    for (let i = 0; i < m; i++) {
        dp[0][i] = 1
    }
    for (let i = 1; i < n; i++) {
        dp[i] = new Array()
        for (let j = 0; j < m; j++) {
            let tmp = 0
            if (dp[i - 1]) tmp += dp[i - 1][j]
            if (dp[i][j - 1]) tmp += dp[i][j - 1]
            dp[i][j] = tmp
        }
    }
    return dp[n - 1][m - 1]
};