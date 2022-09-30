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

  put(key, data) {
    let pos = this.betterHash(key);
    this.table[pos] = data;
  }

  get(key) {
    return this.table[this.betterHash(key)];
  }

  showDistro() {
    let n = 0;
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] != undefined) {
        console.log(i + ":" + this.table[i]);
      }
    }
  }

  buildChains() {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = new Array();
    }
  }

  put2(key, data) {
    let pos = this.betterHash(key);
    let index = 0;
    if (this.table[pos][index] == undefined) {
      this.table[pos][index] = data;
      index++;
    } else {
      while (this.table[pos][index] != undefined) {
        index++;
      }
      this.table[pos][index] = data;
    }
  }

  showDistro2() {
    let n = 0;
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] != undefined) {
        console.log(i + ":" + this.table[i]);
      }
    }
  }
}

module.exports = HashTable;
