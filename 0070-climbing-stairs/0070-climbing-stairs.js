/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 0 || n == 1) {
        return 1;
    }

    let dp = [];
    dp[0] = dp[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
};