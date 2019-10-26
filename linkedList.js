
const Node = (data, next = null) => {
  return {
    data, 
    next
  }
}

const LinkedList = (head) => {
  return {
    head
  }
}

const addNode = (linkedList, node) => {
  let temp = linkedList.head
  while (temp.next) {
    temp = temp.next
  }
  temp.next = node
}

const printLinkedList = (linkedList) => {
  let temp = linkedList.head
  console.log("==|=> printing out LinkedList nodes:")
  while (temp) {
    console.log(temp.data)
    temp = temp.next
  }
}

const first = Node('hello');
const second = Node('home');
const third = Node('sad');
let ll = LinkedList(first);

addNode(ll, second);
addNode(ll, third);
printLinkedList(ll);