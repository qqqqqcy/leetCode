/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let i = new ListNode(),
        res, j, after
    i.next = head
    while (i.next) {
        if (i.next.val < x) {
            if (!res) {
                res = new ListNode()
                res.next = i.next
            }
            i = i.next
        } else {
            if (!after) {
                after = i.next
                j = i.next

            } else {
                j.next = i.next
                j = i.next
            }
            i.next = i.next.next
            j.next = null
        }
    }
    i.next = after ? after : null
    if (!res) res = i
    return res.next
};