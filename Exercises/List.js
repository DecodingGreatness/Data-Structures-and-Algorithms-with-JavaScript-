const List = class {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }

  add(element) {
    if (this.listSize == 0) {
      this.dataStore[this.listSize++] = element;
    } else if (this.listSize == 1) {
      if (element > this.dataStore[0]) {
        this.dataStore[this.listSize++] = element;
      }
    } else {
      const min = this.dataStore.reduce((a, b) => (a < b ? a : b));
      if (element > min) {
        this.dataStore[this.listSize++] = element;
      }
    }

    console.log(this.dataStore);
  }

  insert(element) {
    this.dataStore.sort();
    const biggestValue = this.dataStore[this.listSize - 1];
    if (element < biggestValue) {
      let biggerValueList = [];
      for (let index = 0; index < this.dataStore.length; index++) {
        if (this.dataStore[index] > element) {
          biggerValueList.push(this.dataStore[index]);
          let afterValue = biggerValueList[0];
          let insertPos = this.find(afterValue);
          if (insertPos > -1) {
            this.dataStore.splice(insertPos, 0, element);
            this.listSize++;
            return true;
          }
          return false;
        }
      }
    }
  }

  find(element) {
    for (let index = 0; index < this.dataStore.length; index++) {
      if (this.dataStore[index] == element) {
        return index;
      }
    }
    return -1;
  }

  display() {
    console.log(this.dataStore);
  }
};

test = new List();
test.add(1);
test.add(2);
test.add(9);
console.log(test.listSize);
test.insert(7);
test.display();
test.insert(3);
test.display();

const Person = class {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }

  append(name, gender) {
    this.dataStore.push({ name: name, gender: gender });
  }

  display() {
    console.log(this.dataStore);
    for (let index = 0; index < this.dataStore.length; index++) {
      if (this.dataStore[index].gender == "M") {
        console.log(this.dataStore[index].name);
      }
    }
  }
};

const ppl = new Person();
ppl.append("Harry Potter", "M");
ppl.append("Lady Gaga", "F");
ppl.append("Warren Buffet", "M");
ppl.append("Charlie Munger", "M");
ppl.append("Bill Gates", "M");
ppl.append("Serene", "F");
ppl.append("Peter Pan", "M");
ppl.append("Lady M", "F");
ppl.display();
