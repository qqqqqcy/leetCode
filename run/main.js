/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let res = new Array(),
        tmp = ''
        path+='/'
    for (let i = 0; i < path.length; i++) {
        if (path[i] === '/') {
            if (tmp === '' || tmp === '.') {
                // do nothing
            } else if (tmp === '..') {
                if (res.length) {
                    res.pop()
                }
            } else {
                res.push(tmp)
            }
            tmp = ''
        } else {
            tmp += path[i]
        }
    }
    
    return '/' + res.join('/')
};