const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.myRoot = null;
    this.firstElem = null;
  }

  getUnderlyingList() {
    return this.myRoot;
  }

  enqueue(value) {
    const newListNode = new ListNode(value);

    if (!this.myRoot) {
      this.myRoot = newListNode;
      return;
    }

    let currentNode = this.myRoot;

    while(currentNode) {
      if (!currentNode.next) {
        currentNode.next = newListNode;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  dequeue() {
    this.firstElem = this.myRoot.value;
    this.myRoot = this.myRoot.next;
    return this.firstElem;
  }
}

module.exports = {
  Queue
};
