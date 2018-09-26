let T = 0,
    i = 0

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    let chunk = process.stdin.read()
    cle
    if (typeof chunk === 'string') {
        chunk = chunk.replace(/\r?\n/, '');
        if (!T) {
            T = Number(chunk)
        } else if (T > i) {
            i++
            let [Smax, arr] = chunk.split(' ')
            process.stdout.write(
                `Case #${i}:${run(Number(Smax),arr.split('').map(item => Number(item)))}\n`
            )
        }
    }
    if (chunk === '') {
        process.stdin.emit('end');
        return
    }
    if (chunk !== null) {}
});

process.stdin.on('end', () => {
    // process.stdout.write('end');
});


function run(Smax, arr) {
    let stand = arr[0],
        water = 0
    for (let i = 1; i <= Smax; i++) {
        water += Math.max(i - stand - water, 0)
        stand += arr[i]
    }
    return water
}

// 邱驰艺笔试

// 掌声雷鸣

// 问题
// 一场歌剧今晚开演，你的朋友Alicia是这场歌剧的女主唱。你没法坐在观众席，但是你
// 还是想确保开场前全部观众能起立为Alicia鼓掌。

// 起初，所有观众都是坐着的。每一位观众有自己的“害羞程度”。害羞程度为Si 的观众必
// 须等到有Si 位其他观众站起来鼓掌，自己才会站起来鼓掌。如果某位观众的害羞程度Si
// = 0，那么他/她会立马站起来鼓掌，无关别的观众的行为。举个例子，一个害羞程度Si
// = 2的观众，一开始是坐着的，等到至少有2位其他观众起身鼓掌，他/她就会起身鼓掌。

// 你知道每一位观众的害羞程度，并且你准备额外邀请一些水军过来坐到观众席中，以此
// 确保每一位观众最终都会起身致意，掌声如雷鸣。你可以决定每一位额外邀请的水军的
// 害羞程度，他们的害羞程度不一定相同。请问，你最少需要额外邀请几位水军？

// 我们会把你的代码放在两组样例中测试。

// 输入
// 输入的第一行是测试用例(test cases）的个数记作T。接下去是T个测试用例。每一个测
// 试用例以Smax 开头，后面跟着一串 Smax + 1个数字。其中，Smax 代表观众中最害羞的
// 人的害羞程度。数字串中的第k个数字（k从0开始数起）代表观众中有多少人的害羞程度
// 为k。举个例子，数字串“409”表示观众中有4个人害羞程度Si = 0，9个人害羞程度Si =
// 2（0个人害羞程度Si = 1或其他值）。注意，每一个害羞程度起初只可能有0到9个人。

// 数字串永远不会以0结尾。这表示观众席上永远至少有一个人。

// 输出
// 对于每一个测试用例，输出“Case #x: y”，其中x是测试用例的序号（从1开始），y是你
// 最少需要额外邀请的水军的个数。

// 限制
// 1 ≤ T ≤ 100.
// 样例组（小）:
// 0 ≤ Smax ≤ 6.
// 样例组（大）:
// 0 ≤ Smax ≤ 1000.

// 样例

// 输入：
// 4
// 4 11111
// 1 09
// 5 110011
// 0 1

// 输出：
// Case #1: 0
// Case #2: 1
// Case #3: 2
// Case #4: 0

// 在Case #1中，你无需额外邀请水军，观众席就会自动全场起立：害羞程度Si = 0 的观
// 众会首先起立，接着害羞程度Si = 1 的观众会起立，依此类推。
// 在Case #2中，你需要邀请一位害羞程度为Si = 0 的水军，然后观众席上的其他观众会
// 陆续全场起立鼓掌。
// 在Case #3中，一个好的方案是邀请两位Si = 2的水军。
// 在Case #4中，观众席上只有一个人，他/她的害羞程度为Si = 0 ，会立马站起鼓掌。你
// 无需额外邀请水军。