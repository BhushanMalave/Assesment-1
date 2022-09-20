class Stack {
  constructor() {
    this.Top = -1;
    this.arr = [];
    this.temp = [];
    this.len = 0;
  }

  Push = (ele) => {
    this.Top++;
    this.arr.push(ele);
    //console.log(this.arr);
    // console.log(this.Top);
  };

  Pop = () => {
    let ele = this.arr.pop();
    this.Top--;
    return ele;
  };

  isEmpty = () => {
    if (this.Top === -1) {
      console.log("Stack is empty");
    }
  };

  size = () => {
    console.log("Number of elements in Stack are : " + +(this.Top + 1));
  };

  removeOdd = () => {
    while (this.arr.length !== 0) {
      var val = this.arr[this.arr.length - 1];
      this.Pop();
      if (val % 2 === 0) {
        this.temp.push(val);
      }
    }
    while (this.temp.length != 0) {
      this.Push(this.temp[this.temp.length - 1]);
      this.temp.pop();
    }
    console.log(this.arr);
  };

  duplicate = () => {
    let dup = [...this.arr];
    console.log(dup);
  };
}

let a = new Stack();
a.Push(1);
a.Push(2);
a.Push(3);
a.Push(4);
a.Push(5);
a.Pop();
a.isEmpty();
a.size();

a.removeOdd();
a.duplicate();
