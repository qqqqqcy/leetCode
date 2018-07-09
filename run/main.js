/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let res = new Array(),
        add = new Array()
    for (let j = num2.length - 1; j >= 0; j--) {
        for (let i = num1.length - 1; i >= 0; i--) {
            let tmp = parseInt(num2[j], 10) * parseInt(num1[i], 10)
            res[i] = res[i] ? res[i] : 0
            res[i] += (tmp % 10) + (add[i] ? add[i] : 0)
            add[i] = 0
            add[i - 1] = add[i - 1] ? add[i - 1] : 0
            add[i - 1] += parseInt(tmp / 10, 10)
        }
    }
    return res.join('')
};