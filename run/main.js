/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function (intervals, newInterval) {
    let res = new Array(),
        flag = true
    for (let i = 0; i < intervals.length; i++) {
        if (newInterval.start > intervals[i].end) {
            res.push(intervals[i])
        } else if (newInterval.end < intervals[i].start) {
            if (flag) {
                res.push(newInterval)
                flag = false
            }
            res.push(intervals[i])
        } else {
            if (intervals[i].start < newInterval.start) {
                newInterval.start = intervals[i].start
            }
            if (newInterval.end < intervals[i].end) {
                newInterval.end = intervals[i].end
            }

        }
    }
    if (flag) res.push(newInterval)
    // return newInterval
    return res
};