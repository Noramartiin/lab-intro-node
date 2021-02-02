class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length++;

    this.items.sort((num1, num2) => {
      if (num1 > num2) {
        return 1;
      } else if (num2 > num1) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  get(pos) {
    if (this.items.length <= pos) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    let largest = 0;
    if (this.items.length < 1) {
      throw new Error("EmptySortedList");
    }
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] > largest) {
        largest = this.items[i];
      }
    }
    return largest;
    // let filteredArray= this.items.filter(elem=>{})
  }

  min() {
    let smallest = Infinity;
    if (this.items.length < 1) {
      throw new Error("EmptySortedList");
    }
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] <= smallest) {
        smallest = this.items[i];
      }
    }
    return smallest;
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
