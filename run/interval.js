function Interval(start, end) {
    this.start = start;
    this.end = end;
}

function newInterval(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(new Interval(arr[i][0], arr[i][1]))
    }
    return res
}