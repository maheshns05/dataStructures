class Stack {
  constructor() {
    this.data = [];
  }

  /* Add data into Stack */  
  add(record) {
    this.data.push(record);
  }

  /* Remove data from Stack */
  remove() {
    return this.data.pop();
  }

  /* Check the last element of Stack */ 
  peek() {
    return this.data[this.data.length-1];
  }
}


/* Create Queue using Stack */
class Queue {
  constructor() {
    this.sourceOne = new Stack();
    this.sourceTwo = new Stack()
  }

  add(record) {
    this.sourceOne.add(record);
  }

  remove() {
    while(this.sourceOne.peek()) {
      this.sourceTwo.add(this.sourceOne.remove());
    }

    var last = this.sourceTwo.remove();

    while(this.sourceTwo.peek()) {
      this.sourceOne.add(this.sourceTwo.remove());
    }

    return last;
  }

  peek() {
    while(this.sourceOne.peek()) {
      this.sourceTwo.add(this.sourceOne.remove());
    }

    var last = this.sourceTwo.peek();

    while(this.sourceTwo.peek()) {
      this.sourceOne.add(this.sourceTwo.remove());
    }

    return last;
  }
}


var q = new Queue();

q.add(100);
q.add(50);
q.add(30);
q.add(20);
q.add(10);

q.peek();

