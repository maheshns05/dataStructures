function BST(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

/* Insert data into binary search tree */
BST.prototype.insert = function(data) {
  if(data <= this.data) {
    if(!this.left) {
      this.left = new BST(data);
    } else {
      this.left.insert(data);
    }
  } else if(data > this.data) {
    if(!this.right) {
      this.right = new BST(data);
    } else {
      this.right.insert(data);
    }
  }
}

/* To Check if data exits in bst */
BST.prototype.contains = function(data) {
  if(data === this.data) {
    return true;
  }

  if(data < this.data) {
    if(!this.left) {
      return null;
    } else {
      return this.left.contains(data);
    }
  } else if(data > this.data) {
    if(!this.right) {
      return null;
    } else {
      return this.right.contains(data);
    }
  }
}

/* Depth First Traversal */
BST.prototype.depthTraversal = function(iter, order) {
  if(order === 'PRE') iter(this.data);
  if(this.left) this.left.depthTraversal(iter, order);
  if(order === 'IN') iter(this.data);
  if(this.right) this.right.depthTraversal(iter, order);
  if(order === 'POST') iter(this.data);
}

function logVal(value) {
  console.log(value);
}

/* Bredth traversal */
BST.prototype.bredthTraversal = function(iter) {
  var queue = [this];

  while(queue.length) {
    var treeNode = queue.shift();
    iter(treeNode);

    if(treeNode.left) queue.push(treeNode.left);
    if(treeNode.right) queue.push(treeNode.right);
  }
}

function logNode(node) {
  console.log(node.data);
}

/* Get minimum val from BST */
BST.prototype.getMinVal = function() {
  if(!this.left) {
    return this.data;
  } else {
    return this.left.getMinVal();
  }
}

/* Get maximum val from BST */
BST.prototype.getMaxVal = function() {
  if(!this.right) {
    return this.data;
  } else {
    return this.right.getMaxVal();
  }
}

var bst = new BST(50);
bst.insert(20);
bst.insert(70);
bst.insert(10);
bst.insert(30);
bst.insert(60);
bst.insert(80);

bst.getMinVal()
