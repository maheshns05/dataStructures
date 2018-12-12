function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(data, next, prev) {
  this.data = data;
  this.next = next;
  this.prev = prev;
}

/* Insert data to the head of the linked list*/
LinkedList.prototype.addToHead = function(data) {
  var node = new Node(data, this.head, null);

  if(this.head) {
    this.head.prev = node;
  } else {
    this.tail = node;
  }

  this.head = node;
}

/* Insert data to the tail of the linked list*/
LinkedList.prototype.addToTail = function(data) {
  var node = new Node(data, null, this.tail);

  if(this.tail) {
    this.tail.next = node;
  } else {
    this.head = node;
  }

  this.tail = node;
}

/* Remove data from the head of the linked list*/
LinkedList.prototype.removeHead = function() {
  if(!this.head) { return null }

  var val = this.head.data;
  this.head = this.head.next;

  if(this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }

  return val;
}

/* Remove data from the tail of the linked list*/
LinkedList.prototype.removeTail = function() {
  if(!this.tail) { return null }

  var val = this.head.data;
  this.tail = this.tail.prev;

  if(this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }

  return val;
}

/* Search if the data exits in the linked list  */
LinkedList.prototype.search = function(searchVal) {
  var node = this.head;

  while(node) {
    if(node.data === searchVal) {
      return searchVal;
    }

    node = node.next;
  }

  return null;
}

/* Return the index of the data */
LinkedList.prototype.indexOf = function(val) {
  var node = this.head;
  var indexes = [];
  var counter = 0;

  while(node) {
    if(node.data === val) {
      indexes.push(counter);
    }

    counter++;
    node = node.next;
  }

  return indexes;
}


