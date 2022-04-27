const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.myRoot = null;
    this.hasAnswer = false;
    this.itemFind = null;
    this.arrMinValue = [];
    this.arrMaxValue = [];
  }

  root() {
    if (!this.myRoot) {
      return null;
    }
    return  {data: this.myRoot.value};
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.myRoot) {
      this.myRoot = newNode;
      return;
    }

    let currentNode = this.myRoot;

    while(currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }

  }

  preOrder(node, callback) {
    if (!node) {
      return;
    }

    if (callback) {
      callback(node);
    }

    this.preOrder(node.left, callback);
    this.preOrder(node.right, callback);
  }

  has(data) {
    this.hasAnswer = false;
    this.preOrder(this.myRoot, (node) => {
      if (data === node.value) {
        this.hasAnswer = true;
      }
    })
    return this.hasAnswer;
  }

  find(data) {
    this.preOrder(this.myRoot, (node) => {
      if (data === node.value) {
        this.itemFind = node.value;
      }
    })
    if (!this.itemFind) {
      return null;
    }
    return {data: this.itemFind};
  }

  remove(data) {
    this.preOrder(this.myRoot, (node) => {
      if (data === node.value) {
        node.value = '';
      }
    })
  }

  min() {
    this.arrMinValue =[];
    this.preOrder(this.myRoot, (node) => {
      this.arrMinValue.push(node.value);
    })
    return Math.min.apply( Math, this.arrMinValue.filter((item) => item !== '') );
  }

  max() {
    this.arrMaxValue = [];
    this.preOrder(this.myRoot, (node) => {
      this.arrMaxValue.push(node.value);
    })
    return Math.max.apply( Math, this.arrMaxValue );
  }
}

module.exports = {
  BinarySearchTree
};