function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next=null) {
  this.key = key;
  this.value = value;
  this.next = next;
}

/* Hash the key to particular index */
HashTable.prototype.hash = function(key) {
  var total = 0;

  for(var i=0;i<key.length; i++) {
    total += key.charCodeAt(i);
  }

  return total % this.numBuckets;
}

/* Insert data to HashTable */
HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key);

  if(!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
  } else if(this.buckets[index].key === key) {
    this.buckets[index].value = value;
  } else {
    var node = this.buckets[index];

    while(node.next) {
      if(node.next.key === key) {
        node.next.value = value;
      }

      node = node.next;
    }

    node.next = new HashNode(key, value);
  }
}

/* Get the value from HashTable*/
HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  var node = this.buckets[index];

  while(node) {
    if(node.key === key) {
      return node.value;
    }

    node = node.next;
  }

  return null;
}

/* Retreive all the nodes */
HashTable.prototype.retreiveAll = function() {
  var allNodes = [];

  for(var i=0; i<this.numBuckets; i++) {
    var node = this.buckets[i];

    while(node) {
      allNodes.push(node);
      node = node.next;
    }
  }

  return allNodes;
}

var ht = new HashTable(30);

