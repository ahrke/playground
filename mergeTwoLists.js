function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

const mergeTwoLists = function(l1, l2) {
  let temp1 = l1;
  let temp2 = l2;
  let resultList;
  let listRoot;
  if (temp1.val <= temp2.val) {
    listRoot = new ListNode(temp1.val);
    temp1 = temp1.next
  } else {
    listRoot = new ListNode(temp2.val);
    temp2 = temp2.next
  }

  resultList = listRoot;

  while (temp1 !== null && temp2 !== null) {
    let lowestVal;
    if (temp1.val <= temp2.val || !temp2) {
      lowestVal = temp1.val;
      temp1 = temp1.next
    } else {
      lowestVal = temp2.val;
      temp2 = temp2.next
    }
    resultList.next = new ListNode(lowestVal);
    resultList = resultList.next;
  }

  while (listRoot) {
    console.log(listRoot)
    listRoot = listRoot.next
  }

  return listRoot;
};

let l1third = new ListNode(4)
let l1second = new ListNode(2, l1third)
let l1first = new ListNode(1, l1second)

let l2third = new ListNode(4)
let l2second = new ListNode(3, l2third)
let l2first = new ListNode(1, l2second)

console.log(mergeTwoLists(l1first,l2first))
