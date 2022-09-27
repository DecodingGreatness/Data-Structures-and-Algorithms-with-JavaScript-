class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LList {
  constructor() {
    this.head = new Node("head");
  }
  find(item) {
    let curNode = this.head;
    while (curNode.element != item) {
      curNode = curNode.next;
    }
    return curNode;
  }

  insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }
}
