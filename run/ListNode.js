function ListNode(val = null) {
    this.val = val;
    this.next = null;
}

function newList(arr) {
    let p = new ListNode(),
        h = p
    for (let i = 0; i < arr.length; i++) {
        p.next = new ListNode(arr[i])
        p = p.next
    }
    return h.next
}
// [1,2,3,4,5]