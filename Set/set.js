class Set {
  constructor() {
    this.dataStore = [];
  }

  add(data) {
    // if data does not exist in set
    if (this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data);
      return true;
    } else {
      return false;
    }
  }

  remove(data) {
    let pos = this.dataStore.indexOf(data);
    if (pos > -1) {
      this.dataStore.splice(pos, 1);
      return true;
    } else {
      return false;
    }
  }

  show() {
    return this.dataStore;
  }

  contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
      return true;
    } else {
      return false;
    }
  }
}

let names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
if (names.add("Mike")) {
  console.log("Mike added");
} else {
  console.log("Can't add Mike, must already be in set");
}
console.log(names.show());
let removed = "Mike";
if (names.remove(removed)) {
  console.log(removed + " removed.");
} else {
  console.log(removed + " not removed.");
}
names.add("Clayton");
console.log(names.show());
removed = "Alisa";
if (names.remove("Mike")) {
  console.log(removed + " removed.");
} else {
  console.log(removed + " not removed.");
}
