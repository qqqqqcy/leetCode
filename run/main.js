/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    function getSpace(n) {
        return new Array(n + 1).join(' ')
    }
    let res = new Array(),
        tmp = [],
        len = 0,
        space = 0
    tmp = [words[0]]
    len = words[0].length
    for (let i = 1; i < words.length; i++) {
        if (len + words[i].length + 1 <= maxWidth) {
            space++
            len += words[i].length + 1
            tmp.push(words[i])
        } else {
            let allSpace = space + maxWidth - len,
                tmpStr = tmp[0]
            if (tmp.length === 1) {
                tmpStr += getSpace(maxWidth - tmp[0].length)
            } else {
                let gapSpace = getSpace(parseInt(allSpace / (tmp.length - 1))),
                    leaveSpace = getSpace(allSpace % (tmp.length - 1))
                for (let j = 1; j < tmp.length; j++) {
                    tmpStr += gapSpace
                    if (leaveSpace.length) {
                        tmpStr += ' '
                        leaveSpace = getSpace(leaveSpace.length - 1)
                    }
                    tmpStr += tmp[j]
                }
            }
            res.push(tmpStr)
            space = 0
            tmp = [words[i]]
            len = words[i].length
        }
    }
    tmpStr = tmp.join(' ')
    tmpStr += getSpace(maxWidth - tmpStr.length)
    res.push(tmpStr)
    return res
};