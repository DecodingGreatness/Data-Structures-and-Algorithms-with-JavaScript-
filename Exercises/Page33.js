const Grades = class {
  constructor() {
    this.arr = [];
  }

  add = (grade) => {
    this.arr.push(grade);
  };

  avg = () => {
    let sum = 0;
    for (let i = 0; i < this.arr.length; i++) {
      sum += this.arr[i];
    }
    return sum / this.arr.length;
  };

  display = () => {
    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i]);
    }
  };

  reverseDisplay = () => {
    for (let i = this.arr.length - 1; i > -1; i--) {
      console.log(this.arr[i]);
    }
  };

  clear = () => {
    this.arr = [];
  };
};

const score = new Grades();

score.clear();
score.display();
score.add(23);
score.display();
score.add(70);
score.add(33);
score.display();
score.reverseDisplay();
