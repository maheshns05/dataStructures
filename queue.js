class Queue {
  constructor() {
    this.data = [];
  }

  /* add record into queue */
  add(record) {
    this.data.unshift(record);
  }

  /* remove record from queue */
  remove() {
    return this.data.pop();
  }

  /* check the last elem of queue */
  peek() {
    return this.data[this.data.length-1];
  }
}

var sourceOne = new Queue();
sourceOne.add(100);
sourceOne.add(50);
sourceOne.add(30);

var sourceTwo= new Queue();
sourceTwo.add(100);


/* Merge two queues and return new queue */
function weave(sourceOne, sourceTwo) {
  var q = new Queue();

  while(sourceOne.peek() || sourceTwo.peek()) {
    if(sourceOne.peek()) {
      q.add(sourceOne.remove())
    }

    if(sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}

weave(sourceOne, sourceTwo);