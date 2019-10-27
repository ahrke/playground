
const Node = (data, next = null) => {
  return {
    data, 
    next
  }
}

// const LinkedList = (head) => {
//   return {
//     head
//   }
// }

// const addNode = (linkedList, node) => {
//   let temp = linkedList.head
//   while (temp.next) {
//     temp = temp.next
//   }
//   temp.next = node
// }

// const prependNode = (linkedList, node) => {
//   let temp = linkedList.head
//   let newNode = node
//   newNode.next = temp
//   linkedList.head = newNode
// }

// const insertNode = (linkedList, node) => {
//   let temp = linkedList.head

//   while (temp.next) {

//   }
// }

// const printLinkedList = (linkedList) => {
//   let temp = linkedList.head
//   console.log("==|=> printing out LinkedList nodes:")
//   while (temp) {
//     console.log(temp.data)
//     temp = temp.next
//   }
// }

class LinkedList {
  constructor(node) {
    this.head = node;
    this.tail = this.head;
    this.length = 1
  }
  addNode = (node) => {
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  prependNode = (node) => {
    node.next = this.head;
    this.head = node;
    this.length++
  }
  insertNode = (node, index) => {
    if (index >= this.length) this.addNode(node)
    let lead = this.traverseToIndex(index - 1)
    node.next = lead.next
    lead.next = node;
    this.length++
  }
  removeNode = (index) => {
    let lead = this.traverseToIndex(index - 1);
    let toRemove = lead.next
    lead.next = lead.next.next
    toRemove = null;
    this.length--
  }
  traverseToIndex = (index) => {
    let current = this.head
    let i = 0
    while (i !== index) {
      current = current.next
      i++
    }
    return current
  }

  printLinkedList = () => {
    let temp = this.head
    console.log("==|=> printing out LinkedList nodes:")
    while (temp) {
      console.log(temp.data)
      temp = temp.next
    }
  }
}

const first = Node('hello');
const second = Node('home');
const third = Node('sad');
const fourth = Node('dot-dash-dash-dash, dot, dot-dot-dot, dot-dot-dot, dot-dot, dot');
const fifth = Node('barqs roots beers')
let ll = new LinkedList(first);

ll.addNode(second);
ll.addNode(third);
ll.printLinkedList();
ll.prependNode(fourth)
ll.insertNode(fifth, 1)
ll.removeNode(3)
ll.printLinkedList()