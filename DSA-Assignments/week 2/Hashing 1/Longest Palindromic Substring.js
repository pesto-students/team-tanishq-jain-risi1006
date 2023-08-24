// let s = given word
// let t = reverse of s

//after calculating longest common substring we can get to know the length of longest palindromic substring
//with if s[i] == t[j] then dp[i][j] = dp[i-1][j-1] + 1 else dp[i][j] = 0

//to find out string, just traverse back from largest value in the grid