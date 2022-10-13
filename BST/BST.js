class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.data;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let n = new Node(data, null, null);
    if ((this.root = null)) {
      this.root = n;
    } else {
      let current = this.root;
      while (current !== null) {
        let parent = current;
        if (data < current.data) {
          current = current.left;
          if (current == null) {
            parent.left = n;
            break;
          } else {
            current = current.right;
            if (current == null) {
              parent.right = n;
              break;
            }
          }
        }
      }
    }
  }
}
