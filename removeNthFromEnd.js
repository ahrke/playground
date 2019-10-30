const ListNode = (val, next = null) => {
  return {
    val: val,
    next: next
  }
}

var removeNthFromEnd = function(head, n) {
  if (!head.next) {
    head = null
    return head
  }
  let temp = head
  let tempArr = []
  while (temp) {
    tempArr.push(temp)
    temp = temp.next
  }

  if (tempArr[tempArr.length - n - 1]) {
    console.log("==|> -n-1:",tempArr[tempArr.length - n - 1])
    tempArr[tempArr.length - n - 1].next = tempArr[tempArr.length - n - 1].next.next
  } else {
    console.log("===|=|> other:", tempArr[tempArr.length - n + 1])
    tempArr[tempArr.length - n] = tempArr[tempArr.length - n + 1]
  }

  head = tempArr[0]

  // tempArr[0].next = tempArr[0].next ? tempArr[0].next.next : null
  // tempArr[1] = null

  return [head.val]
};

const fifth = ListNode(5)
const fourth = ListNode(4, fifth)
const third = ListNode(3, fourth)
const second = ListNode(2, third)
const first = ListNode(1, second)

const alone = ListNode(1)

const two = ListNode(2)
const one = ListNode(1,two)

console.log(removeNthFromEnd(first, 2))
console.log(removeNthFromEnd(alone, 1))
console.log(removeNthFromEnd(one,2))