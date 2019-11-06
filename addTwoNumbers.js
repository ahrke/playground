
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

const addTwoNumbers = function(l1, l2) {
  let temp0 = null;
  let llOut = null;
  let temp1 = l1;
  let temp2 = l2;
  let carry = 0;

  
  while (temp1 || temp2 || carry) {
    let sum = (temp1 && temp2) 
      ? temp1.val + temp2.val 
      : (temp1) 
        ? temp1.val : (temp2) ? temp2.val : 0
    sum += carry
    carry = Math.floor(sum / 10)
    if (!llOut) {
      llOut = new ListNode((sum % 10))
      temp0 = llOut
    } else {
      llOut.next = new ListNode((sum % 10))
      llOut = llOut.next
    }if (temp1) {
      temp1 = temp1.next
    } 
    if (temp2) {
      temp2 = temp2.next
    } 
  }

  return temp0
};



let first3 = new ListNode(3)
let first2 = new ListNode(4, first3)
let first1 = new ListNode(2, first2)

let second3 = new ListNode(4)
let second2 = new ListNode(6, second3)
let second1 = new ListNode(5, second2)

console.log(addTwoNumbers(first1, second1))
