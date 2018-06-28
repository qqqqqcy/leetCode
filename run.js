/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length,
    set = {}
    // Set<Character> set = new HashSet<>();
    let ans = 0, i = 0, j = 0;
    while (i < n && j < n) {
        // try to extend the range [i, j]
        if (!set[s[j]]){
            set[s[j]] = set[s[j]]?set[s[j]]+1:1
            j++
            ans = Math.max(ans, j - i);
        }
        else {
            set[s[i]]--
            i++
        }
    }
    return ans;
};

lengthOfLongestSubstring('aabcdeads')