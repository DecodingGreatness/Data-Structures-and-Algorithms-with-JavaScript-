class Dictionary {
  constructor() {
    this.datastore = new Array();
  }

  add(key, value) {
    this.datastore[key] = value;
  }

  find(key) {
    return this.datastore[key];
  }

  remove(key) {
    delete this.datastore[key];
  }

  showAll() {
    for (let key of Object.keys(this.datastore).sort()) {
      console.log(key + " -> " + this.datastore[key]);
    }
  }

  count() {
    let n = 0;
    for (let key of Object.keys(this.datastore)) {
      n++;
    }
    return n;
  }

  clear() {
    this.datastore = {};
  }
}

let pbook = new Dictionary();
pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
pbook.showAll();
