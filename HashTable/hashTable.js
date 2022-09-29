class HashTable {
  constructor() {
    this.table = new Array(137);
  }
  // modular hashing [sum modulo the array size] -> downside: can cause collision
  simpleHash(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    console.log("Hash value:" + data + "->" + total);
    return total % this.table.length;
  }
  // Horner's method
  betterHash(string, arr) {
    const H = 37;
    let total = 0;
    for (let i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    return parseInt(total);
  }

  put(data) {
    let pos = this.betterHash(data);
    this.table[pos] = data;
  }

  showDistro() {
    let n = 0;
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] != undefined) {
        console.log(i + ":" + this.table[i]);
      }
    }
  }
}

let someNames = [
  "David",
  "Jennifer",
  "Donnie",
  "Raymond",
  "Cynthia",
  "Mike",
  "Clayton",
  "Danny",
  "Jonathan",
];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}
hTable.showDistro();
