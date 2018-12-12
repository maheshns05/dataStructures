class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  /* Insert data to the head of the linked list*/
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  /* Find the size of the linked list */
  size() {
    var node = this.head;
    var count = 0;

    while(node) {
      count++;
      node = node.next;
    }

    return count;
  }

  /* Get first node of the linked list */
  getFirst() {
    return this.head;
  }

  /* Get last node of the linked list */
  getLast() {
    if(!this.head) {
      return;
    }

    var node = this.head;

    while(node) {
      if(!node.next) {
        return node;
      }

      node = node.next;
    }
  }

  /*Insert data to the last node of linked list */
  insertLast(data) {
    var last = this.getLast();

    if(last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data, this.head);
    }
  }

  /* Remove first node */
  removeFirst() {
    this.head = this.head.next;
  }

  /* Remove last node */
  removerLast() {
    if(!this.head) {
      return;
    }

    if(!this.head.next) {
      this.head = null;
      return;
    }

    var node = this.head;
    var previous = this.head.next;

    while(node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  /* Clear the linked list */
  clear() {
    this.head = null;
  }

  /* Get the node at index */
  getAt(index) {
    if(!this.head) {
      return;
    }

    var node = this.head;
    var count = 0;

    while(node) {
      if(count === index) {
        return node;
      }

      count++;
      node = node.next;
    }

    return null;
  }

  /* Remove node at given index*/
  removeAt(index) {
    if(!this.head) {
      return;
    }

    if(index === 0) {
      this.head = this.head.next;
      return;
    }

    var previous = this.getAt(index-1);
    if(!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  /* Insert data at given index */
  insertAt(data, index) {
    if(!this.head) {
      this.head = new Node(data, this.head);
      return;
    }

    if(index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    var previous = this.getAt(index-1) || this.getLast();
    previous.next = new Node(data, previous.next);
  }
  
  /* Find the mid node of the linked list */
  midPoint() {
    var slow = this.getFirst();
    var fast = this.getFirst();

    while(fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }
}
