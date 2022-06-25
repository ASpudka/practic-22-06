"use strict";

class Stack {
  constructor(maxSize = 10,...args) {
    this._maxSize = maxSize;
    this._size = 0;
    for (const argument of args) {
      this.push(argument);
    }
  };
  get size() {
    return this._size;
  };
  get empty() {
    return this._size === 0;
  };
  push(argument) {
    if (this._size >= this._maxSize) {
      throw new RangeError("stack overflow");
    }
    this[`_${this._size}`] = argument;
    return ++this._size;
  }
  pick() {
    return this[`_${this._size-1}`];
  }
  pop() {
    if(this.empty){
      return;
    }
    const last = this[`_${this._size-1}`];
    delete this[`_${this._size-1}`];
    --this._size;
    return last;
  };
  }


// const stack1 = new Stack();

// const stack2 = new Stack (5,2,3,4,5,6,);
// console.log(stack2);
