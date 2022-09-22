class Grade {
  constructor(student) {
    this.student = student;
    this.dataStore = [];
  }

  add = (grade) => {
    this.dataStore.push(grade);
  };

  average = () => {
    let total = 0;
    for (let i = 0; i < this.dataStore.length; i++) {
      total += this.dataStore[i];
    }
    return total / this.dataStore.length;
  };
}

let mary = new Grade("Mary");
mary.add(40);
mary.add(30);
console.log(mary.average());
