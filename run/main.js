/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let i = 0
    s = s.replace(new RegExp(' ', 'g'), '').split('')
    while (i < s.length - 1) {
        let sum = s[i] + s[i + 1]
        while (sum === '()' || sum === '[]' || sum === '{}') {
            s.splice(i, 2)
            sum = s[i] + s[i + 1]
        }
        sum = s[i - 1] + s[i]
        if (sum === '()' || sum === '[]' || sum === '{}') {
            i--
        } else {
            i++
        }
    }
    return (!s.length)
};