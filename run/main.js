// /**
//  * @param {number} n
//  * @param {number[][]} flights
//  * @param {number} src
//  * @param {number} dst
//  * @param {number} K
//  * @return {number}
//  */
// var findCheapestPrice = function(n, flights, src, dst, K) {
//     // init map
//     const fmap = new Array()     
//     const checked = []
//     for (let a = 0; a < n; a++) {
//         checked[a] = a===src
//         fmap[a] = []
//         for (let b = 0; b < n; b++) {
//             fmap[a][b] = Infinity
//             if(a===b) {fmap[a][b] = 0}
//         }
//     }

//     flights.map(([a,b,cost])=>{
//         fmap[a][b] = cost
//       })
 

//     function findMid() {
//         let cost = Infinity,mid
//         fmap[src].map((val,index)=>{
//             if (!checked[index] && val<cost) {
//                 mid = index;
//                 cost = val
//             }
//             checked[mid] = true
//         })
//         return mid;
//     }

//     while (checked.some(item=>!item)) {
//         const mid = findMid();
//         for (let p = 0; p < n; p++) {
//             fmap[src][p] = Math.min(
//                 fmap[src][p],
//                 fmap[src][mid]+fmap[mid][p]
//             )
//         }
//     }
//     return fmap[src][dst]===Infinity?-1:fmap[src][dst]
// };


// n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
// src = 0, dst = 2, k = 0

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices =[]) {
    let maxProfit = 0
    for (let mid = 0; mid < prices.length; mid++) {
        let preMyStock = prices[0], preMaxProfit = 0,afterMyStock = prices[mid], afterMaxProfit = 0
        for (let i = 1; i < mid; i++) {
            const currentStock = prices[i]
            preMaxProfit = Math.max(preMaxProfit,currentStock-preMyStock)
            preMyStock = Math.min(preMyStock,currentStock)
        }
        for (let i = mid; i < prices.length; i++) {
            const currentStock = prices[i]
            afterMaxProfit = Math.max(afterMaxProfit,currentStock-afterMyStock)
            afterMyStock = Math.min(afterMyStock,currentStock)
        }
        maxProfit = Math.max(maxProfit,preMaxProfit+afterMaxProfit)
    }
    return maxProfit
};

console.log(
    maxProfit([3,3,5,0,0,3,1,4])
);
// Input: [7,1,5,3,6,4]