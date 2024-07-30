class Node {
  constructor(newData) {
    this.newData = newData;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  //add at the end of the list
  add(newData) {
    let newNode = new Node(newData);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  traverse() {
    let current = this.head;

    while (current !== null) {
      console.log(current.newData);
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

list.traverse();
