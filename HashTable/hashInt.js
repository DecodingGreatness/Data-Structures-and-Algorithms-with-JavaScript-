const HashTable = require("./hashTable.js");

let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let genStuData = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let num = "";
    for (let j = 1; j <= 9; j++) {
      num += Math.floor(Math.random() * 10);
    }
    num += getRandomInt(50, 100);
    arr[i] = num;
  }
};

let hTable = new HashTable();
hTable.buildChains();
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
for (let i = 0; i < someNames.length; i++) {
  hTable.put(someNames[i]);
}
hTable.showDistro2();
